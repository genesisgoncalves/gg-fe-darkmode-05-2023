

function cambiar() {
    document.body.classList.toggle('tema-claro');
    document.body.classList.toggle('tema-oscuro');

    if (claseBody == "tema-claro") {
        elemento.textContent = "oscuro";
    } else {
        elemento.textContent = "claro";
    }
}