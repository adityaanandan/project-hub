// styles/shared-styles.js
import { css } from 'lit';

export const sharedStyles = css`
                            :host {
                                display: block;
                                font-family: var(--wa-font-family-body);
                                font-size: var(--wa-font-size-m);
                                line-height: var(--wa-line-height-normal);
                                color: var(--wa-color-text-normal);
                            }

* {
    box-sizing: border-box;
}

h1, h2, h3, h4 {
    font-family: var(--wa-font-family-heading);
    font-weight: var(--wa-font-weight-bold);
    line-height: var(--wa-line-height-condensed);
    margin: 0 0 var(--wa-space-m) 0;
}

h1 { font-size: var(--wa-font-size-2xl); }
h2 { font-size: var(--wa-font-size-xl); }
h3 { font-size: var(--wa-font-size-l); }

p {
    margin: 0 0 var(--wa-space-m) 0;
}

a {
    color: var(--wa-color-text-link);
}

.muted {
    color: var(--wa-color-text-quiet);
    font-size: var(--wa-font-size-s);
}
`;