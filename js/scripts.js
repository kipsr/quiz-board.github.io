$("document").ready(function(){
    $("h1").css("color", "red");
    
});

$(document).ready(function() {
  $("#test").submit(function(event){
    event.preventDefault();
    var question1 = parseInt($("[name=Q1]:checked").val());
    var question2 = parseInt($("[name=Q2]:checked").val());    
    var question3= parseInt($("[name=Q3]:checked").val());
    var question4= parseInt($("[name=Q4]:checked").val());
    var question5= parseInt($("[name=Q5]:checked").val());
    
 
    var score = parseInt(Q1+Q2+Q3+Q4+Q5);
    if (score>25) {
      $("#input").text("Your Result is: " + score + " Superb");
    } else {
      $("#input").text("Your score is: " + score + " pull up your socks!");
    }
  });
 });

