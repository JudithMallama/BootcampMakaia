alert("conexión con la checkout and payment method")


document.getElementById('formDatos').addEventListener('submit', function (event) {

    event.preventDefault();
  
    const numero = document.getElementById('numero').value;
    const descuento = document.getElementById('descuento').value;
    const subtotal = document.getElementById('subtotal').textContent;
    const discount = document.getElementById('discount').textContent;
    const fee = document.getElementById('fee').textContent;

    const datos = {
        numero: numero,
        descuento: descuento,
        subtotal: subtotal,
        discount: discount,
        fee: fee
    };

    console.log('Datos capturados:', datos);
});