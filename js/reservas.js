let reservas = JSON.parse(localStorage.getItem("reservas")) || []

const contenedor = document.getElementById("contenedor-reservas")

const crearnuevo = document.getElementById ("crearreserva")

const borrartodo = document.getElementById ("borrartodo")




crearnuevo.addEventListener ("click", () => {

    location.href = "../index.html"

})




function mostrarReservas() {
    contenedor.innerHTML = ""

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
                </div>

        `
    })


    for (let i = 0; i < reservas.length; i++) {
        const botonBorrar = document.getElementById(`btnborrar-${i}`)

        botonBorrar.addEventListener("click", () => {
        let nuevasReservas = []
        for (let j = 0; j < reservas.length; j++) {
            if (j !== i) {
            nuevasReservas.push(reservas[j])
            }
        }

        reservas = nuevasReservas
        localStorage.setItem("reservas", JSON.stringify(reservas))
        mostrarReservas()
        })


    }

    
}

mostrarReservas()




