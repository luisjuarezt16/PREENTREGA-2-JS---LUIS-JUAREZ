
const usuario = document.getElementById ("usuario")
const contraseña = document.getElementById ("contraseña")
const btnlogin = document.getElementById ("btningresar")


btnlogin.addEventListener ("click", () => {

    if (usuario.value === "admin" && contraseña.value ==="12345") {
        location.href = "../pages/reservas.html"
    }

})