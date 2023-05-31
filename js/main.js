var element = document.getElementsByClassName("btn");
element[0].addEventListener("click", cambiar());

function cambiar() {
    document.body.classList.toggle('tema-claro');
    document.body.classList.toggle('tema-oscuro');

    if (claseBody == "tema-claro") {
        element[0].textContent = "Oscuro";
    } else {
        element[0].textContent = "Claro";
    }
}