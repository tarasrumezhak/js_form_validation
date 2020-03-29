// 1. Submit the form, only if it is valid
//    email is between 5 and 50 chars long
//    email format is correct
//    name has 0 or 2 whitespaces benween words
//    name length is 1 or more chars
//    phone length is 12 or more digits
//    phone format is correct. Valid formats: "+38032 000 000 00", "+380(32) 000 000 00", "+380(32)-000-000-00", "0380(32) 000 000 00", + any combitaion
//    message is 10 or more characters.
//    message must not iclude bad language: ugly, dumm, stupid, pig, ignorant
// 2. Validate each input on the fly using onchange event
// 3. Define re-usable validators: length, format,

const badLanguage = ['ugly', 'dumm', 'stupid', 'pig', 'ignorant'];


function validateMe(event) {
  event.preventDefault();

  const nameNode = event.target.elements['name'];
  const emailNode = event.target.elements['email'];
  const phoneNode = event.target.elements['phone'];
  const messageNode = event.target.elements['message'];

  validateGeneral(nameNode, checkLength(nameNode, 1), nameFormat(nameNode));
  validateGeneral(emailNode, checkLength(emailNode, 5, 50), checkFormat(emailNode,
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email format is incorrect'));
  validateGeneral(phoneNode, checkLength(phoneNode, 12), checkFormat(phoneNode,
      /^[0+]\d{3}(\(\d{2}\)|\d{2})([ -]?\d{3}){2}[ -]?\d{2}$/,
      'Phone format is incorrect.'));
  validateGeneral(messageNode, checkLength(messageNode, 10), messageFormat(messageNode));

  return false;
}

