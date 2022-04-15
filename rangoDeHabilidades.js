let porcentaje=document.getElementById('ranNumero');
let rango=document.getElementById('rango');
let porcInt=document.getElementById('porcInt');
const bot2=document.getElementById('editHrespPorc-2');
window.addEventListener('load',porcHabilidad,false);

  function porcHabilidad(){
    rango.addEventListener('change',cambioPorcentaje,false);
  }

  function cambioPorcentaje(){    
    porcentaje.innerHTML=rango.value +'%';
    if(window.innerWidth< 837){
    porcInt.style.width=((rango.value * 74.4)/100 )+'vw';
    }
    if(window.innerWidth > 837){
        porcInt.style.width=((rango.value * 49.7)/100 )+'vw';
    }
}
let valorSincambio=[];
function editPorc(){
    bot2.style.display='inline-block';
    valorSincambio[0]=rango.value;
    rango.style.display='inline-block';
    porcentaje.style.display='inline-block';

}
function checkPorc(){
    
    if(window.innerWidth< 837){
        porcInt.style.width=((rango.value * 74.4)/100 )+'vw';
    }
    if(window.innerWidth > 837){
        porcInt.style.width=((rango.value * 49.7)/100 )+'vw';
    }
}
function xPorc(){
    porcInt.style.width=valorSincambio;
}