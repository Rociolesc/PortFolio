/*const editBann= document.getElementById('contEditBann');
const botXeY= document.getElementById('editBanner2');
const  infoOriginal=document.getElementById('contEditBann').innerHTML;
let info=document.getElementById('contEditBann').innerHTML;

const colorYFont=document.getElementById('banner__circulo');
let colorOrg= colorYFont.style.color='rgba(16, 255, 226, 1)';
const inpColor=document.getElementById('editBanColor');
const editColFont=document.getElementById('editColFont');
let colorImp=inpColor.value;

const inpFont=document.getElementById('editBanFont');
let fontImp= inpFont.value;
let fontOrg=  editBann.style.fontSize='70px';*/
const editables= document.querySelectorAll('#contEditBann, #contEditPerfil,#contEditFormUtn,#contEditFormNac,#contEditFormArP')
const botonesXeY=document.querySelectorAll('#editBanner2, #editPerfil2,#editFormUtn,#editFormNac,#editFormArP')
const fontYColor=document.querySelectorAll('#editColFontBanner,#editColFontPerfil,#editColFontFUtn,#editColFontFNac,#editColFontFArP')
const contColor1=document.querySelectorAll('#banner__circulo')
const contFont1=document.querySelectorAll('#colorFontPerfil1,#colorFontPerfil2,#colorFontPerfil3')
const inpColor1=document.querySelectorAll('editBanColor')
let info=null;
let colorInp1=inpColor1.value;

const inpColor=document.getElementById('editBanColor');
function editar(n){
    editables[n].contentEditable='true';
    editables[n].disignMode='on';
    botonesXeY[n].style.display='inline-block';
    fontYColor[n].style.display='inline-block';
    editables[n].style.outline="#5C9F9E 1px solid"
   
}
function check(n){

    editables[n].contentEditable='false';
    editables[n].disignMode='off';
    botonesXeY[n].style.display='none';
    info=editables[n].innerHTML;
    editables[n].style.outline="none"
    fontYColor[n].style.display='none';
    colorInp1=inpColor1.value;
    contColor1[n].style.color=colorInp1;
    
   /* editables[n].style.fontSize=inpFont.value + "px";
    fontImp= inpFont.value;*/
}
/*
function xEdit(n){
    editables[n].contentEditable='false'
    editables[n].innerHTML=info
    botonesXeY[n].style.display='none';
    fontYColor[n].style.display='none';
    colorYFont.style.color=colorImp;
    editables[n].style.outline="none"
}
function recOrig(n){
    editables[n].innerHTML=infoOriginal;
    colorYFont.style.color=colorOrg;
    editables[n].style.fontSize=fontOrg;
}
*/


