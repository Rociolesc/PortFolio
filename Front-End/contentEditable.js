
const editables=document.querySelectorAll('#contEditBann,#contEditPerfil,#contEditFormUtn,#contEditFormNac,#contEditFormArP,#contEditFormHResp,#contEditFormHResol,#contEditFormHProac,#contEditFormHIngles,#contEditFormProyecto');
const botonEdit=document.querySelectorAll('#LogoEdit,.edit__perfil,.edit__F,.edit__F,.edit__F,.edit__H,.edit__H,.edit__H,.edit__H,.edit__PEspl');
const botonesXeY=document.querySelectorAll('#editBanner2,#editPerfil2,#editFormUtn2,#editFormNac2,#editFormArP2,#editHResp2,#editHResol2,#editHProac2,#editHIngles2,#editProyecto2')
const fontYColor=document.querySelectorAll('#editColFontBanner,#editColFontPerfil,#editColFontFUtn,#editColFontFNac,#editColFontFArP,#editColFontHResp,#editColFontHResol,#editColFontHProac,#editColFontHIngles,#editColFontProyecto')

const contColor1=document.querySelectorAll('#banner__circulo,#colorFontPerfil1,#colorFontFUtn1,#colorFontFNac1,#colorFontFArP1,#colorFontHResp1,#colorFontHResol1,#colorFontHProac1,#colorFontHIngles1,#colorFontProyecto1')
const contColor2=document.querySelectorAll('#colorFontPerfil2,#colorFontFUtn2,#colorFontFNac2,#colorFontFArP2,#colorFontProyecto2')
const contColor3=document.querySelectorAll('#colorFontPerfil3')

const contFont1=document.querySelectorAll('#contEditBann,#colorFontPerfil1,#colorFontFUtn1,#colorFontFNac1,#colorFontFArP1,#colorFontHResp1,#colorFontHResol1,#colorFontHProac1,#colorFontHIngles1,#colorFontProyecto1')
const contFont2=document.querySelectorAll('#colorFontPerfil2,#colorFontFUtn2,#colorFontFNac2,#colorFontFArP2,#colorFontProyecto2')
const contFont3=document.querySelectorAll('#colorFontPerfil3')

const inpColor1=document.querySelectorAll('#editBanColor,#editPerColor,#editFUtnColor,#editFNacColor,#editFArPColor,#editHRespColor,#editHresolColor,#editHProacColor,#editHinglesColor,#editProyectoColor')
const inpColor2=document.querySelectorAll('#editPerColor2,#editFUtnColor2,#editFNacColor2,#editFArPColor2,#editProyectoColor2')
const inpColor3=document.querySelectorAll('#editPerColor3')

const inpFont1=document.querySelectorAll('#editBanFont,#editPerFont,#editFUtnFont,#editFNacFont,#editFArPFont,#editHRespFont,#editHresolFont,#editHProacFont,#editHInglesFont,#editProyectoFont')
const inpFont2=document.querySelectorAll('#editPerFont2,#editFUtnFont2,#editFNacFont2,#editFArPFont2,#editProyectoFont2')
const inpFont3=document.querySelectorAll('#editPerFont3')



let info1=[];
let info2=[];
let info3=[];
let colorInp1=[];
let colorInp2=[];
let colorInp3=[];
let fontInp1=null;
let fontInp2=null;
let fontInp3=null;

function editar(n,l,p){
    editables[n].contentEditable="true";
    editables[n].disignMode='on';
    botonEdit[n].style.display="none";
    botonesXeY[n].style.display="inline-block";
    fontYColor[n].style.display='inline-block';
    editables[n].style.outline="#5C9F9E 1px solid"
    info1[n]=contFont1[n].innerHTML;
    info2[l]=contFont2[l].innerHTML;
    info3[p]=contFont3[p].innerHTML;
    colorInp1[n]=inpColor1[n].value;
    colorInp2[l]=inpColor2[l].value;
    colorInp3[p]=inpColor3[p].value;
};

function check(n,l,p){
    editables[n].contentEditable='false';
    editables[n].disignMode='off';
    botonEdit[n].style.display="inline-block";
    botonesXeY[n].style.display='none';
    editables[n].style.outline="none"
    fontYColor[n].style.display='none';

    colorInp1=inpColor1[n].value;
    contColor1[n].style.color=colorInp1;
    contFont1[n].style.fontSize=inpFont1[n].value + "px";
    
    contColor2[l].style.color=inpColor2[l].value ;
    contFont2[l].style.fontSize=inpFont2[l].value + "px";
  
    contColor3[p].style.color=inpColor3[p].value;
    contFont3[p].style.fontSize=inpFont3[p].value + "px";
   
    

}


function xEdit(n,l,p){
  
   
    editables[n].contentEditable='false';
    editables[n].disignMode='off';
    botonEdit[n].style.display="inline-block";
    botonesXeY[n].style.display='none';
    fontYColor[n].style.display='none';
    editables[n].style.outline="none"; 
    contFont1[n].innerHTML=info1[n];
    contFont2[l].innerHTML=info2[l];
    contFont3[p].innerHTML=info3[p];
}

function editar2(n){
    editables[n].contentEditable="true";
    editables[n].disignMode='on';
    botonEdit[n].style.display="none";
    botonesXeY[n].style.display="inline-block";
    fontYColor[n].style.display='inline-block';
    editables[n].style.outline="#5C9F9E 1px solid"
    info1[n]=contFont1[n].innerHTML;
    

    
}
function check2(n){
    editables[n].contentEditable='false';
    editables[n].disignMode='off';
    botonEdit[n].style.display="inline-block";
    botonesXeY[n].style.display='none';
    editables[n].style.outline="none"
    fontYColor[n].style.display='none';
   
    colorInp1=inpColor1[n].value;
    contColor1[n].style.color=colorInp1;
    contFont1[n].style.fontSize=inpFont1[n].value + "px";
    
  
    
   
    

}


function xEdit2(n){
  
   
    editables[n].contentEditable='false';
    editables[n].disignMode='off';
    botonEdit[n].style.display="inline-block";
    botonesXeY[n].style.display='none';
    fontYColor[n].style.display='none';
    editables[n].style.outline="none"; 
    contFont1[n].innerHTML=info1[n];
}


function editar3(n,l){
    editables[n].contentEditable="true";
    editables[n].disignMode='on';
    botonEdit[n].style.display="none";
    botonesXeY[n].style.display="inline-block";
    fontYColor[n].style.display='inline-block';
    editables[n].style.outline="#5C9F9E 1px solid"
    info1[n]=contFont1[n].innerHTML;
    info2[l]=contFont2[l].innerHTML;
    
    
    
}
function check3(n,l){
    editables[n].contentEditable='false';
    editables[n].disignMode='off';
    botonEdit[n].style.display="inline-block";
    botonesXeY[n].style.display='none';
    editables[n].style.outline="none"
    fontYColor[n].style.display='none';

    colorInp1=inpColor1[n].value;
    contColor1[n].style.color=colorInp1;
    contFont1[n].style.fontSize=inpFont1[n].value + "px";
    
    contColor2[l].style.color=inpColor2[l].value ;
    contFont2[l].style.fontSize=inpFont2[l].value + "px";
  
   
    

}


function xEdit3(n,l){
  
   
    editables[n].contentEditable='false';
    editables[n].disignMode='off';
    botonEdit[n].style.display="inline-block";
    botonesXeY[n].style.display='none';
    fontYColor[n].style.display='none';
    editables[n].style.outline="none"; 
    contFont1[n].innerHTML=info1[n];
    contFont2[l].innerHTML=info2[l];
};
