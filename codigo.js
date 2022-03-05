const buttonMenu = document.getElementById("button__menu");
const menu = document.getElementById("menu");
const topBanner = document.getElementById("topBanner");
let  click=0;
buttonMenu.onclick = function(){
    

    if ( click == 0){
    menu.style.left="0px";
    topBanner.style.left="220px";
	click=1;
	 }
    else {
        menu.style.left="-200px";
        topBanner.style.left="-205px";
        
        click=0;
     }
     
};

let buttonInisioSesion= document.getElementById("button__sesion");
let circuloFondo= document.getElementById("banner__circulo");
let  sesion= document.getElementById("sesion");
let buttonCancelar= document.getElementById("cancelar__datos")
let elementosFondo= document.getElementById("head")
let fondoSec= document.getElementById("sec")
var  click2=0;
buttonInisioSesion.onclick = function(){
    if ( click2 == 0){
    sesion.style.opacity="1";
    circuloFondo.style.opacity="0";
    sesion.style.top="80px"
    elementosFondo.style.opacity="0"
    fondoSec.style.opacity="0"
        click2 =1;
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
    elementosFondo.style.opacity="1"
    fondoSec.style.opacity="1"
    click2=0;
    
	 }
    else{
       console.log("none")
     };
     
};
/*
let perfil= document.getElementById("Perfil")
const ubi= window.pageYOffset;
window.onscroll=function (){
    let ubi2 = window.pageYOffset;
    let Ubicacion = window.pageYOffset; 

    if (ubi<ubi2 ){
        perfil.style.top="-150vh";
        circuloFondo.style.opacity="0";
        
    }
    if(ubi2 > (1000)){
        console.log("Jeje")
    }

    
}
*/
