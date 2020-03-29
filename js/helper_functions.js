function checkLength(someNode, from=0, to=10000) {
    if (someNode.value.length < from || someNode.value.length > to) {
        if (to !== 10000){
            return String(someNode.id).charAt(0).toUpperCase() + String(someNode.id).slice(1) + ' length must be in the range ' + from + ' and ' + to;
        }
        else {
            return String(someNode.id).charAt(0).toUpperCase() + String(someNode.id).slice(1) + ' length must be bigger than ' + from;
        }
    }
}

function checkFormat(someNode, constraint, errorText){
    if (!someNode.value.match(constraint)) {
        return errorText;
    }
}

function nameFormat(nameNode) {
    if (!nameNode.value.match(/^\w+$/) && !nameNode.value.match(/^\w+\s+\w+\s+\w+$/)) {
        return 'Name can contain only 0 or 2 whitespaces between words';
    }
}


function messageFormat(messageNode) {
    for (let word of badLanguage) {
        if (messageNode.value.toLowerCase().includes(word)) {
            return 'There is a bad language in the message';
        }
    }
}


function validateGeneral(someNode, len, format) {
    let errors = [len, format];
    const someErrorNode = someNode.parentNode.querySelector('p.help-block');
    someErrorNode.innerHTML = '';
    let someErrors = document.createElement('ul');
    someErrors.setAttribute("role", "alert");

    for (let i = 0; i < errors.length; i++) {
        if (errors[i] !== undefined) {
            let li = document.createElement('li');
            li.innerText = errors[i];
            someErrors.appendChild(li);
        }
    }

    if (someErrors.childElementCount > 0) {
        someErrorNode.appendChild(someErrors);
    }
}