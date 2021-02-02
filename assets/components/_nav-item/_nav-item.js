import { WcWebComponent }  from '../../js/WcWebComponent.js';

export const transformFunc = (wcElement, template) => {
    
    if (wcElement.hasAttribute('wc-text')) {
        template.content.querySelector('.wc-text').innerText = wcElement.getAttribute('wc-text');
    }

    if (wcElement.hasAttribute('wc-icon')) {
        console.log("quiere ponerle el icono " + 'bi-' + wcElement.getAttribute('wc-icon'));
        template.content.querySelector('.wc-icon').classList.remove('bi-pencil-fill');
        template.content.querySelector('.wc-icon').classList.add('bi-' + wcElement.getAttribute('wc-icon'));
    }
    else {
        console.log('no entra');
    }

    return template;
}

let navItem = new WcWebComponent('nav-item', transformFunc);
navItem.registerComponent();



// fetch('./assets/components/_nav-item/_nav-item.html')
//     .then(stream => stream.text())
//     .then(function(html) {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(html, "text/html");

//         // You can now even select part of that html as you would in the regular DOM 
//         // Example:
//         // var docArticle = doc.querySelector('article').innerHTML;
//         const docArticle = doc.querySelector('#wcNavItem').content;
//         saveTemplate(docArticle);
//     })
//     .catch(function(err) {  
//         console.log('Failed to fetch page: ', err);  
//     });

// let template = null;
// function saveTemplate(html) {
//     define(html);
// }

// function define(template) {
//     class NavItem extends HTMLElement {
//         constructor() {
//             super();
//             let shadow = this.attachShadow({ mode: 'open' });
//             shadow.appendChild(template.cloneNode(true));
//         }
    
//         connectecCallback() {
//             console.log("connected");
//         }
    
//         disconnectedCallback() {
//             console.log("disconnected");
//         }
    
//         attributeChangedCallback(name, oldVal, newVal) {
//             console.log(`Attribute: ${name} changed`);
//         }
    
//         adoptedCallback() {
//             console.log("adopted");
//         }
//     }
    
//     window.customElements.define('wc-nav-item', NavItem);
// }