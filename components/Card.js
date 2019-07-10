'use strict';

function Card(nailpolish) {
  this.nailpolish = nailpolish;
}

Card.prototype.generate = function() {
    console.log(this.nailpolish, this.nailpolish.image_link)
  return `
  <article>
    <h3>${this.nailpolish.name}</h3>
    <img src="${this.nailpolish.image_link}" alt=""/>
    <p>${this.nailpolish.price}</p>
    <p>${this.nailpolish.description}</p>
    <p>${this.nailpolish.created_at}</p>
    <p>${this.nailpolish.website_link}</p>
    
  </article>
`;
}
