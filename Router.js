'use strict';
function Router(){
    this.page = null;

    this.id = 0;
}

Router.prototype.buildDom = function(url, parentElement, id){
   
    switch(url){
        case '/':
            this.generateLandingPage(parentElement);
            break;
        case '/nailpolish':
            this.id = id;
            this.generateMakeupPage(parentElement, id);
            break;
        default:
             this.generateLandingPage(parentElement);
    }
}

Router.prototype.generateLandingPage = function(parentElement){
    this.page = new LandingPage(parentElement);
    this.page.generate();
}
Router.prototype.generateMakeupPage = function(parentElement){
    this.page = new MakeupPage(parentElement, this.id);
    this.page.elements = null;
    this.page.generate();
}
var routerInstance = new Router();
