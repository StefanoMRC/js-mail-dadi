let numUtente = Math.round(Math.random()*5+1);
let numPc= Math.round(Math.random()*5+1);
console.log(numUtente)
console.log(numPc)
if(numUtente>numPc){
    document.getElementById("cont").innerHTML=`<h1>Complimenti hai vinto</h1><div><h2>il tuo numero è:${numUtente}</h2></div> <div> <h2>il numero del banco è:  ${ numPc}</h2> </div>`
} else{
    document.getElementById("cont").innerHTML=`<h1>Mi dispiace hai perso</h1><div><h2>il tuo numero è:${numUtente}</h2></div> <div> <h2>il numero del banco è:  ${ numPc}</h2> </div>`
}