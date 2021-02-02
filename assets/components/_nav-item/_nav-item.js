import { WcWebComponent }  from '../../js/WcWebComponent.js';

const transformFunc = (wcElement, template) => {
    
    if (wcElement.hasAttribute('wc-text')) {
        template.content.querySelector('.wc-text').innerText = wcElement.getAttribute('wc-text');
    }

    if (wcElement.hasAttribute('wc-icon')) {
        template.content.querySelector('.wc-icon').classList.remove('bi-pencil-fill');
        template.content.querySelector('.wc-icon').classList.add('bi-' + wcElement.getAttribute('wc-icon'));
    }

    return template;
}

let navItem = new WcWebComponent('nav-item', transformFunc);
navItem.registerComponent();