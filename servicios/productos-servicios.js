//get

const listaProductos = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json()); 

// Crear propducto

const crearProd = (img_p, categoria_p, nombre_p, precio_p, descripcion_p) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        }, 
        body: JSON.stringify({ img_p, categoria_p, nombre_p, precio_p, descripcion_p, id: uuid.v4()})
    });
};

//Eliminar producto
const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
    });
};


//mostrar datos por id

const productoID = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json());
}

//update producto
const updateProducto = (img_p, categoria_p, nombre_p, precio_p, descripcion_p, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify( { img_p, categoria_p, nombre_p, precio_p, descripcion_p } )
    }).then( (respuesta) => respuesta)
    .catch((e) => console.log(e));
};

export const servicios = {
    listaProductos,
    crearProd,
    eliminarProducto,
    productoID,
    updateProducto
};