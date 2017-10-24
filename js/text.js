
function welcomeText(){
	var string = "Bienvenido a Constructora Camacho y Loria";
	var str = string.split("");
	var el = document.getElementById('textoBienvenida');

	(function animate() {
	str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);  console.log("animando");
	var running = setTimeout(animate, 50);
	})();

}
