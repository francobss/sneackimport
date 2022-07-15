
function descuento(a){
    res = a * 10 / 100
    return res
}

class producto {
    constructor(id, nombre, precio, cat, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cat = cat;
        this.stock = stock;
    }
}
class carro {
    constructor(id, nombre, precio, cat, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cat = cat;
        this.cantidad = cantidad;
    }
}
const myTienda = [
    new producto(Math.round(Math.random()* 100 + 10),'Nike Air Max 270', 25000, 'nike', 10),
    new producto(Math.round(Math.random()* 100 + 10),'Nike Air Jordan', 28000, 'nike', 8),
    new producto(Math.round(Math.random()* 100 + 10),'Adidas Path Run', 23000, 'adidas', 15),
    new producto(Math.round(Math.random()* 100 + 10),'Adidas Yeezy 350', 22500, 'adidas', 5),
]

//Array vacios.
const myCarro = [];
//
let myTotal = 0; 
let acumulador = 0;
let desc = 0;
let categoria = "";
let categorias = ['nike', 'adidas'];


while(categoria != 'salir' && categoria != null){

    let auxCat = categorias.join('\n');
    categoria = prompt('Ingrese la categoria a seleccionar:\n' + auxCat);
    
    if(categoria != 'salir' && categoria != null){
        
        let categoriasFiltradas = myTienda.filter((item) => item.cat == categoria);

        let cartel = '';
        // for para guardar los productos de la categoria seleccionada
        for( i = 0; i < categoriasFiltradas.length; i++){
            cartel += 'Id: ' + categoriasFiltradas[i].id + ' Precio: ' + categoriasFiltradas[i].precio + ' Producto: ' + categoriasFiltradas[i].nombre + '\n';
        }

        let idSel = parseInt(prompt('Seleccione el id del producto que desea:\n\n' + cartel));

        // guardamos los productos en la variable para pasarlo al array del carro
        let productoParaMyCarro = categoriasFiltradas.find((item) => item.id == idSel);

        // condicional validador de que este el id seleccionado y agregamos los productos al carro
        if(productoParaMyCarro){
            myCarro.push(productoParaMyCarro)
        }
    }
}
// acumulador para ver cuanto debe pagar
for(item of myCarro){
    acumulador = acumulador + item.precio;
}

// aplicamos descuento si el usuario lleva 2 productos o mas 
if(myCarro.length >= 2){
    desc = descuento(acumulador);
    myTotal = acumulador - desc;
}else{
    myTotal = acumulador;
}

const pago = prompt('Finalizar pago?\n SI\n NO' + '\nSu total a pagar es: ' + myTotal + '\nDescuento Aplicado: ' + desc);
if(pago === 'si' && pago != null){
    const nombre = prompt('Ingrese su nombre y Apellido:');
    const email = prompt('Ingrese su correo:');
    const telefono = prompt('Ingrese su telefono:');
    alert('PAGO FINALIZADO!\nGracias por confiar!\nDatos:\nNombre y Apellido: ' + 
        nombre + '\nCorreo: ' + email + '\nTelefono: ' + telefono);
}else{
    alert('PAGO CANCELADO!')
}


