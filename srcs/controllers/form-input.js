let input = {
  field: document.querySelector("#date-input"),
  button: document.querySelector("#date-submit"),
};

input.button.onclick = function () {
  let inputDateValue = `&date=${input.field.value}`;

  xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=ISIn2PcRcmIDY7CkSgMEzN5W0b8uxCa2c04sNh48" + inputDateValue);
  xhr.send();

  xhr.onload = function () {

    if (xhr.status == 200) {
      elementosPagina.mediaContainer.innerHTML = "";
      elementosPagina.errorBox.textContent = "";

      apodToJson = JSON.parse(xhr.responseText);
      let dateReoriented = [apodToJson.date.split("-")[2], apodToJson.date.split("-")[1], apodToJson.date.split("-")[0]];

      apodData = {
        apodTitle: apodToJson.title,
        apodDate: dateReoriented.join("/"),
        apodMedia: apodToJson.url,
        apodMediaType: apodToJson.media_type,
        apodExpl: apodToJson.explanation,
        apodCopyright: apodToJson.copyright
      };

      sobeTituloMedia();
      sobeData();
      sobeImagem();
      sobeExpl();
      sobeCopyright();
    } else if (xhr.status == 400) {
      elementosPagina.errorBox.textContent = "Data Inválida";
    }
  };

};