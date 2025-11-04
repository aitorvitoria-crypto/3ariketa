// script.js fitxategiaren barruan
console.log("JavaScript kanpoko fitxategitik kargatzeko");

function aldatuKolorea() {
    // 1. HTML elementua lortu (h1-a, gure adibidean)
    const izenburua = document.getElementById("izenburua");
    
    // 2. Elementuaren uneko kolorea egiaztatu
    const unekoKolorea = izenburua.style.color;

    // 3. Logika aplikatu (Baldintzapeko egitura: if...else)
    if (unekoKolorea === "blue") {
        izenburua.style.color = "black"; // edo "black", atzeko planoaren arabera
    } else {
        izenburua.style.color = "blue";
    }
}