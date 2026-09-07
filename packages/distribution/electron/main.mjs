import { app, BrowserWindow, net, protocol } from 'electron';
import { join, relative } from 'node:path';
import { pathToFileURL } from 'node:url';

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'app',
    privileges: { standard: true, secure: true, supportFetchAPI: true },
  },
]);

const dist = join(app.getAppPath(), 'dist');

app.whenReady().then(() => {
  protocol.handle('app', request => {
    const path = decodeURIComponent(new URL(request.url).pathname);
    const file = join(dist, path === '/' ? 'index.html' : path);

    if (relative(dist, file).startsWith('..'))
      return new Response('Not found', { status: 404 });

    return net.fetch(pathToFileURL(file).toString());
  });

  const window = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1024,
    minHeight: 640,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  window.loadURL('app://-/');
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
