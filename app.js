'use strict';
function main(){
    var ENTRY_POINT = '/';
    var layoutInstance = null;
    var navbarInstance = null;
    var links = [
        {name: 'Home',
        url:'/'},
    ];
    var rootElement = document.querySelector('#root');
    console.log(rootElement);
    generateLayout();
    activateRouter();
    

function generateLayout(){
        layoutInstance = new Layout(rootElement);
        layoutInstance.generate();

    }
function activateRouter(){
     routerInstance.buildDom(ENTRY_POINT, layoutInstance.main)
    }

function changePage(event){
    var url = event.target.attributes.url.value;
    routerInstance.builDom( url, layoutInstance.main);
    }
};

window.addEventListener('load',main);