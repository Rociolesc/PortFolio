var buttonMenu = document.getElementById("button__menu");
var menu = document.getElementById("menu");
let  click=0;
buttonMenu.onclick = function(){
    if ( click == 0){
    menu.style.left="1px";
	click++;
	 }
    else {
        menu.style.left="-200px";
        click--;
     }
     
};

var buttonInisioSesion= document.getElementById("button__sesion");
var sesion= document.getElementById("sesion");
var circuloFondo= document.getElementById("banner__circulo")
var sesion= document.getElementById("sesion");
var buttonCancelar= document.getElementById("cancelar__datos")
let  click2=0;
buttonInisioSesion.onclick = function(){
    if ( click2 == 0){
    sesion.style.opacity="1";
    circuloFondo.style.opacity="0";
    sesion.style.top="70px"
        click2 ++;
	 }
    else{
        console.log("none")
    }
     
};

buttonCancelar.onclick = function(){
    if ( click2 == 1){
    sesion.style.opacity="0";
    circuloFondo.style.opacity="1";
    sesion.style.top="-500px"
    click2--;
	
	 }
    else{
       console.log("none")
     };
     
};

 
