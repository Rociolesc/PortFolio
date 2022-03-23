const editFotoPerf=document.querySelectorAll('#editFotoPerf,#editFotoFUtn,#editFotoFNac,#editFotoFArP');
const botonXeY=document.querySelectorAll('#editFotoPerf2,#editFotoFUtn2,#editFotoFNac2,#editFotoFArP2')
const contFile=document.querySelectorAll('#contFile,#contFileFUtn,#contFileFNac,#contFileFArP')
let inpFile=document.querySelectorAll('#inpFile,#inpFileFUtn,#inpFileFNac,#inpFileFArP')
/*
function editFoto(n){

    editFotoPerf[n].style.display="none";
    botonXeY[n].style.display="inline-block";
    contFile[n].style.width="45vw";
    contFile[n].style.paddingLeft="10vw";
    inpFile[n].style.width="272px";
}
function checkFoto(n){
    botonXeY[n].style.display="none";
    editFotoPerf[n].style.display="inline-block";
    contFile[n].style.width="0vw";
    contFile[n].style.paddingLeft="0px";
    inpFile[n].style.width="0px";

}

function xEditFoto(n){
    botonXeY[n].style.display="none";
    editFotoPerf[n].style.display="inline-block";
    contFile[n].style.width="0vw";
    contFile[n].style.paddingLeft="0px";
    inpFile[n].style.width="0px";
}*/
function editFoto1(n){

    if (window.innerWidth< 837){
        console.log("funciona")
        editFotoPerf[n].style.display="none";
        botonXeY[n].style.display="inline-block";
        contFile[n].style.height="284px";
        contFile[n].style.width="50vw";
        contFile[n].style.paddingLeft="7vw";
        contFile[n].style.paddingTop="260px";
        contFile[n].style.marginLeft="10vw";
        inpFile[n].style.height="40px";
        inpFile[n].style.width="37vw";
        inpFile[n].style.transition="all 1.5s";
    }
    if (window.innerWidth> 837){
        console.log("funciona vercion grande")
    editFotoPerf[n].style.display="none";
    botonXeY[n].style.display="inline-block";
    contFile[n].style.width="45vw";
    contFile[n].style.height="198px";
    contFile[n].style.paddingLeft="10vw";
    contFile[n].style.paddingTop="173px";
    contFile[n].style.marginLeft="7vw";
    inpFile[n].style.width="272px";
  

    }
    
    
}
function checkFoto1(n){
    if (window.innerWidth< 837){
        editFotoPerf[n].style.display="inline-block";
        botonXeY[n].style.display="none";
        contFile[n].style.height="0px";
        contFile[n].style.width="0vw";
        contFile[n].style.paddingLeft="0vw";
        contFile[n].style.paddingTop="0px";
        contFile[n].style.marginLeft="35vw";
        inpFile[n].style.height="0px";
        inpFile[n].style.width="0px";
        inpFile[n].style.transition="all 0.5s";
    }
    if (window.innerWidth> 837){
    botonXeY[n].style.display="none";
    editFotoPerf[n].style.display="inline-block";
    contFile[n].style.width="0vw";
    contFile[n].style.height="198px";
    contFile[n].style.paddingLeft="0px";
    contFile[n].style.marginLeft="7vw";
    inpFile[n].style.width="0px";
    inpFile[n].style.height="40px";
    inpFile[n].style.transition="all 0.5s";

    }
}

function xEditFoto1(n){
    if (window.innerWidth< 837){
        editFotoPerf[n].style.display="inline-block";
        botonXeY[n].style.display="none";
        contFile[n].style.height="0px";
        contFile[n].style.width="0vw";
        contFile[n].style.paddingLeft="0vw";
        contFile[n].style.paddingTop="0px";
        contFile[n].style.marginLeft="35vw";

        inpFile[n].style.height="0px";
        inpFile[n].style.width="0px";
        inpFile[n].style.transition="all 0.5s";
    }
    if (window.innerWidth> 837){
    botonXeY[n].style.display="none";
    editFotoPerf[n].style.display="inline-block";
    contFile[n].style.width="0vw";
    contFile[n].style.height="198px";
    contFile[n].style.paddingLeft="0px";
    contFile[n].style.marginLeft="7vw";
    inpFile[n].style.width="0px";
    inpFile[n].style.height="40px";
    inpFile[n].style.transition="all 0.5s";

    }
}



function editFoto(n){

    if (window.innerWidth< 837){
        console.log("funciona")
        editFotoPerf[n].style.display="none";
        botonXeY[n].style.display="inline-block";
        contFile[n].style.height="284px";
        contFile[n].style.width="50vw";
        contFile[n].style.paddingLeft="7vw";
        contFile[n].style.paddingTop="260px";
        inpFile[n].style.height="40px";
        inpFile[n].style.width="37vw";
        inpFile[n].style.transition="all 1.5s";
    }
    if (window.innerWidth> 837){
        console.log("funciona vercion grande")
    editFotoPerf[n].style.display="none";
    botonXeY[n].style.display="inline-block";
    contFile[n].style.width="45vw";
    contFile[n].style.height="160px";
    contFile[n].style.paddingLeft="10vw";
    contFile[n].style.paddingTop="135px";
    inpFile[n].style.width="272px";
  

    }
    
    
}
function checkFoto(n){
    if (window.innerWidth< 837){
        editFotoPerf[n].style.display="inline-block";
        botonXeY[n].style.display="none";
        contFile[n].style.height="0px";
        contFile[n].style.width="0vw";
        contFile[n].style.paddingLeft="0vw";
        contFile[n].style.paddingTop="0px";
        inpFile[n].style.height="0px";
        inpFile[n].style.width="0px";
        inpFile[n].style.transition="all 0.5s";
    }
    if (window.innerWidth> 837){
    botonXeY[n].style.display="none";
    editFotoPerf[n].style.display="inline-block";
    contFile[n].style.width="0vw";
    contFile[n].style.height="160px";
    contFile[n].style.paddingLeft="0px";
    inpFile[n].style.width="0px";
    inpFile[n].style.height="40px";
    inpFile[n].style.transition="all 0.5s";

    }
}

function xEditFoto(n){
    if (window.innerWidth< 837){
        editFotoPerf[n].style.display="inline-block";
        botonXeY[n].style.display="none";
        contFile[n].style.height="0px";
        contFile[n].style.width="0vw";
        contFile[n].style.paddingLeft="0vw";
        contFile[n].style.paddingTop="0px";
        inpFile[n].style.height="0px";
        inpFile[n].style.width="0px";
        inpFile[n].style.transition="all 0.5s";
    }
    if (window.innerWidth> 837){
    botonXeY[n].style.display="none";
    editFotoPerf[n].style.display="inline-block";
    contFile[n].style.width="0vw";
    contFile[n].style.height="160px";
    contFile[n].style.paddingLeft="0px";
    inpFile[n].style.width="0px";
    inpFile[n].style.height="40px";
    inpFile[n].style.transition="all 0.5s";

    }
}