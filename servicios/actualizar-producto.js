import { servicios } from "../servicios/productos-servicios.js";


const formulario = document.querySelector("[data-form]");
const obtenerInfo = async() => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const img = document.querySelector("[data-img]");
    const categoria = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-desc]");

    try{
        const producto = await servicios.productoID(id);

        img.value = producto.img_p;  
        categoria.value = producto.categoria_p;
        nombre.value = producto.nombre_p;
        precio.value = producto.precio_p;
        descripcion.value = producto.descripcion_p; 


    }catch(e){
        console.log("error "+ e);
    }


    if(id == null){
        alert("error no se encontro el producto!");
    }   
};

obtenerInfo();

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const img = document.querySelector("[data-img]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-desc]").value;

    servicios.updateProducto(img, categoria, nombre, precio, descripcion, id).then(()=>{
        window.location.href = "../productos.html";
    });


})