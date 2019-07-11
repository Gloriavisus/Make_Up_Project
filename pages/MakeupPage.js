'use strict';

function MakeupPage(parentElement, id) {
    this.parentElement = parentElement;
    this.elements      = null;
    this.nailpolish    = null;
    this.loading       = null;
    this.id = id;
  }
  
  MakeupPage.prototype.generate = async function() {

    this.generateLoading();
  
    await this.connectToAPI();
    this.elements = `
  
      <section class="cards-container">
      <header>
      <h1> Beautiful Nail polish </h1>
      </header>
    `;
     this.nailpolish.forEach((nailpolish) => {
      var nailpolishCard = new Card(nailpolish);
      this.elements += nailpolishCard.generate();
    })
    this.elements += `<button class="home">Home</button>`
    this.elements += '</section>';
  
    this.render();
    this.elements = "";
  }
  
  MakeupPage.prototype.render = function() {
    this.parentElement.innerHTML = "";
    this.parentElement.innerHTML = this.elements;
    var self = this;
    this.addEvent(self)
  }
  MakeupPage.prototype.addEvent = function(self){
    var button = document.querySelector('.home')
    button.addEventListener('click', function(event){
      event.stopPropagation();
      routerInstance.buildDom('/',self.parentElement)})
  }
  
  MakeupPage.prototype.connectToAPI = async function() {
  
    this.nailpolish = await nailPolishInstance.getAllNailPolish('nail_polish');
    let nailpolish = await this.nailpolish.filter((nailpolish)=> nailpolish.id === Number(this.id))
    this.nailpolish = nailpolish
  }
  
  MakeupPage.prototype.generateLoading = function() {
    this.loading = new Loading(this.parentElement);
    this.loading.generate();
  }
  