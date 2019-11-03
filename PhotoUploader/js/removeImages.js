  // var removeButton = document.querySelector('.btnRmv');
  // removeButton.addEventListener('click', openModal);

function openModal(){
  var modal = document.querySelector('.modal');
  modal.style.display = "block";
  //2strings below
  var index = event.target.dataset.index;
  localStorage.setItem('index', JSON.stringify(index));
}

function cancelDelete(){
  var modal = document.querySelector('.modal');
  modal.style.display = "none"; 
}

function removeImage(event) {
    var index = event.target.dataset.index;
    
    if(index) {
      images.splice(index, 1);
      displayImages(imagesList, images);
      localStorage.setItem('images', JSON.stringify(images));
    }
  }