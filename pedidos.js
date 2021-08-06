const products = [
    {
      id: '1',
      nombre: 'Pizza de muzzarella',
      precio: 500
    },
    {
      id: '2',
      nombre: 'Pizza de fugazzetta',
      precio: 550,
      imagen: 'img/fugazeta.png'
    },
    {
      id: '3',
      nombre: 'Pizza de papa, ajo y romero',
      precio: 610,
      imagen: 'img/papa_romero.png'
    },
    {
      id: '4',
      nombre: 'Pizza napolitana',
      precio: 640
    },
    {
      id: '5',
      nombre: 'Pizza de muzzarella con jamón',
      precio: 640
    }
    ,
    {
      id: '6',
      nombre: 'Pizza de roquefort',
      precio: 670
    },
    {
      id: '7',
      nombre: 'Pizza calabresa',
      precio: 670
    }
    ,
    {
      id: '8',
      nombre: 'Pizza napolitana con jamon',
      precio: 700
    },
    {
      id: '9',
      nombre: 'Pizza con jamon y morron',
      precio: 760
    },
    {
      id: '10',
      nombre: 'Pizza con provolone',
      precio: 760
    },
    {
      id: '11',
      nombre: 'Pizza con panceta y verdeo',
      precio: 760,
      imagen: 'img/verdeo_panceta.png'
    },
    {
      id: '12',
      nombre: 'Pizza con provolone y jamon',
      precio: 840
    },
    {
      id: '13',
      nombre: 'Pizza de cuatro quesos',
      precio: 840,
      imagen: 'img/cuatro_quesos.png'
    },
    {
      id: '14',
      nombre: 'carne',
      precio: 85
    },
    {
      id: '15',
      nombre: 'carne-cuchillo',
      precio: 85
    },
    {
      id: '16',
      nombre: 'pollo',
      precio: 85
    },
    {
      id: '17',
      nombre: 'jamon-queso',
      precio: 85
    },
    {
      id: '18',
      nombre: 'cebolla-queso',
      precio: 85
    },
    {
      id: '19',
      nombre: 'cebolla-champ-roque',
      precio: 85
    },
    {
      id: '20',
      nombre: 'verdura',
      precio: 85
    },
    {
      id: '21',
      nombre: 'Calzone de muzzarella, tomate disecado, aceitunas negras y albahaca',
      precio: 770,
      imagen: 'img/calzonecaprese.jpeg'
    },
    {
      id: '22',
      nombre: 'Calzone de muzzarella, morrones asados, roquefort y cebolla',
      precio: 770,
      imagen: 'img/calzoneroquefort.jpeg'
    },
    {
      id: '23',
      nombre: 'Calzone de muzzarella, longaniza y tomates frescos',
      precio: 770,
      imagen: 'img/calzonelonganiza.jpeg'
    },
    {
      id: '24',
      nombre: 'Pizza de muzzarella y pesto',
      precio: 640,
      imagen: 'img/pesto.JPG'
    }
  ];

let carrito = [];
let precioTotal;

function getTotal(shoppingCart){
  let totalPrice = 0;
  for(let i=0; i<shoppingCart.length; i++){
  totalPrice += shoppingCart[i].precio;
  }
  return parseInt(totalPrice,10);
}

//Uso la funcion getOcurrence para saber la cantidad de veces que un objeto se encuentra en el array carrito, 
//y despues mostrar ese resultado en el modal carrito
function getOccurrence(array, value) {
  let count = 0;
  array.forEach((v) => (v === value && count++));
  return count;
  }

 // addToCart busca en el array "products" el elemento (objeto en este caso) que tenga igual id que el argumento de la funcion y 
 //con el metodo push lo agrega al array carrito. Dentro de la funcion, ejecuto showInShoppingCart para que se muestre en el modal   

 function addToCart(idDelBoton) {

  const productoEnDB = products.find(
    product => product.id === idDelBoton
  );
  carrito.push(productoEnDB);
  precioTotal = getTotal(carrito);
  let cantidad = getOccurrence(carrito, productoEnDB);
  showInShoppingCart(productoEnDB,cantidad);
  document.querySelector('#precio').innerHTML = `Precio:$${precioTotal}`;
  console.log(precioTotal);
}



// showInShoppingCart muestra en el HTML una tabla dentro del modalCarrito, en caso de que no haya una ya existente. 
//Si lo hay, le agrega a esta una fila con los atributos de este objeto "producto" a agregar, en orden de columnas de
//izq a derecha: imagen, nombre de producto, precio, cantidad, boton para aumentar cantidad, para disminuir cantidad, y para eliminar producto del carrito

function showInShoppingCart(productoAAgregar,cantidad){
  let tabla =  document.querySelector('table');
  let contenidoTablaCarrito = document.querySelector('table tbody');
  const modalCarrito = document.querySelector('.modal-carrito');
  if(tabla === null ){
    console.log('Hace una tabla nueva');
    let tabla = document.createElement('table');
    tabla.classList.add('contenido-tabla')
    let precio = document.createElement('h3');
    precio.setAttribute("id","precio");
    document.querySelector('.interior-carrito').append(precio); 
    tabla.innerHTML = `
    <thead><tr>
    <th></th>
    <th>Producto</th>
    <th>Precio</th>
    <th>Cantidad</th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    </thead>
    <tbody>
    <tr class="id-${productoAAgregar.id}">
    <td><img src="${productoAAgregar.imagen}" height="40px" class=""></td>
      <td>${productoAAgregar.nombre}</td>
      <td>$${productoAAgregar.precio}</td>
      <td class="qty-modal-carrito-${productoAAgregar.id}">${cantidad}</td>
      <td class="remove-from-cart" data-id="${productoAAgregar.id}"><img class="add-or-remove"  src="img/-.png"></td>
      <td class="add-to-cart" data-id="${productoAAgregar.id}"><img class="add-or-remove"  src="img/+.png"></td>  
      <td class="delete-from-cart" data-id="${productoAAgregar.id}"><img class="add-or-remove"  src="img/x.png"></td>
    </tr>
    </tbody>`
    document.querySelector('.interior-carrito').prepend(tabla);
  }
  allTheRows = document.querySelectorAll('tr');
  let IsAlreadyInShoppingCart = false;
  allTheRows.forEach(function(rw){ if (rw.classList.contains(`id-${productoAAgregar.id}`)){
    IsAlreadyInShoppingCart = true;
  }
  });

  if(IsAlreadyInShoppingCart){
    document.querySelector(`.qty-modal-carrito-${productoAAgregar.id}`).innerHTML = getOccurrence(carrito, productoAAgregar);
  }
  else{
    let row = document.createElement('tr');
    row.innerHTML = `
    <td><img src="${productoAAgregar.imagen}" height="40px" class=""></td>
    <td>${productoAAgregar.nombre}</td>
    <td>$${productoAAgregar.precio}</td>
    <td class="qty-modal-carrito-${productoAAgregar.id}">${cantidad}</td>
    <td class="remove-from-cart" data-id="${productoAAgregar.id}"><img class="add-or-remove"  src="img/-.png"></td>
    <td class="add-to-cart" data-id="${productoAAgregar.id}"><img class="add-or-remove"  src="img/+.png"></td>  
    <td class="delete-from-cart" data-id="${productoAAgregar.id}"><img class="add-or-remove"  src="img/x.png"></td>`;
      row.classList.add(`id-${productoAAgregar.id}`);
      contenidoTablaCarrito.appendChild(row);
    }
  }
let btnComprar = document.querySelectorAll('.add-to-cart');
  
  //Hacemos un for each del array que nos trae el querySelectorAll de los botones que tienen clases y le agregamos un evento onclick donde llamamos la funcion addToCart. Si te fijas en el html a cada button le cargue un value que simula el Id del producto por eso utilizo el e.target.value... e.target hace referencia al boton que le estoy dando click y value al value que tiene el button
btnComprar.forEach(function(btn) {
  btn.addEventListener('click', () => addToCart(btn.dataset.id));
});


//Disminuyo en uno la cantidad de items de un producto del carrito usando el boton '-', 
//despues uso getOcurrence y el valor retornado lo muestro en el modal del carrito. 
//Si luego de eliminarlo del array 'carrito' la cantidad es 0, 
//ejecuta la funcion que borra la fila donde se muestra al producto en el modal del carrito (deleteFromShoppingCartModal)


  function decreaseQtyOfItem(idDelBoton) {
    let carritoLuegodeEliminarItem = [];
    let hasAlreadyAppeared = false;
    let productoAReducirQty
    for(let i=0; i<carrito.length; i++){
        if(carrito[i].id !== idDelBoton){
            carritoLuegodeEliminarItem.push("carrito[i]");
        }
        if(carrito[i].id === idDelBoton && hasAlreadyAppeared  === false){
            hasAlreadyAppeared  = true;
            productoAReducirQty = carrito[i];
        }
        if(carrito[i].id === idDelBoton && hasAlreadyAppeared  === true){
            carritoLuegodeEliminarItem.push("carrito[i]");
        }
    }

    carrito = carritoLuegodeEliminarItem;
    precioTotal = getTotal(carrito);
    document.querySelector('#precio').innerHTML = `$${precioTotal}`;
    let cantidad = getOccurrence(carrito,productoAReducirQty);
    document.querySelector(`.qty-modal-carrito-${idDelBoton}`).innerHTML = `${cantidad}`;
    if(cantidad === 0){
      deleteFromShoppingCartModal(idDelBoton);
    }
  }

  let btnDecrease = document.querySelectorAll('.remove-from-cart');
  
  //Hacemos un for each del array que nos trae el querySelectorAll de los botones que tienen clases y le agregamos un evento onclick donde llamamos la funcion decreaseQtyOfItem. Si te fijas en el html a cada button le cargue un value que simula el Id del producto por eso utilizo el e.target.value... e.target hace referencia al boton que le estoy dando click y value al value que tiene el button
  btnDecrease.forEach(function(btn) {
    btn.addEventListener('click', () => decreaseQtyOfItem(btn.dataset.id));
  });


// deleteItem guarda en un array todos los elementos del carrito menos los que tengan id igual al argumento
// y luego almacena ese array en carrito
  function deleteItem(idDelBoton) {
    const carritoLuegodeEliminar = carrito.filter(
      product => product.id !== idDelBoton
    );

    carrito = carritoLuegodeEliminar;
    precioTotal = getTotal(carrito);    
    document.querySelector('#precio').innerHTML = `$${precioTotal}`;
    deleteFromShoppingCartModal(idDelBoton);
  }
//deleteFromShoppingCartModal borra toda la tabla del modal del carrito si solo hay dos lineas (un producto y la linea thead)
// si la cantidad de lineas es distinta de dos, borra solo el elemento que es una fila y que tiene 
//como nombre de clase el id del boton (mejor dicho id del producto)
function deleteFromShoppingCartModal(idDelBoton){
  let tabla =  document.querySelector('table');
  if(tabla.rows.length === 2){
  modalCarrito.removeChild(tabla); //.removeChild() funciona solo con elementos que son hijos directos
  }
  else{
    let productoAEliminar =  document.querySelector(`tr.id-${idDelBoton}`);
    productoAEliminar.remove();
  }
} 
let btnDelete = document.querySelectorAll('.delete-from-cart');

btnDelete.forEach(function(btn) {
  btn.addEventListener('click', () => deleteItem(btn.dataset.id));
});



//A partir de aca, la funcionalidad para comenzar el pedido
//Elijo los menues y los cierro
const btnPedir = document.querySelectorAll('.pedidos_btn');
const boxSeccionPedir = document.querySelector('.pedidos_container');
const btnProductos = document.querySelector('.pedidos_menu');
const imgProductos = document.querySelectorAll('.img-prod');
btnPedir.forEach(function(btn) {
    btn.addEventListener('click', () => {
        boxSeccionPedir.classList.add('hidden');
        btnProductos.classList.add('activo');
        });
    });

//Clickeo calzone o pizza y muestro alguno de los dos usando el valor de dataset de cada elemento    
imgProductos.forEach(function(btn){
  
  btn.addEventListener('click', () => {
    btnProductos.classList.remove('activo');
    const producto = btn.dataset.prod;
    thisMenu = document.querySelector(`#${producto}`);
    thisMenu.classList.remove('hidden');

    document.querySelector('.back-to-second').classList.remove('hidden');
  });

});
//Vuelvo a lo que se muestra primero en la pagina, los botones de 'delivery' y 'retirar en local'
document.querySelector('.back-to.first').addEventListener('click', () =>{
  boxSeccionPedir.classList.remove('hidden');
  btnProductos.classList.remove('activo');

});
//Vuelvo a donde se muestran solo los botones de calzone y pizza
document.querySelector('.back-to-second').addEventListener('click', () =>{ 
  document.querySelector('.back-to-second').classList.add('hidden');
  
  btnProductos.classList.add('activo');
  document.querySelector('#lista_calzone').classList.add('hidden');
  document.querySelector('#lista_menu').classList.add('hidden');


});  

//Abro el modal del carrito

document.querySelector('.carro').addEventListener('click',() =>{
  document.querySelector('.modal-carrito').classList.add('activo');
});

document.querySelector('#close-carrito').addEventListener('click',() =>{
  document.querySelector('.modal-carrito').classList.remove('activo');
});

