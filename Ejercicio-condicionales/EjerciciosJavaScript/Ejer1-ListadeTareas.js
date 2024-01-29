alert("Lista de tareas")

// Lista de tareas:
// Solicitar al usuario que ingrese una lista de tareas que deba realizar, esta lista se
// debe guardar en un colección de objetos, donde cada objeto representa una tarea.
// Cada tarea debe tener la siguiente información: nombre o descripción de la tarea y
// estado de la tarea (completada o pendiente).
// Se le solicita que cree y ejecute con datos de prueba las siguientes funciones:
// Una función que guarde un listado de tarea
// Una función que cambie el estado de una tarea
// Una función que filtre las tareas por estado (completadas y pendientes).
// Una función que agregue una tarea al listado
// Una función que elimine una tarea.
// Consúltele al usuario qué acción desea realizar en el programa haciendo uso de
// una estructura switch case.


/*Lista de tareas*/
const listaDeTareas = []

//Declaración de la función agregar tarea
const agregarTarea = (nombre, estado) => {
    const tarea ={
        nombre,
        estado,
    }
    listaDeTareas.push(tarea)
    console.log("Lista de tareas actualizadas", listaDeTareas)
}

//Declaración de la función cambiar estado por el nombre de la tarea
const cambiarEstadoPorNombre = (nombre, estado) =>{
    const tarea = listaDeTareas.find(item => item.nombre === nombre)
    tarea.estado = estado
    console.log("tarea", tarea)
    console.log("Lista de tareas actualizadas", listaDeTareas)
}

//Declaración de la fucon cabiar estado por posisción
const cambiarEstadoPorPosicion = (posicion, estado) =>{
     listaDeTareas[posicion].estado=estado
     console.log("Lista de tareas actualizadas", listaDeTareas)
}

//Declaración de la función de filtro tarea por estado 
const filtrarTareas = (estado) => {
    const tareasFiltradas = listaDeTareas.filter(item => item.estado === estado)
    console.log("Lista de tareas actualizadas", tareasFiltradas)
}

//Declaraci{on de la funcioon para eliminar tareas
const eliminarTareasPorPosicion = (posicion) => {
    listaDeTareas.splice(posicion,1)
}

//Declaraci{on de la funcion para eliminar la ultima tarea
const eliminarUltimaTaea = () => {
    listaDeTareas.pop()
}


const nombreTarea = prompt("Por favor ingrese el nombre de la tarea")
const estadoTarea = prompt("Por favor ingrese el estado de la tarea")
agregarTarea(nombreTarea,estadoTarea)
let seguirEjecutando =prompt("Desea sguir igresando tareas?")

while(seguirEjecutando  === 'si'){
    const nombreTarea = prompt("Por favor ingrese el nombre de la tarea")
    const estadoTarea = prompt("Por favor ingrese el estado de la tarea")
    agregarTarea(nombreTarea,estadoTarea)
    seguirEjecutando =prompt("Desea sguir igresando tareas?")
}

const funcionEjecutar = prompt("Por favor digite el nombre de la funcion")

switch (funcionEjecutar) {
    case 'agregarTarea':
        agregarTarea("Tarea generica", "completar")
        break;
    case 'cambiarEstadoPorNombre':
        cambiarEstadoPorNombre("tarea generica", "pendiente")
        break;
    case 'cambiarEstadoPorPosicion':
        cambiarEstadoPorPosicion(1, "completada")
        break;
    case 'filtrarTareas':
        filtrarTareas("pendiente")
        break;
    case  'eliminarTareasPorPosicion':
        eliminarTareasPorPosicion(1)
        break;
    case 'eliminarUltimaTaea':
        eliminarUltimaTaea()
        break;
    default:
        break;
}