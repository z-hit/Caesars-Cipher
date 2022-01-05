function rot13(str) {

var decoded = '';

for (var i = 0; i < str.length; i++) {
  var code = str.charCodeAt(i);

  if (code >= 78 && code <= 90) {
    decoded = decoded + String.fromCharCode(code - 13);
  }
  if (code >= 65 && code <= 77) {
    decoded = decoded + String.fromCharCode(code + 13);
  }
  if (/\W/.test(str[i])) {
    decoded = decoded + str[i];
  }
}

  return decoded;
}



rot13("SERR CVMMN!");
