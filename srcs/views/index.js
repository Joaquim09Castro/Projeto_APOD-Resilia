let elementosPagina = {
  mediaData: document.querySelector("#media-data"),
  mediaTitle: document.querySelector("#media-title"),
  mediaContainer: document.querySelector("#media-container"),
  mediaExpl: document.querySelector("#linha-expl"),
  mediaCopyright: document.querySelector("#copyrigth")
};

function sobeTituloMedia() {
  elementosPagina.mediaTitle.textContent = apodData.apodTitle;
}

function sobeData() {
  elementosPagina.mediaData.textContent = apodData.apodDate;
}

function sobeImagem() {
  elementosPagina.mediaContainer.href = apodData.apodMedia;

  if (apodData.apodMediaType == "image") {

    let imgContainer = document.createElement("img");

    imgContainer.classList.add("media");

    elementosPagina.mediaContainer.appendChild(imgContainer);

    document.querySelector(".media").src = apodData.apodMedia;

  } else if (apodData.apodMediaType == "video") {

    let videoContainer = document.createElement("video");

    videoContainer.classList.add("media");

    elementosPagina.mediaContainer.appendChild(videoContainer);

    document.querySelector(".media").src = apodData.apodMedia;

  }
}

function sobeExpl() {
  if (apodData.apodMedia == "https://api.nasa.gov/planetary/apod/static/default_apod_image.jpg") {
    elementosPagina.mediaExpl.textContent = "This is a fallback image used in the case where there is a missing/corrupted asset on apod.nasa.gov.Image source: https://en.wikipedia.org/wiki/File:Black_Hole_in_the_universe.jpg";
  } else {
    elementosPagina.mediaExpl.textContent = apodData.apodExpl;
  }
}

function sobeCopyright() {
  if (apodData.apodCopyright != undefined) {
    elementosPagina.mediaCopyright.textContent = apodData.apodCopyright;
  }
}