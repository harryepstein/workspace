"use strict";
let bakery = {};
bakery.loadInventory = function(){
  return new Promise(function (resolve, reject){
    inventoryLoader.open("GET", "inventory.json")
    inventoryLoader.send();
    inventoryLoader.addEventListener("load", function(){
      var data = JSON.parse(this.respondText);
      resolve(data);
    })
  })
}






module.exports = bakery;
