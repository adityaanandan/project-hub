import { LitElement, html } from 'lit';
import { LoginCard } from '../components/login-card.js'

class LoginView extends LitElement {
    static properties = {
        username: {type: String},
        password: {type: String}
    }

    handleSubmit = () => {
        console.log("[App]: ", this.username);
        console.log("[App]: ", this.password);
        if (!this.username || !this.password){
            // TODO: throw alert to user to add one of these fields
        }

        else {
            // TODO: execute api flow for auth
        }
    }

    handleUsernameChange = (e) => {
        this.username = e.detail.value;
    }

    handlePasswordChange = (e) => {
        this.password = e.detail.value;
    }
    render() {
        return html`<login-card 
                @username-change=${this.handleUsernameChange} 
                @password-change=${this.handlePasswordChange}
                @login-submit=${this.handleSubmit}
        >
        </login-card>`;


    }
}
customElements.define('login-view', LoginView);