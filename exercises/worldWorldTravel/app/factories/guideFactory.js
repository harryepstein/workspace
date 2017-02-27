"use strict";
app.factory('GuideFactory', ['', function(){
  return function ($http, $q){
let getGuides = function(){
  return $q((resolve, reject) =>{
    $http.get("data/guides.json")
  })
  .then ( (data) =>{
    resolve(data)
  })
  .catch(error) =>{
    reject(error);
  }
  };
}
}])
