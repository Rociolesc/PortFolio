var button = document.getElementById("mybutton");
var button = document.getElementById("menu");

var click=0;
button.onclick = function(){
    if ( click == 0){
    menu.style.left="1px";
	click++;
	 }
    else {
        menu.style.left="-200px";
        click--;
     }
     
}