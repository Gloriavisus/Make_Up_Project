'use strict';
function LandingPage(parentElement, ){
    this.parentElement = parentElement;
    this.elements = null;
    this.makeUps = [];
    this.listItems = '';
}


LandingPage.prototype.generate = async function(){
    await this.getMakeUps();
    this.elements = "";
    this.makeUps.forEach((nailPolish)=>{
        this.listItems += `<div class="card" id=${nailPolish.id}>
                               <div id=${nailPolish.id}>
                               <img id=${nailPolish.id} src="${nailPolish.image_link}" alt="${nailPolish.name}">
                                <h3  id=${nailPolish.id} >Name: ${nailPolish.name}</h3>
                                <p id=${nailPolish.id}>Brand: ${nailPolish.brand}</p>
                                </div>
                            </div>`
    })


    this.elements += `
        <header>
            <h1> Beautiful Nail polish </h1>
            <ul>
            ${this.listItems}
            </ul>
        </header>
        `;
      

    this.render();
    this.elements = ""
}

LandingPage.prototype.render = function(){
    this.parentElement.innerHTML = this.elements;
    var self = this;
    this.addEvents(self);
}
LandingPage.prototype.addEvents = function(self){
    let cards = document.querySelectorAll('.card');
    cards.forEach((card)=>{
        card.addEventListener('click', function(event){
            event.stopPropagation();
            routerInstance.buildDom("/nailpolish", self.parentElement, event.target.id);
        })
    })
}
LandingPage.prototype.getMakeUps = async function(){
    this.makeUps = await nailPolishInstance.getAllNailPolish("nail_polish");
}