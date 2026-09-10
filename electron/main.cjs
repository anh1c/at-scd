const { app, BrowserWindow, dialog } = require('electron');
const { autoUpdater } = require('electron-updater');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const DIST_DIR = path.resolve(__dirname, '..', 'packages', 'distribution', 'dist');

const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function startStaticServer() {
  const server = http.createServer((request, response) => {
    const requestPath = decodeURIComponent(
      new URL(request.url, 'http://localhost').pathname,
    );
    const relativePath = requestPath.replace(/^\/+/, '');
    const requestedFile = path.resolve(DIST_DIR, relativePath || 'index.html');
    const safePath = requestedFile.startsWith(DIST_DIR + path.sep);
    const filePath =
      safePath && fs.existsSync(requestedFile) && fs.statSync(requestedFile).isFile()
        ? requestedFile
        : path.join(DIST_DIR, 'index.html');

    fs.readFile(filePath, (error, data) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end('Unable to load AT-SCD.');
        return;
      }

      response.writeHead(200, {
        'Cache-Control': 'no-cache',
        'Content-Type':
          MIME_TYPES[path.extname(filePath).toLowerCase()] ||
          'application/octet-stream',
      });
      response.end(data);
    });
  });

  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      resolve({ server, port: server.address().port });
    });
  });
}

async function createWindow() {
  const { server, port } = await startStaticServer();
  const window = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 700,
    backgroundColor: '#ffffff',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  window.on('closed', () => server.close());
  await window.loadURL(`http://127.0.0.1:${port}/`);
}

function configureAutoUpdater() {
  if (!app.isPackaged) return;

  autoUpdater.autoDownload = false;
  autoUpdater.autoInstallOnAppQuit = true;
  autoUpdater.on('error', error => console.error('AT-SCD update error:', error));

  autoUpdater.on('update-available', async updateInfo => {
    const result = await dialog.showMessageBox({
      type: 'info',
      title: 'AT-SCD update available',
      message: `New update ${updateInfo.version} is available. Do you want to install it?`,
      buttons: ['Yes', 'No'],
      defaultId: 0,
      cancelId: 1,
    });

    if (result.response !== 0) return;

    try {
      await autoUpdater.downloadUpdate();
      const installResult = await dialog.showMessageBox({
        type: 'info',
        title: 'AT-SCD update downloaded',
        message: 'The update is ready. Restart AT-SCD now to install it?',
        buttons: ['Restart now', 'Later'],
        defaultId: 0,
        cancelId: 1,
      });

      if (installResult.response === 0) {
        autoUpdater.quitAndInstall();
      }
    } catch (error) {
      console.error('AT-SCD update download failed:', error);
      await dialog.showMessageBox({
        type: 'error',
        title: 'AT-SCD update failed',
        message: 'The update could not be downloaded. Please try again later.',
      });
    }
  });

  autoUpdater.checkForUpdates().catch(error => {
    console.error('AT-SCD update check failed:', error);
  });
}

app.whenReady()
  .then(async () => {
    await createWindow();
    configureAutoUpdater();
  })
  .catch(error => {
    console.error(error);
    app.quit();
  });

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
