// Caja Registradora:
// Crear un programa que emule el funcionamiento de una caja registradora.
// Debe crear una función llamada caja registradora que reciba como parámetro el total a pagar
// de una compra, el efectivo entregado por el cliente y un array de billetes existente en la caja.
// Asimismo debe retornar un objeto con las siguientes propiedades: status de la caja y las
// vueltas en forma de un array de billetes.
// La función debe considerar los siguientes caso:
// Cuando el cliente no ha pagado completo el total de la compra
// Cuando el cliente paga exactamente el total de la compra
// Cuando la caja tiene exactamente el cambio que se le debe entregar al cliente
// Cuando el cambio a entregar es mayor a la cantidad de dinero en caja.
// Cuando en la caja no hay suficiente sencillo para completar el cambio.
// Cuando se le pueda devolver todas las vueltas al cliente.
// Ejecutar la función con datos de prueba
//************************************+ */
// Debe crear una función llamada caja registradora que reciba como parámetro el total a pagar
// de una compra, el efectivo entregado por el cliente y un array de billetes existente en la caja.
const cashRegister = (totalPay, cashCustomer, banknotesBox) => {

    let statusBox = ""
    let cashChange = []

    //cambio total
    const totalCash = cashCustomer - totalPay
    console.log("total dinero", totalCash)

    // Funcion reduce para reducor el dinero en caja
    const totalBox = banknotesBox.reduce((totalMoney, item) => totalMoney + item.denomination * item.totalQuantity, 0);
    console.log("Este es el total de la caja inicial", totalBox)
    console.log("Este es el total banknotes", banknotesBox)

    //retornar un objeto con las siguientes propiedades: status de la caja y las
    // vueltas en forma de un array de billetes.
    if (totalCash < 0) {
        // Cuando el cliente no ha pagado completo el total de la compra
        statusBox = "El cliente no ha pagado completo el total de la compra"
    } else if (totalCash === 0) {
        //Cuando el cliente paga exactamente el total de la compra
        statusBox = "Ajuastado, el cliente ha pagado completo"
    } else if (totalBox === totalCash) {
        // Cuando la caja tiene exactamente el cambio que se le debe entregar al cliente
        statusBox = "Caja regitradora cerrada"
        cashChange = banknotesBox
        console.log("Este el el total en caja2", banknotesBox)
    } else if (totalCash > totalBox) {
        //Cuando el cambio a entregar es mayor a la cantidad de dinero en caja.
        statusBox = "Cambio es mayor a lo que hay en caja"
    } else if (totalCash < totalBox) {
        //Cuando en la caja no hay suficiente sencillo para completar el cambio.
        console.log("paso por cuando en caja no hay sufuciente")
        let chage = totalCash
        banknotesBox.forEach(bills => {
            const necesaryBill = Math.floor(chage / bills.denomination)
            console.log(necesaryBill)
            if (necesaryBill > 0) {
                if(necesaryBill<=bills.totalQuantity){
                    const money ={
                        denomination: bills.denomination,
                        totalQuantity: necesaryBill
                }
                cashChange.push(money)
                bills.totalQuantity -= necesaryBill
                //bills.totalQuantity = bills.totalQuantity - necesaryBill
                chage -= necesaryBill*bills.denomination
                } else{
                    const money = {
                        denomination: billetes.denomination,
                        totalQuantity: bills.totalQuantity
                    }
                    cashChange.push(money)
                    bills.totalQuantity -= necesaryBill
                    chage -= necesaryBill*bills.denomination 
                }
            }
        });
    if(chage > 0){
        statusBox ="La caja resgitradora no tiene suficiente sencillo"
    }else{
        statusBox = "El cambio se entrego completo"
    }

    }
    console.log("Este es el estus", statusBox)
    return {
        statusBox,
        cashChange
    }

}

//array de billetes existente en la caja.
let banknotesBox = [
    {
        denomination: 100000,
        totalQuantity: 2
    },
    {
        denomination: 50000,
        totalQuantity: 3
    },
    {
        denomination: 20000,
        totalQuantity: 10
    },
    {
        denomination: 10000,
        totalQuantity: 10
    },
    {
        denomination: 5000,
        totalQuantity: 15
    },
    {
        denomination: 2000,
        totalQuantity: 14
    },
    {
        denomination: 1000,
        totalQuantity: 13
    },
    {
        denomination: 500,
        totalQuantity: 12
    },
    {
        denomination: 200,
        totalQuantity: 14
    },
    {
        denomination: 100,
        totalQuantity: 10
    },
    {
        denomination: 50,
        totalQuantity: 12
    },
]


const boxResponse = cashRegister(375350, 500000, banknotesBox)
console.log(boxResponse)
