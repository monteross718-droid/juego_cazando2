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
let puntaje=0;

function iniciarJuego(){
    gatoX=canvas.width/2-15
    gatoY=canvas.height/2-30
    comidaX=canvas.width-ANCHO_COMIDA;
    comidaY=canvas.height-ALTO_COMIDA;
    graficarGato();
    graficarComida();
    

} 

function graficarGato(){
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"orange")
}

function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"gray");

}


function graficarRectangulo(posicionX,posicionY,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(posicionX,posicionY,ancho,alto);
}

function moverIzquierda(){
    if(gatoX > 0){
        gatoX = gatoX - 10;
        actualizarPantalla();
    }

}

function moverDerecha(){
    if(gatoX +ANCHO_GATO < canvas.width){
        gatoX = gatoX + 10;
        actualizarPantalla();
        
    }

}

function moverAbajo(){
    if(gatoY +ALTO_GATO < canvas.height){
        gatoY = gatoY + 10;
        actualizarPantalla();
    }

}

function moverArriba(){
    if(gatoY >0){
        gatoY = gatoY - 10;
        actualizarPantalla();
    }

}

function actualizarPantalla(){
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
   
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

}

function monstrarEnSpan(){
    let elementoPuntaje=document.getElementById("puntos");
    elementoPuntaje.textContent=puntaje;

}

function detectarColision(){                                          //////////////
    if(gatoX + ANCHO_GATO > comidaX &&
       gatoX < comidaX + ANCHO_COMIDA &&
       gatoY + ALTO_GATO > comidaY &&
       gatoY < comidaY + ALTO_COMIDA){
       
     reposicionarComida();  
     
     puntaje++;
     monstrarEnSpan();
        
    }
}
function reposicionarComida(){
    comidaX = Math.random() * (canvas.width-ANCHO_COMIDA);
    comidaY = Math.random() * (canvas.height-ALTO_COMIDA);

}