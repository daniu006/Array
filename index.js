"use strict"

let phrase="Vida hay una sola";
let numWord=2;
let count=0;
let space= '';
let start= 0;

for(let i=0; i < phrase.length; i++){
  if(phrase[i]==space){
    count++;
    
    if(count === numWord-1){
      start=i;
    }
    if(count === numWord){
      end=i;
    }
    if(count === numWord-1){
      start=i;
    }
  }
}

alert(phrase.substring(start,end));
  

