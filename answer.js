// When the user clicks on the button,toggle between hiding and showing the dropdown content//
 var acc = document.getElementsByClassName("question");

 for (let i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
     this.classList.toggle("active");
     for (j = 0; j < acc.length; j++) {
       if (j !== i)
        acc[j].nextElementSibling.style.display = "none";
     }
     var answer = this.nextElementSibling;
     if (answer.style.display === "block") {
       answer.style.display = "none";
     } else {
       answer.style.display = "block";
     }
   });
 }
