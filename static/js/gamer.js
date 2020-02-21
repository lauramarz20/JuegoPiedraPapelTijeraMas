// Reglas del juego
rules = {
    'Piedra-Tijera': [1,0],
    'Piedra-Papel': [0,1],
    'Piedra-Lagarto': [1,0],
    'Piedra-Spock': [0,1],
    'Piedra-Piedra': [0,0],
    'Papel-Tijera': [0,1],
    'Papel-Piedra': [1,0],
    'Papel-Lagarto': [0,1],
    'Papel-Spock': [1,0],
    'Papel-Papel': [0,0],
    'Tijera-Papel': [1,0],
    'Tijera-Piedra': [0,1],
    'Tijera-Lagarto': [1,0],
    'Tijera-Spock': [0,1],
    'Tijera-Tijera': [0,0],
    'Lagarto-Tijera': [0,1],
    'Lagarto-Papel': [1,0],
    'Lagarto-Piedra': [0,1],
    'Lagarto-Spock': [1,0],
    'Lagarto-Lagarto': [0,0],
    'Spock-Tijera': [1,0],
    'Spock-Papel': [0,1],
    'Spock-Piedra': [1,0],
    'Spock-Lagarto': [0,1],
    'Spock-Spock': [0,0]
}

window.onload = function(){
    id_python.style.display = (id_python.style.display == 'none') ? 'none' : 'none';
}
const list_python_gamer = ['Piedra', 'Papel', 'Tijera', 'Lagarto', 'Spock']
let score_gamer = document.getElementById('score_gamer')
let score_python = document.getElementById('score_python')
let python_name = document.getElementById('python_name')
let gamer_score_final = document.getElementById('gamer_score_final')
let id_python = document.getElementById('id_python')
let id_gamer = document.getElementById('id_gamer')
let id_gamer_name = document.getElementById('id_gamer_name')

let score_gamer_total = 0
let score_python_total = 0

function fooPiedra() {
    const randomPython = list_python_gamer[Math.floor(Math.random() * list_python_gamer.length)];
    let id_piedra = document.getElementById('id_piedra').value;
    let val_piedra = id_piedra + '-' + randomPython;
    let score_tmp = rules[val_piedra];
    python_name.innerHTML = randomPython + ' <i class="fab fa-python"></i>';
    score_gamer_total = parseInt(score_gamer.textContent) + score_tmp[0];
    score_python_total = parseInt(score_python.textContent) + score_tmp[1];
    score_python.innerHTML = '<h3 id="score_python">'+score_python_total+'</h3>';
    score_gamer.innerHTML = '<h3 id="score_gamer">'+score_gamer_total+'</h3>';
    document.getElementById('id_gamer').value = id_python.textContent;
    document.getElementById('gamer_score_final').value = score_gamer_total;
    document.getElementById('id_gamer_name').value = id_name.textContent;
}

function fooPapel() {
    const randomPython = list_python_gamer[Math.floor(Math.random() * list_python_gamer.length)];
    let id_papel = document.getElementById('id_papel').value;
    let val_papel = id_papel + '-' + randomPython;
    let score_tmp = rules[val_papel];
    python_name.innerHTML = randomPython + ' <i class="fab fa-python"></i>';
    score_gamer_total = parseInt(score_gamer.textContent) + score_tmp[0];
    score_python_total = parseInt(score_python.textContent) + score_tmp[1];
    score_python.innerHTML = '<h3 id="score_python">'+score_python_total+'</h3>';
    score_gamer.innerHTML = '<h3 id="score_gamer">'+score_gamer_total+'</h3>';
    document.getElementById('id_gamer').value = id_python.textContent;
    document.getElementById('gamer_score_final').value = score_gamer_total;
    document.getElementById('id_gamer_name').value = id_name.textContent;
}

function fooTijera() {
    const randomPython = list_python_gamer[Math.floor(Math.random() * list_python_gamer.length)];
    let id_tijera = document.getElementById('id_papel').value;
    let val_tijera = id_tijera + '-' + randomPython;
    let score_tmp = rules[val_tijera];
    python_name.innerHTML = randomPython + ' <i class="fab fa-python"></i>';
    score_gamer_total = parseInt(score_gamer.textContent) + score_tmp[0];
    score_python_total = parseInt(score_python.textContent) + score_tmp[1];
    score_python.innerHTML = '<h3 id="score_python">'+score_python_total+'</h3>';
    score_gamer.innerHTML = '<h3 id="score_gamer">'+score_gamer_total+'</h3>';
    document.getElementById('id_gamer').value = id_python.textContent;
    document.getElementById('gamer_score_final').value = score_gamer_total;
    document.getElementById('id_gamer_name').value = id_name.textContent;
}

function fooLagarto() {
    const randomPython = list_python_gamer[Math.floor(Math.random() * list_python_gamer.length)];
    let id_lagarto = document.getElementById('id_papel').value;
    let val_lagarto = id_lagarto + '-' + randomPython;
    let score_tmp = rules[val_lagarto];
    python_name.innerHTML = randomPython + ' <i class="fab fa-python"></i>';
    score_gamer_total = parseInt(score_gamer.textContent) + score_tmp[0];
    score_python_total = parseInt(score_python.textContent) + score_tmp[1];
    score_python.innerHTML = '<h3 id="score_python">'+score_python_total+'</h3>';
    score_gamer.innerHTML = '<h3 id="score_gamer">'+score_gamer_total+'</h3>';
    document.getElementById('id_gamer').value = id_python.textContent;
    document.getElementById('gamer_score_final').value = score_gamer_total;
    document.getElementById('id_gamer_name').value = id_name.textContent;
}

function fooSpock() {
    const randomPython = list_python_gamer[Math.floor(Math.random() * list_python_gamer.length)];
    let id_spock = document.getElementById('id_papel').value;
    let val_spock = id_spock + '-' + randomPython;
    let score_tmp = rules[val_spock];
    python_name.innerHTML = randomPython + ' <i class="fab fa-python"></i>';
    score_gamer_total = parseInt(score_gamer.textContent) + score_tmp[0];
    score_python_total = parseInt(score_python.textContent) + score_tmp[1];
    score_python.innerHTML = '<h3 id="score_python">'+score_python_total+'</h3>';
    score_gamer.innerHTML = '<h3 id="score_gamer">'+score_gamer_total+'</h3>';
    document.getElementById('id_gamer').value = id_python.textContent;
    document.getElementById('gamer_score_final').value = score_gamer_total;
    document.getElementById('id_gamer_name').value = id_name.textContent;
}
