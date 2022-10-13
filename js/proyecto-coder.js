//Creo la clase para el cliente particular que tengo planeado

localStorage.setItem("monedero",0)
localStorage.setItem("cantProd1",0)
localStorage.setItem("cantProd2",0)
localStorage.setItem("cantProd3",0)
localStorage.setItem("cantProd4",0)

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
    let formulario = document.querySelector("#cliente");
    formulario.innerHTML = "";
    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `<h1> Felicidades por tu compra  ${cliente.nombre} ! Los datos de tu compra por ${cliente.precio} en ${cliente.cuotas} comodas cuotas ya fueron guardadas en tu cuenta! Proximamente recibiras los detalles de tu compra en tu correo: ${cliente.correo} por un total de ${cliente.saldo} $</h1>`;
    nuevoContenido.className = "info-cliente";
    formulario.append(nuevoContenido);
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

//funciones para cada boton de añadir y quitar productos, con las vefificaciones pertinentes de stock

function suma_product1(){
    let nuevaCant = document.getElementById("cantProd1")
    nuevaCant.innerText = parseInt(nuevaCant.innerText) + 1
    localStorage.setItem("cantProd1",localStorage.getItem("cantProd1")+1)
    localStorage.setItem("monedero",parseInt(parseInt(localStorage.getItem("monedero")) + 50000))
    document.getElementById('precio').value=localStorage.getItem("monedero");
    Toastify({
        text: "Ruedas Humanac agregadas al carrito!",
        duration: 3000,
        gravity: 'up',
        position: 'right',
    }).showToast();
}

function quita_product1(){
    let nuevaCant = document.getElementById("cantProd1")
    if(0 == parseInt(nuevaCant.innerText))
        Toastify({
            text: "No puedes hacer eso, agrega productos primero",
            duration: 3000,
            gravity: 'up',
            position: 'right',
        }).showToast();
    else{
        nuevaCant.innerText = parseInt(nuevaCant.innerText) - 1
        localStorage.setItem("cantProd1",localStorage.getItem("cantProd1") - 1)
        localStorage.setItem("monedero",parseInt(parseInt(localStorage.getItem("monedero")) - 50000))
        document.getElementById('precio').value=localStorage.getItem("monedero");
        Toastify({
            text: "Elemento removido con exito",
            duration: 3000,
            gravity: 'up',
            position: 'right',
        }).showToast();
    }
}

function suma_product2(){
    let nuevaCant = document.getElementById("cantProd2")
    nuevaCant.innerText = parseInt(nuevaCant.innerText) + 1
    localStorage.setItem("cantProd2",localStorage.getItem("cantProd2")+1)
    localStorage.setItem("monedero",parseInt(parseInt(localStorage.getItem("monedero")) + 13000))
    document.getElementById('precio').value=localStorage.getItem("monedero");
    Toastify({
        text: "Parabrisas Northwest agregadas al carrito!",
        duration: 3000,
        gravity: 'up',
        position: 'right',
    }).showToast();
}

function quita_product2(){
    let nuevaCant = document.getElementById("cantProd2")
    if(0 == parseInt(nuevaCant.innerText))
        Toastify({
            text: "No puedes hacer eso, agrega productos primero",
            duration: 3000,
            gravity: 'up',
            position: 'right',
        }).showToast();
    else{
        nuevaCant.innerText = parseInt(nuevaCant.innerText) - 1
        localStorage.setItem("cantProd2",localStorage.getItem("cantProd2") - 1)
        localStorage.setItem("monedero",parseInt(parseInt(localStorage.getItem("monedero")) - 13000))
        document.getElementById('precio').value=localStorage.getItem("monedero");
        Toastify({
            text: "Elemento removido con exito",
            duration: 3000,
            gravity: 'up',
            position: 'right',
        }).showToast();
    }
}

function suma_product3(){
    let nuevaCant = document.getElementById("cantProd3")
    nuevaCant.innerText = parseInt(nuevaCant.innerText) + 1
    localStorage.setItem("cantProd3",localStorage.getItem("cantProd3")+1)
    localStorage.setItem("monedero",parseInt(parseInt(localStorage.getItem("monedero")) + 4000))
    document.getElementById('precio').value=localStorage.getItem("monedero");
    Toastify({
        text: "Maniubro steel series agregadas al carrito!",
        duration: 3000,
        gravity: 'up',
        position: 'right',
    }).showToast();
}

function quita_product3(){
    let nuevaCant = document.getElementById("cantProd3")
    if(0 == parseInt(nuevaCant.innerText))
        Toastify({
            text: "No puedes hacer eso, agrega productos primero",
            duration: 3000,
            gravity: 'up',
            position: 'right',
        }).showToast();
    else{
        nuevaCant.innerText = parseInt(nuevaCant.innerText) - 1
        localStorage.setItem("cantProd3",localStorage.getItem("cantProd3") - 1)
        localStorage.setItem("monedero",parseInt(parseInt(localStorage.getItem("monedero")) - 4000))
        document.getElementById('precio').value=localStorage.getItem("monedero");
        Toastify({
            text: "Elemento removido con exito",
            duration: 3000,
            gravity: 'up',
            position: 'right',
        }).showToast();
    }
}

function suma_product4(){
    let nuevaCant = document.getElementById("cantProd4")
    nuevaCant.innerText = parseInt(nuevaCant.innerText) + 1
    localStorage.setItem("cantProd4",localStorage.getItem("cantProd4")+1)
    localStorage.setItem("monedero",parseInt(parseInt(localStorage.getItem("monedero")) + 30000))
    document.getElementById('precio').value=localStorage.getItem("monedero");
    Toastify({
        text: "Bujias Manuelito agregadas al carrito!",
        duration: 3000,
        gravity: 'up',
        position: 'right',
    }).showToast();
}

function quita_product4(){
    let nuevaCant = document.getElementById("cantProd3")
    if(0 == parseInt(nuevaCant.innerText))
        Toastify({
            text: "No puedes hacer eso, agrega productos primero",
            duration: 3000,
            gravity: 'up',
            position: 'right',
        }).showToast();
    else{
        nuevaCant.innerText = parseInt(nuevaCant.innerText) - 1
        localStorage.setItem("cantProd3",localStorage.getItem("cantProd3") - 1)
        localStorage.setItem("monedero",parseInt(parseInt(localStorage.getItem("monedero")) - 30000))
        document.getElementById('precio').value=localStorage.getItem("monedero");
        Toastify({
            text: "Elemento removido con exito",
            duration: 3000,
            gravity: 'up',
            position: 'right',
        }).showToast();
    }
}

//creamos los eventos que van a llamar a las funciones

let btn_aniade1 = document.getElementById("aniadir-prod1");
btn_aniade1.addEventListener("click",suma_product1)

let btn_quita1 = document.getElementById("quitar-prod1");
btn_quita1.addEventListener("click",quita_product1)

let btn_aniade2 = document.getElementById("aniadir-prod2");
btn_aniade2.addEventListener("click",suma_product2)

let btn_quita2 = document.getElementById("quitar-prod2");
btn_quita2.addEventListener("click",quita_product2)

let btn_aniade3 = document.getElementById("aniadir-prod3");
btn_aniade3.addEventListener("click",suma_product3)

let btn_quita3 = document.getElementById("quitar-prod3");
btn_quita3.addEventListener("click",quita_product3)

let btn_aniade4 = document.getElementById("aniadir-prod4");
btn_aniade4.addEventListener("click",suma_product4)

let btn_quita4 = document.getElementById("quitar-prod4");
btn_quita4.addEventListener("click",quita_product4)

//hacemos verificacion del form para verificar que los datos esten correctos

let form = document.querySelector('#form');
form.addEventListener('submit', btnSubmit);
    async function btnSubmit(e){
        e.preventDefault()
        let form = new FormData(this);
        let response = await fetch(this.action , {
            method: this.method,
            body: form,
            headers: {
                'Accept':'application/json'
            }
        })

        let nombre = document.getElementById('nombre').value;
        let correo = document.getElementById('correo').value;

        if (nombre.length == 0 || nombre.length === ''){
            Toastify({
                text: "Debe ingresar su nombre",
                duration: 3000,
                destination: "index.html",
                newWindow: true,
                gravity: "top", 
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "linear-gradient(to right, #A66452, #A66452)",
                },
            }).showToast(); 
            return;
        }

        if (correo.length == 0 || nombre.length === ''){
            Toastify({
                text: "Debe ingresar su mail",
                duration: 3000,
                destination: "index.html",
                newWindow: true,
                gravity: "top", 
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "linear-gradient(to right, #A66452, #A66452)",
                },
            }).showToast(); 
            return;
        }
   
        if (response.ok){
            cargaCliente()
            this.reset();
            Toastify({
                text: "Gracias contactarnos, pronto tendrás una respuesta",
                duration: 3000,
                destination: "index.html",
                newWindow: true,
                gravity: "top", 
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "linear-gradient(to right, #E9EBEE, #4267B3)",
                },
            }).showToast(); 
    } 
};

//usamos fetch para añadir un listado de productos que estaran a futuro, extrayendo informacion de una API

const listaNuevos = document.querySelector("#listaDemasProd")    
fetch('https://jsonplaceholder.typicode.com/posts')
.then( (resp) => resp.json() )
.then( (data) => {
    data.forEach((post)=>{
        const div = document.createElement("section")
        div.innerHTML = `
            <h3><b>Nombre:</b> ${post.title}</h5>
            <h5>${post.body}</h5>
            <h4 style = "background-color: #90EE90; width: 100%; margin = 0;" >Product aviable soon.</h4>`
        div.className = "newProduct"
        listaNuevos.append(div);
    })
})