alert("Lista de tareas")

// Lista de tareas:
// Solicitar al usuario que ingrese una lista de tareas que deba realizar, esta lista se*
// debe guardar en un colección de objetos, donde cada objeto representa una tarea.*
// Cada tarea debe tener la siguiente información: nombre o descripción de la tarea y*
// estado de la tarea (completada o pendiente).*
// Se le solicita que cree y ejecute con datos de prueba las siguientes funciones:
// Una función que guarde un listado de tarea 
// Una función que cambie el estado de una tarea
// Una función que filtre las tareas por estado (completadas y pendientes).
// Una función que agregue una tarea al listado*
// Una función que elimine una tarea.
// Consúltele al usuario qué acción desea realizar en el programa haciendo uso de
// una estructura switch case.

//********************************* */

// Lista de tareas:
 const taskList = []

 //Una función que agregue una tarea al listado
 const addTask = (name, description, state) => {
    //debe guardar en un colección de objetos, donde cada objeto representa una tarea.
    // Cada tarea debe tener la siguiente información: nombre o descripción de la tarea y
    // estado de la tarea (completada o pendiente).
    const task = {
        name,
        description,
        state,
    }
    taskList.push(task)
    console.log("Lista de tareas actualizada",taskList)
 }

 //Función cambiar estdo de una tarea por nombre
const changueStatusName = (name, state) => {
    const task = taskList.find(item => item.name === name)
    task.state = state
    console.log("Lista de tareas actualizada",taskList)
}

 //Función cambiar estdo de una tarea por posicion
 const changueStatusPosicion = (posicion, state) => {
    taskList[posicion].state = state
    console.log("Lista de tareas actualizada",taskList)
 }
 
//Una función que filtre las tareas por estado (completadas y pendientes).
const filterTask = (state) => {
    const filteredTask = taskList.filter(item => item.state === state)
    console.log("Lista de tareas actualizada", filteredTask)
}

//Función eliminar tarea por posisicon
const deleteTaskPosicion = (posicion) =>{
    taskList.splice(posicion,1)
}

//Función eliminar la ultima tarea ingresada
const deleteLastTask = (posicion) =>{
    taskList.pop()
}
 // Solicitar al usuario que ingrese una lista de tareas que deba realizar
const homework = prompt("Ingrese la tarea")
const descripcionTask = prompt("Ingrese la descripción de la tarea")
const stateTask = prompt("Ingrese el estado de la tarea")
addTask(homework, descripcionTask, stateTask) 
let newTask = prompt("Desea ingresar una nueva tarea?")

while(newTask === 'si'){
    const homework = prompt("Ingrese la tarea")
    const descripcionTask = prompt("Ingrese la descripción de la tarea")
    const stateTask = prompt("Ingrese el estado de la tarea")
    addTask(homework, descripcionTask, stateTask) 
    newTask = prompt("Desea ingresar una nueva tarea?")
    console.log(newTask);
}


// Consúltele al usuario qué acción desea realizar en el programa haciendo uso de
// una estructura switch case.
let  functionExecute = prompt("Por favor digite la función que desea ejecutar")

while(functionExecute !== null){
    switch(functionExecute){
        case '1':
            addTask("Tarea generica", "Cualquier cosa", "completada")
        break;
        case '2':
            changueStatusName("Tarea generica","pendiente")
        break;
        case '3':
            changueStatusPosicion(1, "completada")
        break;
        case '4':
            filterTask("pendiente")
        break;
        case '5':
            deleteTaskPosicion(1)
        break;
        case '6':
            deleteLastTask()
        break;
        default:
            break
    }
    functionExecute = prompt("Por favor digite la función que desea ejecutar")
}


