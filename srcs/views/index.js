let elementosPagina = {
  mediaData: document.querySelector("#media-data"),
  mediaTitle: document.querySelector("#media-title"),
  mediaContainer: document.querySelector("#media-container"),
  mediaExpl: document.querySelector("#linha-expl"),
  mediaCopyright: document.querySelector("#copyright"),
  errorBox: document.querySelector("#error-message"),
  pageFooter: document.querySelector("footer"),
};

function sobeTituloMedia() {
  elementosPagina.mediaTitle.textContent = apodData.apodTitle;
}

function sobeData() {
  elementosPagina.mediaData.textContent = apodData.apodDate;
}

function sobeImagem() {
  if (apodData.apodMediaType == "image") {
    let imgContainer = document.createElement("img");
    imgContainer.classList.add("media");
    elementosPagina.mediaContainer.appendChild(imgContainer);
    document.querySelector(".media").src = apodData.apodMedia;
    elementosPagina.mediaContainer.href = apodData.apodMedia;

  } else if (apodData.apodMediaType == "video") {
    let videoContainer = document.createElement("iframe");
    videoContainer.classList.add("media");
    elementosPagina.mediaContainer.appendChild(videoContainer);
    document.querySelector(".media").src = apodData.apodMedia;

  }
}

function sobeExpl() {
  elementosPagina.mediaExpl.textContent = apodData.apodExpl;
}

function sobeCopyright() {
  if (apodData.apodCopyright != undefined) {
    elementosPagina.mediaCopyright.textContent = `${apodData.apodMediaType.toUpperCase()}: ${apodData.apodCopyright}`;
  }
}