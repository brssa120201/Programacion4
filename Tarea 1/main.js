/*FUNCIONAR MENU*/
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
	enlaces.classList.toggle('activado');
	barras.forEach(child => {child.classList.toggle('animado')});
	ham.classList.toggle('girar');
});

/*VALIDACIÓN FORMULARIO*/
function alerta(){
	alert("Se ha agendado una nueva educación");
}