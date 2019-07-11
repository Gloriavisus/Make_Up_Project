'use strict';
function Loading(parentElement) {
    this.parentElement = parentElement;
    this.elements      = null;
  }
  
  Loading.prototype.generate = function() {
    this.elements = '<section class="loading"><p>serching...<div></div></section>';
    this.render();
  }
  
  Loading.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
  }
  