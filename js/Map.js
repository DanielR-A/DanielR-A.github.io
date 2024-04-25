window.onload = posicionamiento();

//consultado de: https://github.com/KendallCC/ExposicionGrupoDos.git
//Posicionamiento continuo
function posicionamiento() {
  var map = new google.maps.Map(document.getElementById("mapa"), {
    zoom: 15,
    center: new google.maps.LatLng(9.992369779267282, -83.02820130388393), // Nueva York
  });

  // Crear un marcador en la posición inicial
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(9.992369779267282, -83.02820130388393),
    map: map,
  });
}
