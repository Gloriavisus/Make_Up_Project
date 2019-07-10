'use strict';
function LandingPage(parentElement, links){
    this.parentElement = parentElement;
    this.elements = null;
    this.makeUps = [];
    this.listItems = '';
    this.links = links;
    this.link = '';
}


LandingPage.prototype.generate = async function(){
    await this.getMakeUps();
    this.makeUps.forEach((nailPolish)=>{
        this.listItems += `<div class="card" id=${nailPolish.id}>
                               <div id=${nailPolish.id}>
                                <p id=${nailPolish.id}>Brand: ${nailPolish.brand}</p>
                                <p  id=${nailPolish.id} >Name: ${nailPolish.name}</p>
                                </div>
                            </div>`
    })

    this.links.forEach((link)=>{
        this.link += `<a href=${link.url}>${link.name}</a>`
    })

    this.elements = `
        <header>
            <h1> Make Up Beautiful Nail polish </h1>
            <p>${this.link}</p>
            <ul>
            ${this.listItems}
            </ul>
        `;
      

    this.render();

}

LandingPage.prototype.render = function(){
    this.parentElement.innerHTML = this.elements;
    this.addEvents();
}
LandingPage.prototype.addEvents = function(){
    let cards = document.querySelectorAll('.card');
    cards.forEach((card)=>{
        card.addEventListener('click', function(event){
            event.stopPropagation();
            routerInstance.buildDom("/nailpolish", this.parentElement, ["testing"], event.target.id);
        })
    })
}
LandingPage.prototype.getMakeUps = async function(){
    this.makeUps = await nailPolishInstance.getAllNailPolish("nail_polish");
}