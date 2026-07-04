// app-shell.js
import {LitElement, html, css} from 'lit';
import { Router } from '@lit-labs/router';
import { authService } from './services/auth-service.js';
import { sharedStyles } from './styles/shared-styles.js'

// app-shell.js

class AppShell extends LitElement {
  static styles = [
    sharedStyles,
    css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  `,
  ];
  router = new Router(this, [
    {
      path: '/login',
      render: () => html`<login-view></login-view>`,
      enter: async () => { await import('./views/login-view.js'); return true; },
    },
    {
      path: '/',
      render: () => html`<dashboard-view></dashboard-view>`,
      enter: async () => {
        if (!authService.isAuthenticated()) {
          window.history.pushState({}, '', '/login');
          this.router.goto('/login').catch(console.error);
          return false;
        }
        await import('./views/dashboard-view.js');
        return true;
      },
    },
  ],
      {
        fallback: {
          render: () => html`<error-view code="404"></error-view>`,
          enter: async () => { await import('./views/error-view.js'); return true; },
        },
      }
  );

  render() {
    return html`${this.router.outlet()}`;
  }
}

customElements.define('app-shell', AppShell);