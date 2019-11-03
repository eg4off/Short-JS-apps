  function openModal() {
      var modal = document.querySelector('.modal');
      modal.style.display = "flex";
      document.body.style.backgroundColor = "grey"
      var index = event.target.dataset.index;

      localStorage.setItem('index', JSON.stringify(index));
  }

  function cancelDelete() {
      var modal = document.querySelector('.modal');
      modal.style.display = "none";
      document.body.style.backgroundColor = "white"
  }

  function removeImage() {

      var index = JSON.parse(localStorage.getItem('index'));

      if (index) {
          images.splice(index, 1);

          displayImages(imagesList, images);
          localStorage.setItem('images', JSON.stringify(images));

      }
      cancelDelete();
      localStorage.removeItem('index');
  }

 