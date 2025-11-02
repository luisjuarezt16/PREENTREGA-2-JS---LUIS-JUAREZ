let reservas = JSON.parse(localStorage.getItem("reservas")) || []

const nombre = document.getElementById ("nombreempresa")
const visita = document.getElementById ("fechavisita")
const hora = document.getElementById ("hora")
const problema = document.getElementById ("descripcionproblema")
const btnreserva = document.getElementById ("btnreservar")
const btnlog = document.getElementById ("btnlog")


const IDReserva = localStorage.getItem ("reservaElegida")

const listaDeReservas = JSON.parse(localStorage.getItem("reservas"))

const reserva = listaDeReservas [IDReserva]


nombre.value = reserva.empresa
hora.value = reserva.empresa
visita.value = reserva.visita
problema.value = reserva.problema


btnlog.addEventListener ("click", ()=> {
   
    location.href = "../login.html"

})


btnreserva.addEventListener ("click", ()=> {

    const reserva = {
        nombre: nombre.value,
        fecha: visita.value,
        hora: hora.value,
        problema: problema.value,

    }
    

    reservas [IDReserva] = reserva 

    localStorage.setItem("reservas", JSON.stringify(reservas))

    localStorage.setItem("reservaElegida", "")


    nombre.value = ""
    visita.value = ""
    hora.value = ""
    problema.value = ""


    location.href = "./reservas.html"

})


