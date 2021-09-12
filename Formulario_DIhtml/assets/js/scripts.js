/* Bloqueio de caracteres especiais */
const smsInput = document.querySelector("#especiaisSMS");

smsInput.addEventListener("keypress", function(e) {
  
if(!checkChar(e)) {
  e.preventDefault();
}

});

function checkChar(e) {

  const char = String.fromCharCode(e.keyCode);
  const pattern = '[a-zA-Z0-9:/]';

  if(char.match(pattern)) {
    return true;
  }
}

/* Bloqueio de caracteres especiais */
const rdInput1 = document.querySelector("#especiaisRD");

rdInput1.addEventListener("keypress", function(e) {
  
if(!checkChar(e)) {
  e.preventDefault();
}

});

/* Bloqueio de caracteres especiais */
const rdInput2 = document.querySelector("#especiaisEntregue");

rdInput2.addEventListener("keypress", function(e) {
  
if(!checkChar(e)) {
  e.preventDefault();
}

});

function checkChar(e) {

  const char = String.fromCharCode(e.keyCode);
  const pattern = '[a-zA-Z0-9:/]';

  if(char.match(pattern)) {
    return true;
  }
}


const slugify = (str, separator) => {
      str = str.trim();
      str = str.toLowerCase();

      // remove accents, swap ñ for n, etc
      const from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
      const to = 'aaaaaaeeeeiiiioooouuuunc------';
      for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }
      return str
        .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes
        .replace(/^-+/, '') // trim - from start of text
        .replace(/-+$/, '') // trim - from end of text
        .replace(/-/g, separator);
    }

    const createName = (elem) => {
      document.getElementById("minuName").value = slugify(document.getElementById("title").value, "-");
    }