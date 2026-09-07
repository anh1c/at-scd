import { html, TemplateResult } from 'lit-element';
import { Settings } from '@compas-oscd/core';

export function getTheme(theme: Settings['theme']): TemplateResult {
  document.body.style.cssText = bodyStyles[theme];
  return html`
    ${themes[theme]}
    <style>
      * {
        --primary: var(--cyan);
        --secondary: var(--violet);
        --mdc-theme-primary: var(--primary);
        --mdc-theme-secondary: var(--secondary);
        --mdc-theme-background: var(--base3);
        --mdc-theme-surface: var(--base3);
        --mdc-theme-on-primary: var(--base2);
        --mdc-theme-on-secondary: var(--base2);
        --mdc-theme-on-background: var(--base00);
        --mdc-theme-on-surface: var(--base00);
        --mdc-theme-text-primary-on-background: var(--base01);
        --mdc-theme-text-secondary-on-background: var(--base00);
        --mdc-theme-text-icon-on-background: var(--base00);
        --mdc-theme-error: var(--red);

        --mdc-button-disabled-ink-color: var(--base1);

        --mdc-drawer-heading-ink-color: var(--base00);

        --mdc-text-field-fill-color: var(--base2);
        --mdc-text-field-disabled-fill-color: var(--base3);
        --mdc-text-field-ink-color: var(--base00);
        --mdc-text-field-label-ink-color: var(--base00);

        --mdc-select-fill-color: var(--base2);
        --mdc-select-disabled-fill-color: var(--base3);
        --mdc-select-ink-color: var(--base00);

        --mdc-dialog-heading-ink-color: var(--base00);

        --mdc-icon-font: 'Material Icons Outlined';

        --oscd-primary: var(--oscd-theme-primary, var(--cyan));
        --oscd-secondary: var(--oscd-theme-secondary, var(--violet));
        --oscd-error: var(--oscd-theme-error, var(--red));

        --oscd-base03: var(--oscd-theme-base03, var(--base03));
        --oscd-base02: var(--oscd-theme-base02, var(--base02));
        --oscd-base01: var(--oscd-theme-base01, var(--base01));
        --oscd-base00: var(--oscd-theme-base00, var(--base00));
        --oscd-base0: var(--oscd-theme-base0, var(--base0));
        --oscd-base1: var(--oscd-theme-base1, var(--base1));
        --oscd-base2: var(--oscd-theme-base2, var(--base2));
        --oscd-base3: var(--oscd-theme-base3, var(--base3));

        --oscd-text-font: var(--oscd-theme-text-font, 'Roboto');
        --oscd-icon-font: var(--oscd-theme-icon-font, 'Material Icons');

        /* Fallbacks for Material Design variables */
        --md-sys-color-primary: var(--oscd-primary);
        --md-sys-color-on-primary: var(--oscd-base3);
        --md-sys-color-secondary: var(--oscd-secondary);
        --md-sys-color-on-secondary: var(--oscd-base3);
        --md-sys-color-secondary-container: var(--oscd-base2);
        --md-sys-color-surface: var(--oscd-base3);
        --md-sys-color-on-surface: var(--oscd-base00);
        --md-sys-color-surface-variant: var(--oscd-base3);
        --md-sys-color-on-surface-variant: var(--oscd-base00);
        --md-sys-color-surface-bright: var(--oscd-base2);
        --md-sys-color-surface-container: var(--oscd-base3);
        --md-sys-color-surface-container-high: var(--oscd-base3);
        --md-sys-color-surface-container-highest: var(--oscd-base3);
        --md-sys-color-outline-variant: var(--oscd-primary);
        --md-sys-color-scrim: #000000;
        --md-sys-color-error: var(--oscd-error);
        --md-sys-color-on-error: var(--oscd-base3);
        --md-icon-button-disabled-icon-color: var(--oscd-base3);
        /* --md-menu-item-selected-label-text-color: var(--oscd-base01); */
        --md-icon-button-disabled-icon-color: var(--oscd-base3);

        /* textfield */ disabled-label-text-color
        --md-filled-text-field-container-color: var(--oscd-base2);
        --md-filled-text-field-disabled-container-color: var(--oscd-base3);
        --md-filled-text-field-disabled-input-text-color: var(--oscd-base00);
        --md-filled-text-field-disabled-label-text-color: var(--oscd-base00);
      }

      .mdc-drawer span.mdc-drawer__title {
        color: var(--mdc-theme-text-primary-on-background) !important;
      }

      abbr {
        text-decoration: none;
        border-bottom: none;
      }

      mwc-textfield[iconTrailing='search'] {
        --mdc-shape-small: 28px;
      }
    </style>
  `;
}

const bodyStyles: Record<Settings['theme'], string> = {
  dark: 'background: #0f2348',
  light: 'background: #1e3c72',
};

const themes: Record<Settings['theme'], TemplateResult> = {
  light: html`
    <style>
      * {
        --base03: #0f172a;
        --base02: #1e293b;
        --base01: #334155;
        --base00: #475569;
        --base0: #64748b;
        --base1: #94a3b8;
        --base2: #f1f5f9;
        --base3: #ffffff;
        --yellow: #f59e0b;
        --orange: #ea580c;
        --red: #dc2626;
        --magenta: #d4537e;
        --violet: #7f77dd;
        --blue: #1d4ed8;
        --cyan: #00d2ff;
        --green: #16a34a;
      }
    </style>
  `,
  dark: html`
    <style>
      * {
        --base03: #f8fafc;
        --base02: #e2e8f0;
        --base01: #cbd5e1;
        --base00: #94a3b8;
        --base0: #64748b;
        --base1: #475569;
        --base2: #172554;
        --base3: #0f2348;
        --yellow: #fbbf24;
        --orange: #fb923c;
        --red: #f87171;
        --magenta: #f472b6;
        --violet: #a5b4fc;
        --blue: #60a5fa;
        --cyan: #00d2ff;
        --green: #4ade80;
      }
    </style>
  `,
};
