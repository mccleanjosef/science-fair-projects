$('document').ready(function(){

  console.log("script is linked");

  // start of image-slider
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const images = document.querySelector('.carousel').children;
  const totalImages = images.length;
  let index = 0;

  prev.addEventListener('click', () => {
    nextImage('next');
  })

  next.addEventListener('click', () => {
    nextImage('prev');
  })

  function nextImage(direction) {
    if(direction == 'next') {
      index++;
      if(index == totalImages) {
        index = 0;
      }
    } else {
      if(index == 0) {
        index = totalImages - 1;
      } else {
        index--;
      }
    }

    for(let i = 0; i < images.length; i++) {
      images[i].classList.remove('main');
    }
    images[index].classList.add('main');
  }
  // end of image-slider


  // start of student-cards
  $.ajax({
    type: "GET",
    url: "./json/students.json",
    success: function(data){
      console.log(data.studentNames);

      function studentLoop(){
        const cardImage = document.getElementsByClassName("c-student-cards__card");

        let i = 0;
        for(i = 0; i < data.studentNames.length; i++){
          generateCard(i);

          cardImage[i].style.backgroundImage = "url(" + data.studentImages[i] + ")";

        }
        // modal();
          
      }
      studentLoop();

      function generateCard(x){
        $('#cardCtn').append(
            `
            <div class="card c-student-cards__card">
              <div class="c-student-cards__darken"></div>
              <h2 class="c-student-cards__name">${data.studentNames[x]}</h2>
            </div>
            `
        );
      }


    }
  });
  // end of student-cards


});