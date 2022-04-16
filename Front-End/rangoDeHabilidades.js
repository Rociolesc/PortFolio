const porcentaje=document.querySelectorAll('#ranNumero,#ranNumeroReso,#ranNumeroPro,#ranNumeroIng');
const rango=document.querySelectorAll('#rango,#rangoReso,#rangoPro,#rangoIng');
const porcInt=document.querySelectorAll('#porcInt,#porcIntResol,#porcIntProac,#porcIntIng');
const bot2=document.querySelectorAll('#editHrespPorc-2,#editHresolPorc-2,#editHproacPorc-2,#editHingPorc-2');
const bot1=document.querySelectorAll('#editHrespPorc,#editHresolPorc,#editHproacPorc,#editHingPorc');
let valorSincambio=[];
function editPorc(n){
    x=n;
    bot1[n].style.display='none';
    bot2[n].style.display='inline-block';
    valorSincambio[n]=rango[n].value;
    rango[n].style.display='inline-block';
    porcentaje[n].style.display='inline-block';

}
function checkPorc(n){
    
    if(window.innerWidth< 837){
        bot1[n].style.display='inline-block';
        bot2[n].style.display='none';
        porcInt[n].style.width=((rango[n].value * 74.4)/100 )+'vw';
        rango[n].style.display='none';
        porcentaje[n].style.display='none';
    
    }
    if(window.innerWidth > 837){
        bot1[n].style.display='inline-block';
        bot2[n].style.display='none';
        porcInt[n].style.width=((rango[n].value * 49.7)/100 )+'vw';
        rango[n].style.display='none';
        porcentaje[n].style.display='none';
    }
}
function xPorc(n){
    if(window.innerWidth< 837){
    bot1[n].style.display='inline-block';
    bot2[n].style.display='none';
    rango[n].style.display='none';
    porcentaje[n].style.display='none';
    porcInt[n].style.width=((valorSincambio[n]* 74.4)/100 )+'vw';
    porcentaje[n].innerHTML=valorSincambio[n]+'%';
    rango[n].value=valorSincambio[n];
    }
    if(window.innerWidth > 837){
        bot1[n].style.display='inline-block';
        bot2[n].style.display='none';
        rango[n].style.display='none';
        porcentaje[n].style.display='none';
        porcInt[n].style.width=((valorSincambio[n]* 49.7)/100 )+'vw';
        porcentaje[n].innerHTML=valorSincambio[n]+'%';
        rango[n].value=valorSincambio[n];
    }
}
window.addEventListener('load',porcHabilidad,false);

  function porcHabilidad(){
    rango[0].addEventListener('change',cambioPorcentaje,false);
  }

  function cambioPorcentaje(){    
    porcentaje[0].innerHTML=rango[0].value +'%';
    if(window.innerWidth< 837){
    porcInt[0].style.width=((rango[0].value * 74.4)/100 )+'vw';
    }
    if(window.innerWidth > 837){
    porcInt[0].style.width=((rango[0].value * 49.7)/100 )+'vw';
    }
}

window.addEventListener('load',porcHabilidadres,false);

  function porcHabilidadres(){
    rango[1].addEventListener('change',cambioPorcentajeres,false);
  }

  function cambioPorcentajeres(){    
    porcentaje[1].innerHTML=rango[1].value +'%';
    if(window.innerWidth< 837){
    porcInt[1].style.width=((rango[1].value * 74.4)/100 )+'vw';
    }
    if(window.innerWidth > 837){
    porcInt[1].style.width=((rango[1].value * 49.7)/100 )+'vw';
    }
}
window.addEventListener('load',porcHabilidadpro,false);

  function porcHabilidadpro(){
    rango[2].addEventListener('change',cambioPorcentajepro,false);
  }

  function cambioPorcentajepro(){    
    porcentaje[2].innerHTML=rango[2].value +'%';
    if(window.innerWidth< 837){
    porcInt[2].style.width=((rango[2].value * 74.4)/100 )+'vw';
    }
    if(window.innerWidth > 837){
    porcInt[2].style.width=((rango[2].value * 49.7)/100 )+'vw';
    }
}
window.addEventListener('load',porcHabilidading,false);

  function porcHabilidading(){
    rango[3].addEventListener('change',cambioPorcentajeing,false);
  }

  function cambioPorcentajeing(){    
    porcentaje[3].innerHTML=rango[3].value +'%';
    if(window.innerWidth< 837){
    porcInt[3].style.width=((rango[3].value * 74.4)/100 )+'vw';
    }
    if(window.innerWidth > 837){
    porcInt[3].style.width=((rango[3].value * 49.7)/100 )+'vw';
    }
}