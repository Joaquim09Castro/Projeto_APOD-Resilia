let elementosPagina = {
  linhaData: document.querySelector("#linha-data"),
  mediaContainer: document.querySelector("#media-container"),
  
};

let videoContainer = function() {
  if (this.apodData.apodMediaType == "image") {

    let imgContainer = document.createElement("img");

    imgContainer.classList.add("media");

    elementosPagina.mediaContainer.appendChild(imgContainer);

    document.querySelector(".media").src = this.apodData.apodMedia;

  } else if (this.apodData.apodMediaType == "video") {

    let videoContainer = document.createElement("video");

    videoContainer.classList.add("media");

    elementosPagina.mediaContainer.appendChild(videoContainer);

    document.querySelector(".media").src = this.apodData.apodMedia;
    
  }
};