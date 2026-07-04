import { LitElement, html } from 'lit';

class LoginView extends LitElement {
    render() {
        return html`<h1>LOGIN VIEW</h1>`;
    }
}
customElements.define('login-view', LoginView);