// Solicitar 5 nombres de personas (no controlamos nada de momento) y lo mostramos en una lista desordenada.
// comprobar si existe el nombre en el array. Si existe el nombre en el array mostrar en consola “El nombre exite”,
// si no existe, se debe guardar en la colección y mostrar en consola “El nombre ha sido guardado”.

const usuarios = [
    {
        nombre: "Andrea",
        apellido: "Ardila",
        telefono: 1234566,
        direccion: {
            ciudad: "Medellin",
            barrio: "La Milagrosa",
            calle: "50C"
        }
    },

    {
        nombre: "Tomas",
        apellido: "Sanchez",
        telefono: 156566,
        direccion: {
            ciudad: "Cali",
            barrio: "La quinta",
            calle: "70C"
        }
    },
    {
        nombre: "Orlando",
        apellido: "Perez",
        telefono: 354566,
        direccion: {
            ciudad: "Bogota",
            barrio: "Candelaria",
            calle: "40B"
        }
    },
    {
        nombre: "Yordy",
        apellido: "Stevenson",
        telefono: 9834566,
        direccion: {
            ciudad: "Barranquilla",
            barrio: "El Prado",
            calle: "6C"
        }
    }
]

function encontrarUsuario(ListaUsuario){
    const nombreBuscado = prompt("Por favor ingrese el nombre del usuario buscado")

    const usuarioEncontrado = usuarios.find(usuario => usuario.nombre.toLocaleLowerCase() === nombreBuscado.toLocaleLowerCase())

    if (usuarioEncontrado) {
        console.log(usuarioEncontrado)
        return usuarioEncontrado
    } else {
        console.log("El usuari no Existe")
        return false
    }
}

encontrarUsuario(usuarios)

