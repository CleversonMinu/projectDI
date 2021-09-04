$('textarea').on("input", function(){
  var maxlength = $(this).attr("maxlength");
  var currentLength = $(this).val().length;

  if( currentLength >= maxlength ){
      console.log("Você digitou o máximo de caracteres permitido.");
  }else{
      console.log(maxlength - currentLength + " chars left");
  }
});