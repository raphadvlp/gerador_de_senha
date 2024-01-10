
let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

//Pega o valor que o usuário selecionou e exibe no titulo do slider
sizePassword.innerHTML = sliderElement.value;

//Exibindo o valor dinâmico do slider
slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {

        //charAt vai fazer gerar um numero com o tamanho de numeros que tem na charset
        //Math.floor vai fazer com que esse numero seja inteiro
        //Math.random vai fazer com que gere aleatoriamente
        //Por final coloca tudo na variavel pass
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha)
    .then(() => {
        alert('Senha copiada com sucesso!');
    })
    .catch(() => {
        alert('Algo aconteceu de errado!');
    })
}
