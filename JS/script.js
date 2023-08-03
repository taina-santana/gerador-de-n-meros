const button = document.getElementById('gerador');

button.addEventListener('click', function () {
    const minimo = parseInt(document.getElementById('minimo').value);
    const maximo = parseInt(document.getElementById('maximo').value);
    
    let resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

    if (isNaN(resultado)) {
        resultado = "Valor inválido!";
    }

    document.querySelector('#resultado > span').textContent = resultado;
 });