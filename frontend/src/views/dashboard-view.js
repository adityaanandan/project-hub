import { LitElement, html } from 'lit';

class DashboardView extends LitElement {
    render() {
        return html`<h1>Dashboard View</h1>`;
    }
}
customElements.define('dashboard-view', DashboardView);