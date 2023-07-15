import {servicios} from "../servicios/productos-servicios.js"

const crearNuevaLinea = (nombre_p, precio_p,img_p, id) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    const contenido = `
    <img src="${img_p}" alt="" class="img__producto_btn">
    <div class="producto__icons">
        <a><i class="fa-solid fa-trash fa-lg producto__icon__delete" id=${id}  data-elimina></i></a>
        <a href= "edit-producto.html?id=${id}" ><i class="fa-solid fa-pen-to-square fa-lg producto__icon__edit"  ></i></a>
    </div>
    
    <div class="producto__contenido">
        <p class="producto__nombre">${nombre_p}</p>
        <p class="producto__precio">$ ${precio_p}</p>
        <p># ${id}</p>
    </div>   
    `;
    div.innerHTML = contenido;


    const a = div.querySelector("[data-elimina]");
    a.addEventListener("click", ()=>{
        const id = a.id;
        console.log(id);
        servicios.eliminarProducto(id).then(respuesta => {
            console.log(respuesta);

        }).catch(error => alert("upps algo salio mal, intente mas tarde! "+ error));
    });



    return div;
};

const producto_g = document.querySelector("[data-producto]");

    servicios.listaProductos().then((data) => {
        data.forEach(({nombre_p, precio_p,img_p, id}) => {
            const nuevaLinea = crearNuevaLinea(nombre_p, precio_p, img_p, id);
            producto_g.appendChild(nuevaLinea);
        });
    }).catch((e) => alert(e));