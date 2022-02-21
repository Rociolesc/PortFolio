const buttonMenu = document.getElementById("button__menu");
const menu = document.getElementById("menu");
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

let buttonInisioSesion= document.getElementById("button__sesion");
let circuloFondo= document.getElementById("banner__circulo");
let  sesion= document.getElementById("sesion");
let buttonCancelar= document.getElementById("cancelar__datos")
var  click2=0;
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

 
