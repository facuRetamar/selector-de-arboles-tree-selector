//variables

const divTemplado = document.querySelector(".templado")
const divPequeño = document.querySelector(".pequeño")
const divTropical = document.querySelector(".tropical")
const divFrutal = document.querySelector(".frutal")
const divGrande = document.querySelector(".grande")
const divMediano = document.querySelector(".mediano")
const divFloral = document.querySelector(".floral")
const divOrnamental = document.querySelector(".ornamental")
const divCalido = document.querySelector(".calido")
const divFrio = document.querySelector(".frio")
const resultados = document.querySelector(".mostrar_resultados")
const selecciones = document.querySelector(".container_div")
const contenedorCategoria = document.querySelectorAll("contenedor_categoria")
const categoriasSeleccionadas = document.querySelector(".categorias_seleccionadas")



const datosDeBusqueda = {
    tamaño: "",
    clima: "",
    tipo: "",
    descripcion: "",
}





//eventos
document.addEventListener("DOMContentLoaded", ()=>{
    mostrarArboles(arboles);
    

})

//eventos para los selects
divPequeño.addEventListener("click", e=>{
    datosDeBusqueda.tamaño = "pequeño";
    filtrarArbol();
    divPequeño.classList.add("activa")
    divMediano.classList.remove("activa")
    divGrande.classList.remove("activa")

})

divGrande.addEventListener("click", e=>{
    datosDeBusqueda.tamaño = "grande";
    filtrarArbol();
    divPequeño.classList.remove("activa")
    divMediano.classList.remove("activa")
    divGrande.classList.add("activa")
})

divMediano.addEventListener("click", e=>{
    datosDeBusqueda.tamaño = "mediano";
    filtrarArbol();
    divPequeño.classList.remove("activa")
    divMediano.classList.add("activa")
    divGrande.classList.remove("activa")
})


divTemplado.addEventListener("click", e=>{
    datosDeBusqueda.clima = "templado";
    filtrarArbol(); 
    divTemplado.classList.add("activa")
    divTropical.classList.remove("activa")
    divCalido.classList.remove("activa")
    divFrio.classList.remove("activa")
})


divTropical.addEventListener("click", e=>{
    datosDeBusqueda.clima = "tropical";
    filtrarArbol(); 
    divTropical.classList.add("activa")
    divCalido.classList.remove("activa")
    divFrio.classList.remove("activa")
    divTemplado.classList.remove("activa")
})
divCalido.addEventListener("click", e=>{
    datosDeBusqueda.clima = "calido";
    filtrarArbol(); 
    divTropical.classList.remove("activa")
    divCalido.classList.add("activa")
    divFrio.classList.remove("activa")
    divTemplado.classList.remove("activa")
})
divFrio.addEventListener("click", e=>{
    datosDeBusqueda.clima = "frio";
    filtrarArbol(); 
    divTropical.classList.remove("activa")
    divCalido.classList.remove("activa")
    divFrio.classList.add("activa")
    divTemplado.classList.remove("activa")
})
divFrutal.addEventListener("click", e=>{
    datosDeBusqueda.tipo = "frutal";
    filtrarArbol(); 
    divFrutal.classList.add("activa")
    divFloral.classList.remove("activa")
    divOrnamental.classList.remove("activa")
})
divFloral.addEventListener("click", e=>{
    datosDeBusqueda.tipo = "floral";
    filtrarArbol(); 
    divFrutal.classList.remove("activa")
    divFloral.classList.add("activa")
    divOrnamental.classList.remove("activa")
})
divOrnamental.addEventListener("click", e=>{
    datosDeBusqueda.tipo = "ornamental";
    filtrarArbol(); 
    divFrutal.classList.remove("activa")
    divFloral.classList.remove("activa")
    divOrnamental.classList.add("activa")
})



//funciones
function mostrarArboles(arboles){
    
    limpiarHTML()
    arboles.forEach(arbol => {
        const {nombre, tamaño, tipo, clima, descripcion} = arbol;
        const arbolHTML = document.createElement("div")
        arbolHTML.innerHTML = `<b>nombre: </b> ${nombre};<b> tamaño: </b>${tamaño};<b> tipo: </b>${tipo};<b> clima: </b>${clima}`
        arbolHTML.classList.add("descripcion_estilo")
        const botonDescripcion = document.createElement("button")
        botonDescripcion.classList.add("boton")
        botonDescripcion.innerHTML = "descripcion: ";
        const parrafoDescripcion = document.createElement("p")
        parrafoDescripcion.innerHTML = ` ${descripcion} `
        parrafoDescripcion.classList.add("escondido")
        parrafoDescripcion.classList.add("fondo_gris")
        botonDescripcion.addEventListener("click", e=> parrafoDescripcion.classList.toggle("escondido"))
        arbolHTML.appendChild(botonDescripcion)
        arbolHTML.appendChild(parrafoDescripcion)
        resultados.appendChild(arbolHTML)
       
    });
}






function limpiarHTML(){
    while(resultados.firstChild){
        resultados.removeChild(resultados.firstChild);
    }
}


function filtrarArbol(){

    const resultado = arboles.filter(filtrarTipo).filter(filtrarTamaño).filter(filtrarClima)

    resultado.length ? mostrarArboles(resultado) : noResultado()
    

}




function noResultado(){
    limpiarHTML()

    const noResultado = document.createElement("div")
    noResultado.classList.add("alerta")
    noResultado.textContent = "no hay resultados, por favor intente otra combinacion"
    resultados.appendChild(noResultado)
}

function filtrarTipo(arbol){
    const {tipo} = datosDeBusqueda;
    if(tipo){
        return arbol.tipo === tipo;
    } return tipo;
}


function filtrarClima(arbol){
    const {clima} = datosDeBusqueda;
 if(clima){
    return arbol.clima === clima;
} return clima;
    
}


function filtrarTamaño(arbol){
    const {tamaño} = datosDeBusqueda
    if(tamaño){
        return arbol.tamaño === tamaño
    } return tamaño;
}

const arbolesDatos = document.querySelectorAll(".datos_arboles")





