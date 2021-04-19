const form = document.getElementsByTagName('Formu');

function registerValidate() {
	
	form.classList.remove('is-invalid');	
	//var inputEmail = document.forms["myForm"]["inputEmail"];		
	var inputPassword = document.forms["Formu"]["inputPassword"];
	var inputPassword2 = document.forms["Formu"]["inputPassword2"];	
	//var gridCheck = document.forms["Formu"]["gridCheck"];

  
}
//form.addEventListener('blur', (event) => {
	//console.log(event);
	//if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
//}, true);

const searchFocus = document.getElementById('search-focus');
const keys = [
  { keyCode: 'AltLeft', isTriggered: false },
  { keyCode: 'ControlLeft', isTriggered: false },
];

window.addEventListener('keydown', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = true;
    }
  });

  const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

  if (shortcutTriggered) {
    searchFocus.focus();
  }
});

window.addEventListener('keyup', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = false;
    }
  });
});

// Pide introducir el número sobre el que generar la tabla

function creaTabla() {
	 var t= parseInt(document.getElementById("inputPassword2").value);
	  var input= parseInt(document.getElementById("inputPassword").value);

	    if (isNaN(t) || isNaN(input)  ){
		inputPassword2.classList.add("is-invalid");
		inputPassword.classList.add("is-invalid");
		document.getElementById("text1").textContent = " Cal introduir un nombre!";
		document.getElementById("text2").textContent = "Cal introduir un nombre";
		
	  }
	  else if (t>10 || input>10){
		inputPassword2.classList.add("is-invalid");
		inputPassword.classList.add("is-invalid");
		document.getElementById("text1").textContent = " Nombres inferiors a 10";
		document.getElementById("text2").textContent = "Nombres inferiors a 10";
		

	  }else{
		inputPassword2.classList.add("is-valid");
		inputPassword.classList.add("is-valid");
		document.getElementById("text2").textContent = " Correcte !";
		document.getElementById("text1").textContent = " Correcte !";

	  }


 //capçalera de la taula
var resultado = "<TR><TH>Multiplicació</TH>&nbsp;&nbsp;<TH>Resultat</TH></TR><br>";
for (i=1;i<=t;i++) {
	resultado += "<tr><td> &nbsp;" + input + "&nbsp; x &nbsp;" + i + "&nbsp;&nbsp;&nbsp;&nbsp; </td><td> = &nbsp;&nbsp; &nbsp;&nbsp;" + (input * i) + "&nbsp; </td></tr> &nbsp;<br>";
}
document.getElementById('tabla').innerHTML = resultado;

};

function neteja(){
	
	document.getElementById("text1").textContent = " ";
	document.getElementById("text2").textContent = " ";
	document.getElementById("text2").textContent = " Carrega de nou la pagina";
		document.getElementById("text1").textContent = " Torna a introduir les dades";
		document.getElementById('tabla').innerHTML = "";
	
	inputPassword.value="";
	inputPassword2.value="";
		
};

