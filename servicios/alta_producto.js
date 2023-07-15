const formulario = document.querySelector("[data-form]");

import {servicios} from "../servicios/productos-servicios.js";


//obtenemos los datos del formulario
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const img_p = document.querySelector("[data-img]").value;
    const categoria_p = document.querySelector("[data-categoria]").value;
    const nombre_p = document.querySelector("[data-nombre]").value;
    const precio_p = document.querySelector("[data-precio]").value;
    const descripcion_p = document.querySelector("[data-desc]").value;
    servicios.crearProd( img_p , categoria_p, nombre_p, precio_p, descripcion_p)
    .then(() => {
        window.location.href = "../productos.html";
    }).catch(e => console.log(e));
});