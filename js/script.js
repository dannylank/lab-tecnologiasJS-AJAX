function palindromo(pal) {
    var del = /[^A-Za-z0-9]/g; //remover caracteres
    var string = pal.toLowerCase().replace(del, ''); //pasar a minúscula
    var alreves = string.split('').reverse().join(''); //usar encadenamiento
    if (alreves === string) { // comprobar si es un palindromo
      alert(pal + ", es un Palíndromo: `" + alreves + "`") //devolver resultado comprobación
    } else {
      alert(pal + ", NO es un Palíndromo: `" + alreves + "`")
    };
  }
  
  function checkMayorMinor(a, b) {
    if (a > b) {
      alert(a + " es mayor que " + b);
    } else if (a < b) {
      alert(a + " es menor que " + b);
    } else {
      alert(a + " = " + b);
    }
  }
  
  function xtractvocals(str) {
    var del = /[^A-Za-z0-9]/g;
    var string = str.toLowerCase().replace(del, '');
    let vocals = string.replace(/[^a,e,i,o,u,A,E,I,O,U]/g, '');
    console.log(vocals);
  }
  
  function countvocals(string) {
    var aCount = 0;
    var eCount = 0;
    var iCount = 0;
    var oCount = 0;
    var uCount = 0;
    
    for (var i = 0; i < string.length; i++) {
  
      switch (string.charAt(i)) {
        case "a":
          aCount++;
          break;
        case "e":
          eCount++;
          break;
        case "i":
          iCount++;
          break;
        case "o":
          oCount++;
          break;
        case "u":
          uCount++;
          break;
        default:
          break;
      }
    }
  
    alert("Vocales:\n" + "A: " + aCount + "\n E: " + eCount + "\n I: " + iCount + "\n O: " + oCount + "\n U: " + uCount);
  
  }
  
  