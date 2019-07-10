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
      <header>
      
      </header>
      <section class="cards-container">
    `;
    this.nailpolish.forEach((nailpolish) => {
      var nailpolishCard = new Card(nailpolish);
      this.elements += nailpolishCard.generate();
    })
    this.elements += '</section>';
  
    this.render();
  }
  
  MakeupPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
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
  