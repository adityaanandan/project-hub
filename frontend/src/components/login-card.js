import '@awesome.me/webawesome/dist/components/input/input.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/card/card.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js'
import {LitElement, html, css} from "lit";


export class LoginCard extends LitElement {
    static properties = {
    }

    static styles = css`
        :host {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        wa-card {
            width: 75vh;
            padding: 1rem;
        }
        wa-input {
            display: block;
            margin-bottom: 1rem;
        }
        wa-button {
            margin-top: 2rem;
        }
        h3 {
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-size: 1rem;
            text-align: center;
        }
        .social-icons {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            font-size: 1.5em;
        }
    `

    constructor(){
        super();
    }

    dispatchInput = (e) => {
        this.dispatchEvent(
            new CustomEvent(`${e.target.name}-change`, {
                detail: {value: e.target.value},
                bubbles: true,
                composed: true,
            })
        )
    }

    dispatchSubmit = (e) => {
        this.dispatchEvent(
            new CustomEvent('login-submit', {
                bubbles: true,
                composed: true,
                }
            )
        )
    }

    render() {
        return html `
            <wa-card>
                <wa-input name="username" label="Username" @input=${this.dispatchInput}></wa-input>
                <wa-input name="password" label="Password" type="password" password-toggle @input=${this.dispatchInput}></wa-input>
                <wa-button variant="success" size="m" @click=${this.dispatchSubmit} pill>Submit</wa-button>
                <h3>or log in with</h3>
                <div class="social-icons">
                    <wa-icon family="brands" name="github"></wa-icon>
                    <wa-icon family="brands" name="google"></wa-icon>
                </div>
            </wa-card>
            
            
        `

    }
}

customElements.define('login-card', LoginCard);
