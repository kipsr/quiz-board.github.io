$("document").ready(function(){
    $("h1").css("color", "red");
    
});
$(document).ready(function() {
  $("#quiz").submit(function(event){
    event.preventDefault();
    var q1 = parseInt($("[name=answer1]:checked").val());
    var q2 = parseInt($("[name=answer2]:checked").val());
    var q3 = parseInt($("[name=answer3]:checked").val());
    var q4 = parseInt($("[name=answer4]:checked").val());
    var q5 = parseInt($("[name=answer5]:checked").val());
    
 
    var score = parseInt(q1+q2+q3+q4+q5+q6+q7+q8+q9+q10+q11+q12);
    if (score>20) {
      $("#input").text("Your Result is: " + score + " Superb");
    } else {
      $("#input").text("Your score is: " + score + " pull up your socks!");
    }
  });
 });

