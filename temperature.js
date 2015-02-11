"use strict";

function calculate(){
  var result;
  var original= document.getElementById("original");
  var temp = original.value;
  var regexp = /^\s*([-+]?\d+(?:.\d+)?(?:[eE][-+]?\d+)?)\s*([cf])\s*$/i

  var m = temp.match(regexp); //Funcion match pone los resultados en un array.

  if(m){
    var num = m[0];
    var type = m[2];
    num = parseFloat(num);

    if(type == 'c' || type == 'C'){
      result = (num * 9/5)+32;
      result = result.toFixed(1) + "ºF";
    }
    else{
      result = (num - 32)*5/9;
      result = result.toFixed(1) + "ºC";
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";

  }
};
