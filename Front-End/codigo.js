const buttonMenu = document.getElementById("button__menu");
const menu = document.querySelectorAll("#menu,#menu2");
const topBanner = document.getElementById("topBanner");
let  click=0;
let click2=0;
function menuDesp(){
    
 if(window.innerHeight>592){
    if ( click == 0){
        
        menu[0].style.left="0px";
        topBanner.style.left="220px";
	click=1;
        }
    else {
        menu[0].style.left="-200px";
        topBanner.style.left="-205px";
        
        click=0;
     }
    }
if(window.innerHeight<592){
    if ( click2 == 0){
        menu[1].style.top="0px";
        topBanner.style.left="12px";
	click2=1;
        }
    else {
        menu[1].style.top="-182px";
        topBanner.style.left="-65px";
        
        click2=0;
     }
    
    }
     
};

let buttonInisioSesion= document.getElementById("button__sesion");
let circuloFondo= document.getElementById("banner__circulo");
let  sesion= document.getElementById("sesion");
let buttonCancelar= document.getElementById("cancelar__datos")
let elementosFondo= document.getElementById("head")
let fondoSec= document.getElementById("sec")
var  click3=0;
buttonInisioSesion.onclick = function(){
    if(Window.innerHeight>592){
    if ( click3 == 0){
        
    sesion.style.opacity="1";
    circuloFondo.style.opacity="0";
    sesion.style.top="80px"
    elementosFondo.style.opacity="0"
    fondoSec.style.opacity="0"
        click3 =1;
        
	 }
    else{
        console.log("none")
    }}
    else{
        if ( click3 == 0){
    sesion.style.opacity="1";
    circuloFondo.style.opacity="0";
    sesion.style.top="36px"
    elementosFondo.style.opacity="0"
    fondoSec.style.opacity="0"
        click3 =1;
        
	 }
    else{
        console.log("none")
    }
    }
};
     


buttonCancelar.onclick = function(){
    if ( click3 == 1){
    sesion.style.opacity="0";
    circuloFondo.style.opacity="1";
    sesion.style.top="-500px"
    elementosFondo.style.opacity="1"
    fondoSec.style.opacity="1"
    click3=0;
    
	 }
    else{
       console.log("none")
     };
     
};
/*
let nav=document.getElementById('nav')
window.addEventListener('keydown',aparecerLogin);
let m=0;
function aparecerLogin(e){
    
    if(e.keyCode == '76' && e.altKey == true ){
    nav.style.right='0px';

    };   
    if (e.keyCode == '76' && e.ctrlKey == true ){
        nav.style.right='-202px';
    };  
    
};
let Edit=document.querySelectorAll('#LogoEdit,.edit__perfil,.edit__F,.edit__F,.edit__F,.edit__H,.edit__H,.edit__H,.edit__H,.edit__PEspl');
let userName=document.getElementById('idE');
let pass=document.getElementById('password__1');
let f=document.getElementById("form");

function go(evt){
    evt.preventDefault();
    if ( userName.value=='Admin12'&& pass.value=='ArP2022' ){ 
        
           console.log('rrr')
           
        }
        else{ 
             alert("Porfavor ingrese, nombre de usuario y contrase??a correctos."); 
        } 
} 
*/
