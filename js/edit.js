let reservas = JSON.parse(localStorage.getItem('reservas')) || []

const nombre = document.getElementById('nombreempresa')
const fecha = document.getElementById('fechavisita')
const hora = document.getElementById('hora')
const problema = document.getElementById('descripcionproblema')
const btnreserva = document.getElementById('btnreservar')
const btnlog = document.getElementById('btnlog')

const IDReserva = localStorage.getItem('reservaElegida')

const listaDeReservas = JSON.parse(localStorage.getItem('reservas'))

const reserva = listaDeReservas[IDReserva]


nombre.value = reserva.empresa
hora.value = reserva.hora
fecha.value = reserva.fecha
problema.value = reserva.problema

btnreserva.addEventListener('click', () => {
  const reserva = {
    empresa: nombre.value,
    fecha: fecha.value,
    hora: hora.value,
    problema: problema.value,
  }


  reservas[IDReserva] = reserva

  localStorage.setItem('reservas', JSON.stringify(reservas))

  localStorage.setItem('reservaElegida', '')

  nombre.value = ''
  fecha.value = ''
  hora.value = ''
  problema.value = ''

  Swal.fire({
    title: "¡TU RESERVA FUE EDITADA!",
    text: "Puedes volver a editarla si lo deseas.",
    icon: "success",
    confirmButtonColor: "#000000",
    background: "#330000",
    color: "#ffffff",

  }).then(() => {
    location.href = './reservas.html'
  })

  


})