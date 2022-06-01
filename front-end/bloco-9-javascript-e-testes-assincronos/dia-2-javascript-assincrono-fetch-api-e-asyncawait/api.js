const url = `https://api.coincap.io/v2/assets`;

async function getCoins() {
    const elementos = await fetch('https://api.coincap.io/v2/assets')
    const organizados = await elementos.json();
    const data = organizados.data;
    return data;
}
getCoins();

const htmlAdd = async () => {
    const notPromisse = await getCoins();
    const lista = document.getElementById('nada');
     notPromisse.filter((best) => Number(best.rank) <= 10)
   .forEach((element) => {
       const createLI = document.createElement('li');
       const price = Number(element.priceUsd)
       console.log(price);
       createLI.innerText = `${element.name} (${element.symbol}): ${price.toFixed(2)} `
       lista.appendChild(createLI);
   })
}
 
window.onload = htmlAdd();