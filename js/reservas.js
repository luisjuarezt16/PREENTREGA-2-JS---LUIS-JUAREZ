let reservas = JSON.parse(localStorage.getItem('reservas')) || []

const contenedor = document.getElementById('contenedor-reservas')

const crearnuevo = document.getElementById('crearreserva')

const borrartodo = document.getElementById('borrartodo')

crearnuevo.addEventListener('click', () => {
  location.href = '../index.html'
})

function mostrarReservas() {
  contenedor.innerHTML = ''

  reservas.forEach((r, i) => {
    contenedor.innerHTML += `
            <div class="col-lg-4 justify-content-center g-3">
                <div class="tarjeta-reserva">
                    <h3>Reserva #${i + 1}</h3>
                    <p>Empresa: ${r.empresa}</p>
                    <p>Fecha: ${r.fecha}</p>
                    <p>Hora: ${r.hora}</p>
                    <p>Problema: ${r.problema}</p>
                    <button type="button" id="btnborrar-${i}" class="btnlog col-lg-4 mb-5">BORRAR RESERVA</button>
                    <button type="button" id="btneditar-${i}" class="btnlog col-lg-4 mb-5">EDITAR RESERVA</button>
                </div>

        `
  })

  for (let i = 0; i < reservas.length; i++) {
    const botonBorrar = document.getElementById(`btnborrar-${i}`);
    const botonEditar = document.getElementById(`btneditar-${i}`);

    botonBorrar.addEventListener('click', () => {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción eliminará la reserva permanentemente.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, borrar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#d33",
        background: "#330000",
        color: "#ffffff"
      }).then((result) => {
        if (result.isConfirmed) {
          let nuevasReservas = []
          for (let j = 0; j < reservas.length; j++) {
            if (j !== i) {
              nuevasReservas.push(reservas[j])
            }
          }

          reservas = nuevasReservas
          localStorage.setItem('reservas', JSON.stringify(reservas))
          mostrarReservas()

          Swal.fire({
            title: "¡Reserva eliminada!",
            text: "La reserva fue borrada correctamente.",
            icon: "success",
            confirmButtonColor: "#000000",
            background: "#330000",
            color: "#ffffff",
            timer: 2000,
            showConfirmButton: false
          })
        }
      })
    })


    botonEditar.addEventListener('click', () => {
      Swal.fire({
        title: "¿Deseas editar esta reserva?",
        text: "Serás redirigido al formulario de edición.",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí, editar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#d33",
        background: "#330000",
        color: "#ffffff"
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem('reservaElegida', i)
          Swal.fire({
            title: "Redirigiendo...",
            text: "Abriendo el formulario de edición.",
            icon: "info",
            showConfirmButton: false,
            timer: 1000,
            background: "#330000",
            color: "#ffffff"
          })
          setTimeout(() => {
            location.href = '../pages/editar.html'
          }, 1500)
        }
      })
    })
  }
}

mostrarReservas();



