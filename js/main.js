let reservas = JSON.parse(localStorage.getItem("reservas")) || []

const nombre = document.getElementById ("nombreempresa")
const visita = document.getElementById ("fechavisita")
const hora = document.getElementById ("hora")
const problema = document.getElementById ("descripcionproblema")
const btnreserva = document.getElementById ("btnreservar")
const btnlog = document.getElementById ("btnlog")




btnlog.addEventListener ("click", ()=> {
   
    location.href = "../pages/login.html"

})

btnreserva.addEventListener ( "click" , () => {

    
    

    const reserva = {
        empresa: nombre.value,
        fecha: visita.value,
        hora: hora.value,
        problema: problema.value,
    }

    

    reservas.push (reserva)

    localStorage.setItem("reservas", JSON.stringify(reservas))

    nombre.value = ""
    visita.value = ""
    hora.value = ""
    problema.value = ""



} )

