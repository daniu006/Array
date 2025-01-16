"use strict"

let frase=`Vida`;
let cont=0;
 for(let i=0; i < frase.length; i++){
  if(frase[i]== "" || frase[i]=='.'){
    cont++;
  }
 }
alert(cont);

