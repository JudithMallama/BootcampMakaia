alert("Ejercicios formulario")

// const submitForm = (e) => {
//     e.preventDefault();
//     const form = document.querySelector("#myForm")
//     const name =document.getElementsByName("name")
//     console.log("name", name['0'].value);
//     const email = document.getElementsByName("email")
//     console.log("email", email['0'].value);
//     const formData = new FormData(form)
//     const jsonData = {}
    
//     console.log("form data entries", formData.entries());
//     for (let [key, value] of formData.entries()){
//         jsonData[key] = value
//     }
//     console.log("json", jsonData);
// }

/*Realizar un formulario que solicite: nombre, apellido y su teléfono de un usuario, al guardar debe agregar a una lista de usuarios en un array. y mostrat el nuevo array en consola*/

const listaDeUsuarios = []
const agregarUsuario = (e) => {
    e.preventDefault()
    const form = document.querySelector("#ejercicio1")
    const formData = new  FormData(form)
    const json= {}
    for(let[key, value] of formData.entries()){
        json[key]=value
    }

    console.log("json user", json);
    listaDeUsuarios.push(json)
    console.log("lista nueva", listaDeUsuarios);
    form.reset()
}
