$("document").ready(function(){
    $("h1").css("color", "red");
});


function Quiz(){
    var correct=0;
    for(var i = 1; i<=5;i++){
      var radios= document.getElementsByID('id');
      for (var z=0; z<radios.length; z++){
        var radio =radios[z];
        if(radio.value=== "correct" && radio.checked){
  
        }
      }
    }
        alert("correct Responses: "+answersCorrect);
  }