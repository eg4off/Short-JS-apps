function displayImages(imagesList, images) {
    imagesList.innerHTML = images.map(function(image, index) {
        return `
        <li onmouseover="showBtn()" onmouseout="hideBtn()">
          <figure>
            <img src=${image.url} alt="Image ${index + 1}">

            <figcaption onmouseover = "buttonOver()" onmouseout = "buttonOut()">
              <p class = "name"  >${image.name}</p>
              <p>${(image.size / 1000).toFixed(1)} kB</p>
            </figcaption>
          </figure>  
          <button type="button" class="btn btnRemShow" onclick="openModal()" data-index="${index}">Remove</button>
        </li>
        
      `
    }).join('');
};

function buttonOver(){
  document.querySelector('.icon').style.display = "block"
};

function buttonOut(){
  document.querySelector('.icon').style.display = "none"
};

document.querySelector(".name").addEventListener("click", editName());

function editName(){
  document.querySelector(".name").setAttribute('contenteditable', '');
}