'use strict';

function Card(nailpolish) {
  this.nailpolish = nailpolish;
}

Card.prototype.generate = function() {
  return `
  <article>
    <h3>${this.nailpolish.name}</h3>
    <img class="imagen-card" src="${this.nailpolish.image_link}" alt=""/>
    <p>${Math.floor(this.nailpolish.price)} €</p>
    <p>${this.nailpolish.description}</p>
    <p>${this.nailpolish.created_at}</p>
    <p>${this.nailpolish.website_link}</p>
    
  </article>
`;
}
