const editBann= document.getElementById('contEditBann');
const botXeY= document.getElementById('editBanner2');
const checkBanner= document.getElementById('checkBanner');
const  infoOriginal=document.getElementById('contEditBann').innerHTML;
let info=document.getElementById('contEditBann').innerHTML;
function editar(){
    editBann.contentEditable='true';
    editBann.disignMode='off';
    botXeY.style.display='inline-block';
    console.log(info);
}
function check(){

    editBann.contentEditable='false';
    editBann.disignMode='off';
    botXeY.style.display='none';
    info=editBann.innerHTML;
    console.log('funk');
    
}
function xEdit(){
    editBann.contentEditable='false'
    editBann.innerHTML=info
    botXeY.style.display='none';
}
function recOrig(){
    editBann.innerHTML=infoOriginal;
}

