'use strict';
function main(){
    var ENTRY_POINT = '/';
    var layoutInstance = null;
    var myBeautyFooter = null;
    var navbarInstance = null;
    var rootElement = document.querySelector('#root');

    generateLayout();
    activateRouter();
    generateFooter();
    

function generateLayout(){
        layoutInstance = new Layout(rootElement);
        layoutInstance.generate();

    }
function activateRouter(){
     routerInstance.buildDom(ENTRY_POINT, layoutInstance.main)
    }

function generateFooter(){
    myBeautyFooter = new Footer(layoutInstance.footer);
    myBeautyFooter.generate();
}
};

window.addEventListener('load',main);