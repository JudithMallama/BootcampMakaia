/**
 * Crear un do list y realizar su respectivo  CRUD create Read Update Delete, filtro por estado
 */

alert("Ejercicio de list")

// array de tareas
let listaDeTareas = []
let tareasFiltradas = []

const editarEstado = (e, indice, estado) => {
    e.preventDefault()
    console.log("evento on change", e)
    const newEstado = e.target.value
    cambiarEstadoPorPosicion(indice, newEstado)
    listarTareas()
}

const editarTarea = (e, indice, estado) => {
    e.preventDefault()
    console.log("estado", estado);
    const span = document.getElementById(`tarea${indice}`)
    span.innerHTML = `
    <select name="estado" onchange= "editarEstado(event, ${indice}, '${estado}')">
    <option value="pendiente" ${estado=='pendiente' ? 'selected' : null}>Pendiente</option>
    <option value="ejecutando" ${estado=='ejecutando' ? 'selected' : null} >Ejecutando</option>
    <option value="finalizado"  ${estado=='finalizado' ? 'selected' : null}>Finalizado</option>
     </select>`
}

const listarTareas = () => {
    const section = document.getElementById("listaTareas")
    let htmlLista = ''

    listaDeTareas.forEach(
        (tarea, index) => (htmlLista +=
            `<div class="listaItem">
            <span>${tarea.nombre}</span>
            <span id="tarea${index}">${tarea.estado}</span>
            <button type"button" onclick="editarTarea(event, ${index}, '${tarea.estado}')">Editar</button>
            <button type="button" onclick="eliminarTareaPorPosicion(${index})">Eliminar</button>
        </div>`))
    section.innerHTML = htmlLista
}

const recibirForm = (e) => {
    e.preventDefault()
    const form = document.getElementById("agregarTarea")
    const formData = new FormData(form)
    const json = {}

    for ([key, value] of formData.entries()) {
        json[key] = value
    }

    form.reset()
    agregarTarea(json.tarea, json.estado)
    console.log("Lista de tareas", listaDeTareas);
}

// declaracion de la funcion agregar tarea
const agregarTarea = (nombre, estado) => {
    const tarea = {
        nombre,
        estado,
    }
    listaDeTareas.push(tarea)
    listarTareas()
}
// declaracion de la funcion cambiar estado por el nombre de la tarea
const cambiarEstadoPorNombre = (nombre, estado) => {
    const tarea = listaDeTareas.find(item => item.nombre === nombre)
    tarea.estado = estado
    console.log("Lista de tareas actualizada", listaDeTareas)
}

// declaracion de la funcion cambiar estado por posicion
const cambiarEstadoPorPosicion = (posicion, estado) => {
    listaDeTareas[posicion].estado = estado
    console.log("Lista de tareas actualizada", listaDeTareas)
}

//declaracion de la funcion de filtrar tareas por estado
const filtrarTareas = (e) => {
    //tareasFiltradas =listaDeTareas
    let estado = e.target.value
    if(estado==="todos"){
        listaDeTareas = tareasFiltradas
        listaDeTareas()
        return
    }
    const tareasFiltradas = listaDeTareas.filter(item => item.estado === estado)
    listaDeTareas = tareasFiltradas
    console.log("Lista de tareas", listaDeTareas);
    listarTareas()
}

//declaracion de la funcion para eliminar tareas
const eliminarTareaPorPosicion = (posicion) => {
    console.log("estado", e.target.value);
    listaDeTareas.splice(posicion, 1)
    listarTareas()
}

//declaracion de la funcion para eliminar la ultima tarea
const eliminarUltimaTarea = () => {
    listaDeTareas.pop()
}

listarTareas()

