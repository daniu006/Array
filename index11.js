"use strict"

let nums = [2, 3, 2, 3, 5];
let indicesAsc = [...Array(nums.length).keys()].sort((a, b) => nums[a] - nums[b]);
let indicesDesc = [...indicesAsc].reverse();

alert("Orden Ascendente:");
alert(indicesAsc);

alert("Orden Descendente:");
alert(indalert);
