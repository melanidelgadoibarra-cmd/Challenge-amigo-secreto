let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor escribe un nombre");
        input.focus();
        return;
    }

    amigos.push(nombre);
    input.value = "";
    input.focus();
    mostrarLista();
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres");
        return;
    }

    const resultado = document.getElementById("resultado");
    let contador = 0;

    
    const intervalo = setInterval(() => {
        const indiceTemp = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `<p style="color: pink;">Sorteando: <i>${amigos[indiceTemp]}</i></p>`;
        contador++;
    }, 100);

    
    setTimeout(() => {
        clearInterval(intervalo); 
        const indiceFinal = Math.floor(Math.random() * amigos.length);
        const elegido = amigos[indiceFinal];
        resultado.innerHTML = `<p style="color: pink; font-size: 1.5rem;">💖 El amigo secreto es: <i>${elegido}</i></p>`;
        amigos = [];

        mostrarLista();
    
    }, 2000); 
}