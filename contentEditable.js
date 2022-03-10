const editBann= document.getElementById('contEditBann');
const botXeY= document.getElementById('editBanner2');
const  infoOriginal=document.getElementById('contEditBann').innerHTML;
let info=document.getElementById('contEditBann').innerHTML;

const colorYFont=document.getElementById('banner__circulo');
let colorOrg= colorYFont.style.color='rgba(16, 255, 226, 1)';
const inpColor=document.getElementById('editBanColor');
const editColFont=document.getElementById('editColFont');
let colorImp=inpColor.value;

let fontImp= inpFont.value ;
let fontOrg=  editBann.style.fontSize='70px';
const inpFont=document.getElementById('editBanFont');

function editar(){
    editBann.contentEditable='true';
    editBann.disignMode='off';
    botXeY.style.display='inline-block';
    console.log(info);
    editColFont.style.display='inline-block';
   
}
function check(){

    editBann.contentEditable='false';
    editBann.disignMode='off';
    botXeY.style.display='none';
    info=editBann.innerHTML;
    console.log('funk');

    editColFont.style.display='none';
    colorImp=inpColor.value;
    colorYFont.style.color=colorImp;

    editBann.style.fontSize=inpFont.value + "px";
    fontImp= inpFont.value;
}
function xEdit(){
    editBann.contentEditable='false'
    editBann.innerHTML=info
    botXeY.style.display='none';
    editColFont.style.display='none';
    colorYFont.style.color=colorImp;
}
function recOrig(){
    editBann.innerHTML=infoOriginal;
    colorYFont.style.color=colorOrg;
    editBann.style.fontSize=fontOrg;
}



