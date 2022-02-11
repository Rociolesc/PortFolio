let posicion= window.pageYOffset;
let banner=document.getElementById('n')

window.addEventListener('scroll', function(){
	let nuevaPosicion = window.pageYOffset;
	if (posicion >= nuevaPosicion) {
		banner.style.top='0px';
		banner.style.transition='2s';
		}
	else{
				banner.style.top='-600px';
				banner.style.transition='2s';
		}
	});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}