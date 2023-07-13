//title double
let alertShow = false

if (document.title === "Home") {
    setInterval(() => {
        document.title =
            alertShow ? "Craftsy"
                : "Home"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "404") {
    setInterval(() => {
        document.title =
            alertShow ? "Craftsy"
                : "404"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "Login") {
    setInterval(() => {
        document.title =
            alertShow ? "Craftsy"
                : "Login"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "Register") {
    setInterval(() => {
        document.title =
            alertShow ? "Craftsy"
                : "Register"

        alertShow = !alertShow
    }, 1000)
}

//change color de las etiqueta a al pasar por encima de ellas

$("a").mouseenter(elem => {
    elem.target.style.color = "blue"
})
$("a").mouseleave(elem => {
    elem.target.style.color = "white"
})

//msj error 404 que se escribe solo
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element", {
        strings: ["ERROR 404, PAGE NOT FOUND!"],
    }).go();
});
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element__login", {
        strings: ["Login!"],
    }).go();
});
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element__register", {
        strings: ["Register!"],
    }).go();
});