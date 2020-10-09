const nameDOM = document.getElementById('name');
const btn = document.querySelector('button');

function Execute() {
    GetInput();
    drawDOM(name);
    drawConsole(name);
}

function GetInput() {
    name = document.querySelector('#inputTexto').value;
    return name;
}

function drawDOM(name) {
    nameDOM.innerHTML = name;
}

function drawConsole(name) {
    console.log(name);
}

btn.addEventListener('click', Execute);







