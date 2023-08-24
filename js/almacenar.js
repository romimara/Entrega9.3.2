
let ingreso = document.getElementById("item");

let btn_add= document.getElementById("agregar");

let container= document.getElementById("contenedor");

let clean = document.getElementById("limpiar");

//Array donde se guardan las palabras
let listado=localStorage.getItem("palabras")?JSON.parse(localStorage.getItem("palabras")):[]

console.log(listado)

//función que guarda en un objeto, el texto ingresado y lo pushea al array
function save_Text(){

let obj= {
    texto : ingreso.value};

    listado.push(obj)
}

//función que guarda en localstorage el array
function storage(){
    localStorage.setItem("palabras", JSON.stringify(listado))
}

//función que genera el texto en el recuadro
function ingresar_texto(){
    const li = document.createElement("li");
    li.textContent = ingreso.value;
    container.appendChild(li)
    ingreso.value= "";
}

function add(){
    save_Text();
    storage();
    ingresar_texto();
}

//evento que agrega el texto y lo guarda en localstorage
btn_add.addEventListener("click",add)

//variable que trae el contenido del localstorage
let historial = JSON.parse(localStorage.getItem("palabras"))


//por cada texto en el array, crea un elemento, y lo vuelve a presentar en el container
if (listado.length>0){
for (let contenido of historial){
    const li = document.createElement("li");
    li.textContent = contenido.texto;
    container.appendChild(li)
}} else {
    console.log("Array vacio")
}

//función que elimina el localstorage
clean.addEventListener("click", ()=>{
    localStorage.removeItem("palabras");
    container.textContent="";
}
)
