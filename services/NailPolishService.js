'use strict';
function NailPolishService(){
    this.baseUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type='
}
NailPolishService.prototype.getAllNailPolish = async function(ending){
    var response = await fetch(`${this.baseUrl}${ending}`);
    var data = await response.json();
    return data;
}


var nailPolishInstance = new NailPolishService();
