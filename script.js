// Descobre a hora atual do sistema para gerar a saudação
const hora = new Date().getHours();
let mensagem = "";

// Define a mensagem de acordo com o período do dia
if (hora < 12) {
    mensagem = "Bom dia! Bem-vindo ao PetShop GuilhermeDamasio.";
} else if (hora < 18) {
    mensagem = "Boa tarde! Bem-vindo ao PetShop GuilhermeDamasio.";
} else {
    mensagem = "Boa noite! Bem-vindo ao PetShop GuilhermeDamasio.";
}

// Valida o campo de telefone com mensagem de erro personalizada em português
const campoTelefone = document.getElementById("telefoneCliente");

if (campoTelefone) {
    campoTelefone.addEventListener("invalid", function () {
        campoTelefone.setCustomValidity("Digite o telefone no formato (51) 90000-0000.");
    });

    campoTelefone.addEventListener("input", function () {
        campoTelefone.setCustomValidity("");
    });
}
// Exibe a saudação dinâmica na página inicial
const elementoSaudacao = document.getElementById("saudacao");

if (elementoSaudacao) {
    elementoSaudacao.textContent = mensagem;
}