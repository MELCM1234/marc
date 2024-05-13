function calcularIMC() {
    var altura = document.getElementById('altura').value / 100; // Convertir a metros
    var peso = document.getElementById('peso').value;
    var imc = peso / (altura * altura);
    var resultado = "Su IMC es " + imc.toFixed(2);
    document.getElementById('resultadoIMC').innerHTML = resultado;
  }
  
  function calcularIMC7() {
    var altura = document.getElementById('altura').value / 100; // Convertir a metros
    var imc = altura * 100 / 7;
    var resultado = "Su IMC sería " + imc.toFixed(2) + " (según la fórmula de los 7 años)";
    document.getElementById('resultadoIMC').innerHTML = resultado;
  }
  
  function calcularEdad() {
    var fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    var resultado = "La edad de la mascota es " + edad + " años";
    document.getElementById('resultadoEdad').innerHTML = resultado;
  }
  
  function showIMCCalculator() {
    document.getElementById('imcCalculator').style.display = 'block';
    document.getElementById('ageCalculator').style.display = 'none';
  }
  
  function showAgeCalculator() {
    document.getElementById('imcCalculator').style.display = 'none';
    document.getElementById('ageCalculator').style.display = 'block';
  }
  