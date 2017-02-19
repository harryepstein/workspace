"use strict";

let Handlbars = require('hbsfy/runtime'),
  cakeInventory = require('./bakery.js');
  cakeTemplate = require('../templates/cake-grid.hbs')
function populatePage(stuff){
  //make a div to put the rendered innerHTML
  let newDiv = document.createElement("div");
  newDiv.innerHTML = cakeTemplate(inventory);

}

  cakeInventory.loadInventory();
  .then (
    function(inventoryFromLoadInventoryResolve){
      console.log("cakePromise", inventoryFromLoadInventoryResolve);
    },
    function(reason){
      console.log("something really went wrong.")
    }

    })
/************************

*************************/
