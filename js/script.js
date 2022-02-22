$('document').ready(function(){

  console.log("script is linked");

  // start of image-slider
  // const prev = document.querySelector('.prev');
  // const next = document.querySelector('.next');
  // const images = document.querySelector('.carousel').children;
  // const totalImages = images.length;
  // let index = 0;

  // prev.addEventListener('click', () => {
  //   nextImage('next');
  // })

  // next.addEventListener('click', () => {
  //   nextImage('prev');
  // })

  // function nextImage(direction) {
  //   if(direction == 'next') {
  //     index++;
  //     if(index == totalImages) {
  //       index = 0;
  //     }
  //   } else {
  //     if(index == 0) {
  //       index = totalImages - 1;
  //     } else {
  //       index--;
  //     }
  //   }

  //   for(let i = 0; i < images.length; i++) {
  //     images[i].classList.remove('main');
  //   }
  //   images[index].classList.add('main');
  // }
  // end of image-slider


  // start of student-cards
  $.ajax({
    type: "GET",
    url: "./json/students.json",
    success: function(data){

      function studentLoop(){
        const cardImage = document.getElementsByClassName("c-student-cards__card");

        let i = 0;
        for(i = 0; i < data.length; i++){
          // console.log(data.length);

          generateCard(i);

          cardImage[i].style.backgroundImage = "url(" + data[i].studentImage + ")";

        }
        modal();
          
      }
      studentLoop();

      function generateCard(x){
        $('#cardCtn').append(
            `
            <div id="${data[x].studentId}" class="card c-student-cards__card" data-toggle="modal" data-target="#exampleModal">
              <div class="c-student-cards__darken"></div>
              <h2 class="c-student-cards__name">${data[x].studentName}</h2>
            </div>
            `
        );
      }

      function modal(){
        $(".c-student-cards__card").click(function(){
          
          let i = 0;
          for(i = 0; i < data.length; i++){

            if(parseInt(this.id) === data[i].studentId){
              $("#modalHeader").empty().append(
                `
                <h5 class="modal-title">${data[i].studentName}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                `
              );
            }
            
          }
        });
      }


    }
  });
  // end of student-cards


});