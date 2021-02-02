class Sidebar extends HTMLElement {
    constructor() {
        super();
        console.log("constructed!");
    }

    connectecCallback() {
        console.log("connected");
    }

    disconnectedCallback() {
        console.log("disconnected");
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log(`Attribute: ${name} changed`);
    }

    adoptedCallback() {
        console.log("adopted");
    }
}

window.customElements.define('wc-sidebar', Sidebar);