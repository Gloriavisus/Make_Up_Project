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
    <p>${this.nailpolish.color}</p>
    <p>${this.nailpolish.price}</p>
  </article>
`;
}
