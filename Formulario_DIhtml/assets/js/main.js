/* Contador de caracteres */
function countChars(obj){
  document.getElementById("charNum").innerHTML = obj.value.length+' caracteres';
}

/* Gerador de ID */
function generateUniqueString() {
  var ts = String(new Date().getTime()),
      i = 0,
      out = '';

  for (i = 0; i < ts.length; i += 2) {
      out += Number(ts.substr(i, 2)).toString(36);
  }

  return ('' + out);
}

document.getElementById("unique").innerHTML = generateUniqueString();
