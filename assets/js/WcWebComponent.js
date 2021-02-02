class WcWebComponent {
    constructor(component) {
        this.name = 'wc-' + component;
        this.component = component;
        this.template = undefined;
    }

    registerComponent() {
        fetch(`./assets/components/_${this.component}/_${this.component}.html`)
            .then(stream => stream.text())
            .then(html => this.parseHtml(html))
            // .then(function (html) {
            //     var parser = new DOMParser();
            //     var doc = parser.parseFromString(html, "text/html");

            //     // You can now even select part of that html as you would in the regular DOM 
            //     // Example:
            //     // var docArticle = doc.querySelector('article').innerHTML;

            //     console.log(this);
            //     // console.log(doc.querySelector('#wcElement'));
            //     // console.log(doc.querySelector('#wcElement').content);
            //     // this.template = doc.querySelector('#wcElement').content;
            //     // console.log(this.template);
            //     defineComponent(doc.querySelector('#wcElement').content);
            // })
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

        this.template = doc.querySelector('#wcElement').content;
        this.defineComponent(this.template);
    }

    defineComponent(template) {
        class MyWcElement extends HTMLElement {
            constructor() {
                super();
                let shadow = this.attachShadow({ mode: 'open' });
                // shadow.appendChild(this.template.cloneNode(true));
                shadow.appendChild(template.cloneNode(true));
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