// Evento para colocar el atributo src de la imagen seleccionada con el click dentro de imgModal
const galeria = document.querySelector(".galeria");

galeria.addEventListener("click", (event) => {
  const imgDiv = event.target.attributes[0].nodeValue;
  const imgModal = document.querySelector("#imagen-modal");

  if (imgDiv == "modal fade") {
    imgModal.setAttribute("src", '');
  } else {
    imgModal.setAttribute("src", imgDiv);
  }
});

