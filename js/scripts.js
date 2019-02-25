$("document").ready(function(){
    $("h1").css("color", "red");
    
});


function Quiz(){
    var answercorrect=0;
    
    for(var i = 1; i<=5;i++){
      var radios= document.getElementsByName('name');
      for (var z=0; z<radios.length; z++){
        var radio =radios[z];
        if(radio.value=== "correct" && radio.checked){
  
        }
      }
    }
        alert("correct Responses: "+answersCorrect);
  }