let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTO_GATO=60;
const ANCHO_GATO=30;
const ALTO_COMIDA=30;
const ANCHO_COMIDA=30;

let gatoX=0;
let gatoY=0;
let comidaX=0;
let comidaY=0;

function graficarGato(){
    graficarRectangulo(canvas.width/2-15, canvas.height/2-30,ANCHO_GATO,ALTO_GATO,"orange")
}

function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"gray");

}

function iniciarJuego(){
    graficarGato();
    graficarComida();

}
function graficarRectangulo(posicionX,posicionY,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(posicionX,posicionY,ancho,alto);
}