function mostrarInfoHorno() {
    var selectHorno = document.getElementById("horno");
    var hornoSeleccionado = selectHorno.options[selectHorno.selectedIndex].value;
    var infoHornoDiv = document.getElementById("infoHorno");

    
    infoHornoDiv.innerHTML = "";

    
    var imagen = "";
    var descripcion = "";

    if (hornoSeleccionado === "Horno_pizzero") {
        imagen = "img/HornoPizzero.jpg";
        descripcion = "Este es un horno pizzero diseñado para hornear pizzas de manera rápida y uniforme, posee un revestimiento con ladrillos refrectarios, lana de vidrio, y cemento refrectario, lo que permite que el calor se mantenga dentro del horno";
    } else if (hornoSeleccionado === "Horno_especial") {
        imagen = "img/HornoEspecial.jpg";
        descripcion = "Este es un horno especial con características únicas para hornear panes artesanales, este ademas posee una estructura superior al horno comun, lo que provoca que el calor sea mas dificil de salir, haciendo que sea mas rapido cocinar, ideal para usarlo como herramienta de trabajo";
    } else if (hornoSeleccionado === "Horno_comun") {
        imagen = "img/HornoComun.jpg";
        descripcion = "Este es un horno común que se puede utilizar para una variedad de propósitos de cocción. El mejor horno calidad/precio";
    }

    
    var imagenElemento = document.createElement("img");
    imagenElemento.src = imagen;
    imagenElemento.alt = "Imagen del horno";
    infoHornoDiv.appendChild(imagenElemento);

    var descripcionElemento = document.createElement("div");
    descripcionElemento.textContent = descripcion;
    descripcionElemento.classList.add("descripcion-horno");
    infoHornoDiv.appendChild(descripcionElemento);
}
