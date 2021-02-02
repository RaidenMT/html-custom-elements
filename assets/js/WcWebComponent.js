class WcWebComponent {
    constructor(component, transformFunc) {
        this.name = 'wc-' + component;
        this.component = component;
        this.template = undefined;
        this.transformFunc = transformFunc;
    }

    registerComponent() {
        fetch(`./assets/components/_${this.component}/_${this.component}.html`)
            .then(stream => stream.text())
            .then(html => this.parseHtml(html))
            .catch(function (err) {
                console.log('Failed to fetch page: ', err);
            });
    }

    parseHtml(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");

        // You can now even select part of that html as you would in the regular DOM 
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;
        this.template = doc.querySelector('#wcElement');
        this.defineComponent(this.template, this.transformFunc);
    }

    defineComponent(templateHtml, transformFunc) {
        class MyWcElement extends HTMLElement {
            constructor() {
                super();

                let shadow = this.attachShadow({ mode: 'open' });
                let template = templateHtml;

                if (transformFunc) {
                    template = transformFunc(this, template);
                }

                shadow.appendChild(template.content.cloneNode(true));
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

        window.customElements.define(this.name, MyWcElement);
    }
}

export { WcWebComponent }