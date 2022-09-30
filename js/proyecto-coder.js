//Creo la clase para el cliente particular que tengo planeado

localStorage.setItem("monedero",0)

class Cliente {
    constructor(nombre, correo, precio, cuotas) {
        this.nombre = nombre;
        this.correo = correo;
        this.precio = precio;
        this.cuotas = cuotas;
        this.saldo = 0;
    }
}

//Funcion responsable del calculo de recargos por compra

function calcula_plan(producto,nro_cuotas){
    let precio_actual = producto
    let resultado = 0
    switch(nro_cuotas){
        case(1):
            console.log("Felicidades! Has elegido el plan 1 cuota! El cual cuenta con pago sin intereses! El precio final de su producto es:" + precio_actual);
            return precio_actual
            break;
        case(3):
            console.log("Felicidades! Has elegido el plan 3 cuotas! Con el cual el precio de tu producto sera: " + precio_actual*1.12 +  "en 3 comodas cuotas de: " + precio_actual/3);
            return precio_actual*1.12
        break;
            case(6):
            console.log("Felicidades! Has elegido el plan 6 cuotas! Con el cual el precio de tu producto sera: " + precio_actual*1.35 +  "en 6 comodas cuotas de: " + precio_actual/6);
            return precio_actual*1.35
        break;case(12):
            console.log("Felicidades! Has elegido el plan 12 cuotas! Con el cual el precio de tu producto sera: " + precio_actual*1.75 +  "en 12 comodas cuotas de: " + precio_actual/12);
            return precio_actual*1.75
            break;
        default:
            console.log("Lo lamento! La opcion que elegiste no es posible, recuerda que cuentas con los planes 1, 3, 6, 12")
            Toastify({
                text: "El plan de cuotas no existe!",
                duration: 3000,
                gravity: 'up',
                position: 'right',
            }).showToast();
            return 0
    }
}

//Creamos un cliente en base a los datos llenados en el formulario de la pagina

function cargaCliente() {
    let precio = localStorage.getItem("monedero")
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let cuotas = parseInt(document.getElementById("cuota").value)
    //creamos el cliente con los datos obtenidos
    let cliente1 = new Cliente(nombre, correo, precio, cuotas);
    let precio_final = calcula_plan(precio, cuotas)
    //actualizamos el saldo total del cliente luego de su comrpa
    cliente1.saldo= cliente1.saldo + precio_final;
    mostrarCliente(cliente1);
}

//funcion dedicada a mostrar los datos del cliente en nuestra pagina 

function mostrarCliente(cliente){
    let formulario = document.getElementById("cliente");
    formulario.innerHTML = "";
    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `<h1> Felicidades por tu compra  ${cliente.nombre} ! Los datos de tu compra por ${cliente.precio} en ${cliente.cuotas} comodas cuotas ya fueron guardadas en tu cuenta! Proximamente recibiras los detalles de tu compra en tu correo: ${cliente.correo} por un total de ${cliente.saldo} $</h1>`;
    nuevoContenido.className = "info-cliente";
    formulario.appendChild(nuevoContenido);
    Toastify({
        text: "Su compra ha sido concretada! Click para ver ticket!",
        duration: 3000,
        gravity: 'up',
        position: 'right',
        destination: "https://facebook.com",
        newWindow: true,
        style: {
            background: "linear-gradient(to right, #b2ffff, #008f39)",
        }
    }).showToast();
}  

function suma_product1(){
    localStorage.setItem("monedero",parseInt(parseInt(localStorage.getItem("monedero")) + 50000))
    console.log(localStorage.getItem("monedero"))
    document.getElementById('precio').value=localStorage.getItem("monedero");
    Toastify({
        text: "Ruedas Humanac agregadas al carrito!",
        duration: 3000,
        gravity: 'up',
        position: 'right',
    }).showToast();
}

function suma_product2(){
    localStorage.setItem("monedero",parseInt(parseInt(localStorage.getItem("monedero")) + 13000))
    console.log(localStorage.getItem("monedero"))
    document.getElementById('precio').value=localStorage.getItem("monedero");
    Toastify({
        text: "Parabrisas Northwest agregadas al carrito!",
        duration: 3000,
        gravity: 'up',
        position: 'right',
    }).showToast();
}

function suma_product3(){
    localStorage.setItem("monedero",parseInt(parseInt(localStorage.getItem("monedero")) + 4000))
    console.log(localStorage.getItem("monedero"))
    document.getElementById('precio').value=localStorage.getItem("monedero");
    Toastify({
        text: "Maniubro steel series agregadas al carrito!",
        duration: 3000,
        gravity: 'up',
        position: 'right',
    }).showToast();
}

function suma_product4(){
    localStorage.setItem("monedero",parseInt(parseInt(localStorage.getItem("monedero")) + 30000))
    console.log(localStorage.getItem("monedero"))
    document.getElementById('precio').value=localStorage.getItem("monedero");
    Toastify({
        text: "Bujias Manuelito agregadas al carrito!",
        duration: 3000,
        gravity: 'up',
        position: 'right',
    }).showToast();
}

let boton2 = document.getElementById("sendInfo2");
boton2.addEventListener("click",suma_product2);

let boton1 = document.getElementById("sendInfo1");
boton1.addEventListener("click",suma_product1);

let boton3 = document.getElementById("sendInfo3");
boton3.addEventListener("click",suma_product3);

let boton4 = document.getElementById("sendInfo4");
boton4.addEventListener("click",suma_product4);

let boton = document.getElementById("sendInfo");

boton.addEventListener("click", cargaCliente);