import {WcWebComponent}  from '../../js/WcWebComponent.js';

let sidebarLink = new WcWebComponent('sidebar-link');
sidebarLink.registerComponent();




// fetch('./assets/components/_sidebar-link/_sidebar-link.html')
//     .then(stream => stream.text())
//     .then(function(html) {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(html, "text/html");

//         // You can now even select part of that html as you would in the regular DOM 
//         // Example:
//         // var docArticle = doc.querySelector('article').innerHTML;
//         const docArticle = doc.querySelector('#wcSidebarLink').content;
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
//     class SidebarLink extends HTMLElement {
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
    
//     window.customElements.define('wc-sidebar-link', SidebarLink);
// }