const agujeros = [...document.querySelectorAll('.agujero')]
const audio = document.getElementById('audio')
const botonReinicio = document.getElementById('boton-reinicio')
let puntuacion = 0

function juego() {
    const numeroAgujero = Math.floor(Math.random() * agujeros.length)
    const agujero = agujeros[numeroAgujero]
    let temporizador = null

    const nuevoTopo = document.createElement('img')

    nuevoTopo.src = 'assets/topo.png'
    nuevoTopo.alt = "topo"
    nuevoTopo.classList.add('topo')


    nuevoTopo.addEventListener('click', () => {
        audio.play()
        audio.currentTime = 0
        puntuacion++
        document.querySelector('.contador span').textContent = puntuacion
        nuevoTopo.remove
        clearTimeout(temporizador)

        setTimeout(() => {
            agujero.removeChild(nuevoTopo)
            juego()
        }, 600)

    })

    agujero.appendChild(nuevoTopo)

    temporizador = setTimeout(() => {
        agujero.removeChild(nuevoTopo)
        juego()
    }, 700)


}

botonReinicio.addEventListener('click', () => {
    puntuacion = 0;
    document.querySelector('.contador span').textContent = puntuacion;
  
    clearTimeout(temporizador);
  
    const topoActual = document.querySelector('.topo');
    if (topoActual) topoActual.remove();
    juego();
  });
