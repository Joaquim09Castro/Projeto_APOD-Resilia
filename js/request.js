let apodToJson;

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=ISIn2PcRcmIDY7CkSgMEzN5W0b8uxCa2c04sNh48");

xhr.send();

xhr.addEventListener("load" ,function() {
  
  apodToJson = JSON.parse(xhr.responseText);
  
  apodData = {
    apodTitle: apodToJson.title,
    apodMedia: apodToJson.url,
    apodMediaType: apodToJson.media_type,
    apodExpl: apodToJson.explanation,
    apodCopyright: apodToJson.copyright
  };

  videoContainer();
});

// NADA DA CERTO!!!!!!!!!!!!!!!!!!!