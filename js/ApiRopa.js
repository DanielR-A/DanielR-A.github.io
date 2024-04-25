var datos;
var API_URL =
  "https://raw.githubusercontent.com/DanielR-A/Proyecto/main/JsonConsumo6.json"; //URL del API

function callService() {
  $.ajax({
    type: "GET", //el metodo que vamos a llamar
    url: API_URL,
    dataType: "json",
    success: onSuccess, //la funcion que se debe ejecutar
    error: onError,
  });
}

function onSuccess(data) {
  //por defecto recibe un objeto data con la informacion

  datos = data; //se vuelven a asignar los valores
  cargarImagenes();
}

function onError(jqXHR, textStatus, errorThrown) {
  alert("MENSAJE DE ERROR: " + errorThrown);
}

function cargarImagenes() {
  let imagenesContenedor = document.getElementById("contenedor-items");
  imagenesContenedor.innerHTML = "";

  const ropa = datos.Ropa;

  let seccion = "";

  for (let i = 0; i < 5; i++) {
    seccion += `
        <div class="item">
            <span class="titulo-item"> ${ropa[i].clasificacion}</span>
            <img  src="${ropa[i].imagen} alt="" class="img-item">
            <span class="precio-item">
            ${ropa[i].precio}</span>
            <button class="boton-item">Agregar al Carrito</button>
        </div>
          `;
  }

  //se debe de agregar al contenedor
  imagenesContenedor.innerHTML = seccion;
}
