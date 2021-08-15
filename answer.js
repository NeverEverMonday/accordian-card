// When the user clicks on the button,toggle between hiding and showing the dropdown content//
 var acc = document.getElementsByClassName("question");
 var i;

 for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var answer = this.nextElementSibling;
     if (answer.style.display === "block") {
       answer.style.display = "none";
     } else {
       answer.style.display = "block";
     }
   });
 }
