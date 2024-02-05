// Solicitar 5 nombres de personas (no controlamos nada de momento) y lo mostramos en una lista desordenada.
// comprobar si existe el nombre en el array. Si existe el nombre en el array mostrar en consola “El nombre exite”,
// si no existe, se debe guardar en la colección y mostrar en consola “El nombre ha sido guardado”.
// 4. Crear

/*Solicitar nombres de 5 personas*/

alert("Ejercicios de nombres")
const cantidadNombre = 5
const nombres=[]
/*Para la alista desordenada*/

const mostarNombre=(nombres)=>{
    document.write("<ul>");
    nombres.forEach(Element=>{
        document.write(`<li>${Element}</li>`)
    })
    document.write("</ul>");
}

document.write("<ul>")

for(let i=1;i<=cantidadNombre;i++){
    
    const nombre=prompt("Por favor ingrese un nombre");
    nombres.push(nombre)
    document.write(`<li>${nombre}</li>`)
    // document.write("<br>")
}
document.write("</ul>")
document.write(nombres)
console.log(nombres)

//Solicitar al usuario ingresar otro nombre y verificar que existe muestre un alert, de lo contrario guardelo en el arrayy mueste un alett de guardado exitosamente y e imprimalo en la lista //


const otroNombre = String(prompt("Ingrese el nombre nuevo: "))

if (nombres.includes(otroNombre)){
    alert("El nombre existe en la lista")
}else{
    alert("El nombre no existe en la lista")
    nombres.push(otroNombre)
}

mostarNombre(nombres)