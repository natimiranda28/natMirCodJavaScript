//Creo la clase para el cliente particular que tengo planeado

localStorage.setItem("monedero", 0);
localStorage.setItem("cantProd1", 0);
localStorage.setItem("cantProd2", 0);
localStorage.setItem("cantProd3", 0);
localStorage.setItem("cantProd4", 0);

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

function calcula_plan(producto, nro_cuotas) {
    let precio_actual = producto;
    let resultado = 0;
    switch (nro_cuotas) {
        case 1:
            console.log(
                "Felicidades! Has elegido el plan 1 cuota! El cual cuenta con pago sin intereses! El precio final de su producto es:" +
                precio_actual
            );
            return precio_actual;
            break;
        case 3:
            console.log(
                "Felicidades! Has elegido el plan 3 cuotas! Con el cual el precio de tu producto sera: " +
                precio_actual * 1.12 +
                "en 3 comodas cuotas de: " +
                precio_actual / 3
            );
            return precio_actual * 1.12;
            break;
        case 6:
            console.log(
                "Felicidades! Has elegido el plan 6 cuotas! Con el cual el precio de tu producto sera: " +
                precio_actual * 1.35 +
                "en 6 comodas cuotas de: " +
                precio_actual / 6
            );
            return precio_actual * 1.35;
            break;
        case 12:
            console.log(
                "Felicidades! Has elegido el plan 12 cuotas! Con el cual el precio de tu producto sera: " +
                precio_actual * 1.75 +
                "en 12 comodas cuotas de: " +
                precio_actual / 12
            );
            return precio_actual * 1.75;
            break;
        default:
            console.log(
                "Lo lamento! La opcion que elegiste no es posible, recuerda que cuentas con los planes 1, 3, 6, 12"
            );
            Toastify({
                text: "El plan de cuotas no existe!",
                duration: 3000,
                gravity: "up",
                position: "right",
            }).showToast();
            return 0;
    }
}

//Creamos un cliente en base a los datos llenados en el formulario de la pagina

function cargaCliente() {
    let precio = localStorage.getItem("monedero");
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let cuotas = parseInt(document.getElementById("cuota").value);
    //creamos el cliente con los datos obtenidos
    let cliente1 = new Cliente(nombre, correo, precio, cuotas);
    let precio_final = calcula_plan(precio, cuotas);
    //actualizamos el saldo total del cliente luego de su comrpa
    cliente1.saldo = cliente1.saldo + precio_final;
    creaCarritoCompras(cliente1);
    mostrarCliente(cliente1);
}

//funcion dedicada a mostrar los datos del cliente en nuestra pagina

function creaListaProd(indice) {
    let lisProd = document.querySelector("#prod-indiv" + indice);
    lisProd.innerHTML = " ";
    let cadena = "cantProd" + indice;
    let div = document.createElement("section");

    if (indice == 1 && localStorage.getItem(cadena) != 0) {
        let saldo_parcial = localStorage.getItem(cadena) * 50000;
        div.innerHTML = `
            <h1> <b>Producto:</b> Ruedas Humanac</h1>
            <h2> Cantidad: ${localStorage.getItem(cadena)}</h1> 
            <h2> Descripcion: Rueda tmanaño grande de alta densidad</h2>
            <h2> Precio de lista: ${saldo_parcial}</h2> 
            `;
        div.className = "prod-individual";
        lisProd.append(div);
    }
    else{
        if (indice == 2 && localStorage.getItem(cadena) != 0) {
            let saldo_parcial = localStorage.getItem(cadena) * 13000;
            div.innerHTML = `
                <h1> <b>Producto:</b> Parabrisas Northwest</h1>
                <h2> Cantidad: ${localStorage.getItem(cadena)}</h1> 
                <h2> Descripcion: Parabrisas compactos para nieve y desierto</h2> 
                <h2> Precio de lista: ${saldo_parcial}</h2> 
                `;
            div.className = "prod-individual";
            lisProd.append(div);
        }
        else{
            if (indice == 3 && localStorage.getItem(cadena) != 0) {
                let saldo_parcial = localStorage.getItem(cadena) * 4000;
                div.innerHTML = `
                    <h1> <b>Producto:</b> Maniubro steel series 3.0</h1>
                    <h2> Cantidad: ${localStorage.getItem(cadena)}</h1> 
                    <h2> Descripcion: Manubrio de acero inoxidable con aeroventilas incorporadas</h2> 
                    <h2> Precio de lista: ${saldo_parcial}</h2> 
                    `;
                div.className = "prod-individual";
                lisProd.append(div);
            }
            else{
                if (indice == 4 && localStorage.getItem(cadena) != 0) {
                    let saldo_parcial = localStorage.getItem(cadena) * 30000;
                    div.innerHTML = `
                        <h1> <b>Producto:</b> Bujias Manuelito</h1>
                        <h2> Cantidad: ${localStorage.getItem(cadena)}</h1> 
                        <h2> Descripcion: Bujias de alta gama</h2> 
                        <h2> Precio de lista: ${saldo_parcial}</h2> 
                        `;
                    div.className = "prod-individual";
                    lisProd.append(div);
                }
            }
        }
    }  
}

function creaCarritoCompras(cliente) {
    let carrito = document.querySelector("#carrito-compras");
    carrito.innerHTML = "";
    let div = document.createElement("section");
    if (parseInt(cliente.saldo) >= 20000) {
        div.innerHTML = `
        <h1 style = "text-align: center; background-color: #c0e6f0"; text-decoration-line: underline;> <b>Datos de tu factura de compra</b></h1>
        <h2> Factura a nombre de  ${cliente.nombre}</h1> 
        <h2> Total de tu compra: ${cliente.precio} realizadas en ${cliente.cuotas} cuptas</h2> 
        <h2> Cantidad de cuotas: ${cliente.cuotas}</h2>
        <h2> Correo del comprador: ${cliente.correo}</h2>
        <h2> Total de la compra: ${cliente.saldo} $</h2>
        <h2 style = "background-color: #FFB6C1;"> Como la suma de tu compra es superior a $20000 entras automaticamente al sorteo de un super televisor 80 pulgadas 4k! Mucha suerte!
        <h2> A continuacion te presentamos una lista de los productos comprados: </h2>
        `;
        div.className = "carrito-compra"
        carrito.append(div);
    } else {
        div.innerHTML = `<h1 style = "text-align: center;"> <b>Datos de tu factura de compra</b></h1>
        <h2> Factura a nombre de  ${cliente.nombre}</h1> 
        <h2> Total de tu compra: ${cliente.precio} realizadas en ${cliente.cuotas} cuptas</h2> 
        <h2> Cantidad de cuotas: ${cliente.cuotas}</h2>
        <h2> Correo del comprador: ${cliente.correo}</h2>
        <h2> Total de la compra: ${cliente.saldo} $</h2>
        <h2> A continuacion te presentamos una lista de los productos comprados: </h2>
        `;
        div.className = "carrito-compra"
        carrito.append(div);
    }
    creaListaProd("1");
    creaListaProd("2");
    creaListaProd("3");
    creaListaProd("4");
}

function mostrarCliente(cliente) {
    let formulario = document.querySelector("#cliente");
    formulario.innerHTML = "";
    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `
    <h1> Tu compra se ha realizado con exito. Estamos verificando los datos de la misma y pronto recibiras el codigo de seguimiento correspondiente a tu compra, para ver tu carrito <a href="#carrito-compras">haz click aqui</a></h1>`;
    nuevoContenido.className = "info-cliente";
    formulario.append(nuevoContenido);
    Toastify({
        text: "Su compra ha sido concretada! Click para ver ticket!",
        duration: 3000,
        gravity: "up",
        position: "right",
        destination: "https://facebook.com",
        newWindow: true,
        style: {
            background: "linear-gradient(to right, #b2ffff, #008f39)",
        },
    }).showToast();
}

//funciones para cada boton de añadir y quitar productos, con las vefificaciones pertinentes de stock

function suma_prod(num, id) {
    let suma = parseInt(num);
    let nombreId = "cantProd" + id;
    let nuevaCant = document.getElementById(nombreId);
    nuevaCant.innerText = parseInt(nuevaCant.innerText) + 1;
    localStorage.setItem(nombreId, parseInt(localStorage.getItem(nombreId)) + 1);
    localStorage.setItem(
        "monedero",
        parseInt(parseInt(localStorage.getItem("monedero")) + suma)
    );
    document.getElementById("precio").value = localStorage.getItem("monedero");
    Toastify({
        text: "Producto agregado al carrito!",
        duration: 3000,
        gravity: "up",
        position: "right",
    }).showToast();
}

function quita_prod(num, id) {
    let resta = parseInt(num);
    let nombreId = "cantProd" + id;
    let nuevaCant = document.getElementById(nombreId);
    if (0 == parseInt(nuevaCant.innerText))
        Toastify({
            text: "No puedes hacer eso, agrega productos primero",
            duration: 3000,
            gravity: "up",
            position: "right",
        }).showToast();
    else {
        nuevaCant.innerText = parseInt(nuevaCant.innerText) - 1;
        localStorage.setItem(nombreId, parseInt(localStorage.getItem(nombreId)) - 1);
        localStorage.setItem(
            "monedero",
            parseInt(parseInt(localStorage.getItem("monedero")) - resta)
        );
        document.getElementById("precio").value = localStorage.getItem("monedero");
        Toastify({
            text: "Producto removido con exito",
            duration: 3000,
            gravity: "up",
            position: "right",
        }).showToast();
    }
}

//hacemos verificacion del form para verificar que los datos esten correctos

let form = document.querySelector("#form");
form.addEventListener("submit", btnSubmit);
async function btnSubmit(e) {
    e.preventDefault();
    let form = new FormData(this);
    let response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            Accept: "application/json",
        },
    });

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;

    if (nombre.length == 0 || nombre.length === "") {
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

    if (correo.length == 0 || nombre.length === "") {
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

    if (response.ok) {
        cargaCliente();
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
}

//usamos fetch para añadir un listado de productos que estaran a futuro, extrayendo informacion de una API

const listaNuevos = document.querySelector("#listaDemasProd");
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach((post) => {
            const div = document.createElement("section");
            div.innerHTML = `
            <h3><b>Nombre:</b> ${post.title}</h5>
            <h5>${post.body}</h5>
            <h4 style = "background-color: #90EE90; width: 100%; margin = 0;" >Product aviable soon.</h4>`;
            div.className = "newProduct";
            listaNuevos.append(div);
        });
    });