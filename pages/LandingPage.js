'use strict';
function LandingPage(parentElement){
    this.parentElement = parentElement;
    this.elements = null;
    this.makeUps = [];
}

LandingPage.prototype.generate = function(){
    this.getMakeUps();
    this.elements = `
        <header>
            <h1> Make Up Beautiful Nail polish </h1>
            <img>
            <ul>
                <li></li>
            </ul>

        </header>
        `;
    this.render();
}

LandingPage.prototype.render = function(){
    this.parentElement.innerHTML = this.elements;
}
LandingPage.prototype.getMakeUps = async function(){
    this.makeUps = await nailPolishInstance.getAllNailPolish("nail_polish");
    console.log(this.makeUps);
}