let reservas = JSON.parse(localStorage.getItem('reservas')) || []

const nombre = document.getElementById('nombreempresa')
const fecha = document.getElementById('fechavisita')
const hora = document.getElementById('hora')
const problema = document.getElementById('descripcionproblema')
const btnreserva = document.getElementById('btnreservar')
const btnlog = document.getElementById('btnlog')

// Pillamos la ID del localStorage
const IDReserva = localStorage.getItem('reservaElegida')
// Pillamos la lista de reservas
const listaDeReservas = JSON.parse(localStorage.getItem('reservas'))
// Pillamos la reserva que vamos a editar
const reserva = listaDeReservas[IDReserva]

// Asignamos los valores de los inputs con los valores del objecto
nombre.value = reserva.empresa
hora.value = reserva.hora
fecha.value = reserva.fecha
problema.value = reserva.problema

btnreserva.addEventListener('click', () => {
  location.href = './reservas.html'
})

btnreserva.addEventListener('click', () => {
  const reserva = {
    empresa: nombre.value,
    fecha: fecha.value,
    hora: hora.value,
    problema: problema.value,
  }

  // Editamos el item a editar en la lista de reservas
  reservas[IDReserva] = reserva
  // Reemplazamos la lista entera en el local Storage
  localStorage.setItem('reservas', JSON.stringify(reservas))
  // Borramos la reserva elegida del local Storage
  localStorage.setItem('reservaElegida', '')

  nombre.value = ''
  fecha.value = ''
  hora.value = ''
  problema.value = ''

  location.href = './reservas.html'
})