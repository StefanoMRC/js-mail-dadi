// let array=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
// let numArray=array.length;
// for(let i=(numArray - 6); i < numArray; i++){
//     document.getElementById("cont").innerHTML += `<div>${array[i]}</div>`
// }

let array2=[]
let numeri= prompt("quanti numeri vuoi generare?")
let estrazione=prompt("quanti ne vuoi estrarre?")

for(let i=0; i <= numeri - 1; i++){
    array2.push( Math.round(Math.random()*100+1));
    // document.getElementById("cont").innerHTML+=`<div>${array2[i]}</div>`
}

for(let i=(array2.length - estrazione); i < array2.length; i++){
       document.getElementById("cont").innerHTML += `<div>${array2[i]}</div>`
}   
console.log(array2)