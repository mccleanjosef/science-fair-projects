$("document").ready(function(){console.log("script is linked"),$.ajax({type:"GET",url:"./json/students.json",success:function(e){!function(){const n=document.getElementsByClassName("c-student-cards__card");let a=0;for(a=0;a<e.length;a++)t=a,$("#cardCtn").append(`\n            <div id="${e[t].studentId}" class="card c-student-cards__card" data-toggle="modal" data-target="#exampleModal">\n              <div class="c-student-cards__darken"></div>\n              <h2 class="c-student-cards__name">${e[t].studentName}</h2>\n            </div>\n            `),n[a].style.backgroundImage="url("+e[a].studentImage+")";var t;$(".c-student-cards__card").click(function(){let n=0;for(n=0;n<e.length;n++)parseInt(this.id)===e[n].studentId&&($("#modalHeader").empty().append(`\n                <h5 class="modal-title">${e[n].studentName}</h5>\n                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n                  <span aria-hidden="true">&times;</span>\n                </button>\n                `),$(".info-left").empty().append(`\n                <h3 class="card-body-heading">${e[n].studentName}</h3>\n                <p class="card-body-info">${e[n].studentInfo}</p>\n                `),$(".project-one").empty().append(`\n                <h3 class="card-body-heading">${e[n].projectOneName}</h3>\n                <p class="card-body-info">${e[n].projectOneInfo}</p>\n                `),$(".project-two").empty().append(`\n                <h3 class="card-body-heading">${e[n].projectTwoName}</h3>\n                <p class="card-body-info">${e[n].projectTwoInfo}</p>\n                `),$(".project-three").empty().append(`\n                <h3 class="card-body-heading">${e[n].projectThreeName}</h3>\n                <p class="card-body-info">${e[n].projectThreeInfo}</p>\n                `))})}()}})});