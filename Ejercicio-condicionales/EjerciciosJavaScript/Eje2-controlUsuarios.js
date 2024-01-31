alert("Control de usuarios")
// Control de acceso a usuarios:
// Crear un programa que emule el inicio de sesión y creación de cuenta de un usuario.
// Debe consultarle al usuario qué acción desea realizar: iniciar sesión o crear una nueva cuenta.
// Para crear una cuenta de usuario, debe preguntarle al usuario nombre, apellido, correo
// electrónico y contaseña. Luego, que el usuario ingrese los datos debe guardar la información
// en una colección de usuarios y mostrarle al usuario un alert con el siguiente mensaje: “Cuenta
// de usuario correctamente creada”. Se debe validar si el correo ingresado existe dentro del
// array de usuario, si existe, no debe guardar la información, si no que debe mostrar en un alert
// indicando que ya existe una cuenta con el correo ingresado.
// Para iniciar sesión, debe solicitarle al usuario correo y contraseña, validar primero que el correo
// ingresado coincida con una cuenta existente. Si encuentra la cuenta, debe validar si la
// contraseña ingresada es correcta: si es correcta debe mostrar un alert saludando al usuario por
// su nombre y apellido, si es incorrecta le debe solicitar de nuevo correo y contraseña hasta que
// ingrese la contraseña correcta. Si no se encuentra la cuenta, se le debe mostrar al usuario
// “Datos incorrectos” en un alert.

const users = [     
    {
        "name": "Vanessa",
        "lastName": "Mallama",
        "email": "vane",
        "password": "1234"
    }   

]

const addUsers = (name, lastName, email, password) => {
    const existingEmail = users.findIndex(item => item.email === email)
    console.log("Exiete correo", existingEmail)
    if (existingEmail !== -1) {
        alert("Ya exite una cuenta con ese correo")
    } else {
        const user = {
            name,
            lastName,
            email,
            password
        }
        users.push(user)
        alert("Cuenta de usuario, correctamente creado")
    }
    console.log(users)
}

const logIn = (email, password) => {
    const existingEmail = users.find(item => item.email === email)
    
    if (existingEmail) {
        console.log("Pase por aqui")
        if (existingEmail.password === password) {
            alert(`Hola ${existingEmail.name} ${existingEmail.lastName}`)
        } else {
            alert("Contraseña incorrecta")
            const email =prompt("Ingrese su correo nuevamente")
            const password = prompt("Ingrese su contraseña nuevamente")
            logIn(email,password)
        }    
    } else {
        alert("Datos incorrectos")
    }
}


const actionExecute = prompt ("Por favor ingrese la acción que decea ejecutar")

switch(actionExecute){
    case 'Iniciar Sesión':
        const user = prompt("Por favor ingrese el correo")
        const password = prompt("Por favor ingrese su contraseña")
        logIn(user, password)
    break;
    case('Crear cuenta'):
        const name = prompt("Ingrese sun nombre")
        const lastName= prompt("Ingrese su apellido")
        const user2 = prompt("Ingrese su correo")
        const password2 = prompt("Ingrese una contraseña")
        addUsers(name, lastName, user2, password2)
    break;
    default:
        break;
}


