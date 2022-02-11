let posicion= window.pageYOffset;
let banner=document.getElementById('cuerpo')

window.addEventListener('scroll', function(){
	let nuevaPosicion = window.pageYOffset;
	if (posicion >= nuevaPosicion) {
		banner.style.top='0px';
		banner.style.transition='1.5s';
		}
	else{
			
			banner.style.top='-450px';
			banner.style.transition='1.5s';
		}
	});

window.onbeforeunload = function () {
  window.scrollTo(169, 409);
}