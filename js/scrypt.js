let nomeUtente = prompt('Come ti chiami?')
let numeroKm = parseInt(prompt('Quanti chilometri vuoi fare?'));
console.log(numeroKm);
let etaUtente = parseInt(prompt('Quanti anni hai?'));
console.log(etaUtente);
document.getElementById('Km').innerHTML = numeroKm
document.getElementById('nome').innerHTML = nomeUtente
document.getElementById('eta').innerHTML = etaUtente 
const costoalKm = 0.21;
const minorenni = 18;
const over65 = 65;
let costoKm = numeroKm * costoalKm;
let costo = Math.ceil(costoKm)
let costoIntero = costo.toFixed()
let costoMultipli2 = costoIntero * 2;
let costoMultipli3 = costoIntero * 3; 
console.log(costoIntero)
if(isNaN(numeroKm)|| isNaN(etaUtente)){
    alert('ricarica la pagina')
}
if(etaUtente <= minorenni){
    let scontoMinorenni = (costoIntero * 20) / 100;
    let costoMinorenni = costoIntero - scontoMinorenni;
    console.log(costoMinorenni)
    document.getElementById('prezzoriservato').innerHTML = costoMinorenni + ' ' + '€'

    
} else if( etaUtente >= over65){
    let scontoOver65 = (costoIntero * 40) / 100;
    let costoOver65 = costoIntero - scontoOver65;
    console.log(costoOver65)
    document.getElementById('prezzoriservato').innerHTML = costoOver65 + ' ' + '€'

}else if( (etaUtente > minorenni) || (etaUtente < over65)){
    document.getElementById('prezzoriservato').innerHTML = costoIntero
}





