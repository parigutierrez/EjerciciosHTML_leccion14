function aFahrenheit(){
  var celsius = parseInt(document.getElementById('celsius').value);
  var resultadoCelsius = (celsius * 1.8) + 32;
  document.getElementById('resultadoCelsius').value = resultadoCelsius;

}

function aCelsius(){
  var fahrenheit= parseInt(document.getElementById('fahrenheit').value);
  var resultadoFahrenheit= (fahrenheit-32)*(1.8);
  document.getElementById('resultadoFahrenheit').value = resultadoFahrenheit;
}
