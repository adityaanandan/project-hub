// src/views/error-view.js
import { LitElement, html } from 'lit';

class ErrorView extends LitElement {
    render() {
        return html`<h1>ERROR VIEW (404)</h1>`;
    }
}
customElements.define('error-view', ErrorView);