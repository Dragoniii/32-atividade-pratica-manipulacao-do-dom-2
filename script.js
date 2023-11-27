//1. Capture, armazene e manipule todos os elementos de classe "card". Modifique os estilos necessários nesses elementos para que fique semelhante a imagem.
const classCard = document.querySelectorAll(".card");
classCard.forEach((background) =>
  background.setAttribute("style", "background-color: #ff7200; margin: 50px;")
);

//2. Capture, armazene e manipule todos os elementos de classe "titulo-card". Modifique os estilos necessários nesses elementos para que fique semelhante a imagem.
const tituloCard = document.querySelectorAll(".titulo-card");
tituloCard.forEach((titulo) =>
  titulo.setAttribute("style", "color: #2b385b; margin: 15px;")
);

//3. Modifique o texto dos títulos nos cards para "Meu card".
tituloCard.forEach((titulo) => (titulo.textContent = "Meu card"));

//4. Capture, armazene e manipule todos os elementos de classe "descricao-card". Modifique os estilos necessários nesses elementos para que fique semelhante a imagem.
const descricaoCard = document.querySelectorAll(".descricao-card");
descricaoCard.forEach((descricaoCard) =>
  descricaoCard.setAttribute("style", "color: white; margin: 15px;")
);

//5. Modifique o texto das descrições nos cards para "Descrição modificada pelo JavaScript".
descricaoCard.forEach(
  (descricaoCard) =>
    (descricaoCard.textContent = "Descrição modificada pelo JavaScript")
);

//6. Capture, armazene e manipule todos os elementos de classe "botao-editar". Modifique o estilo desses elementos para que fique semelhante a imagem.
const botaoEditar = document.querySelectorAll(".botao-editar");
botaoEditar.forEach((botaoEditar) =>
  botaoEditar.setAttribute(
    "style",
    "background-color: green; color: white; padding: 8px; margin: 8px; border-radius: 8px;border: none;"
  )
);

//7. Capture, armazene e manipule todos os elementos de classe "botao-apagar". Modifique o estilo desses elementos para que fique semelhante a imagem.
const botaoApagar = document.querySelectorAll(".botao-apagar");
botaoApagar.forEach((botaoApagar) =>
  botaoApagar.setAttribute(
    "style",
    "background-color: red; color: white; padding: 8px; margin: 8px; border-radius: 8px;border: none;"
  )
);

//8. Adicione o atributo 'onclick' nos elementos de classe “botão-editar”. Ao clicar nesses elementos, deve chamar a função 'editarCard()'. Essa função deve mostrar um alerta com a mensagem "Clicou em Editar!".
function editarCard() {
  alert(`Clicou em Editar!`);
}

botaoEditar.forEach((botaoEditar) =>
  botaoEditar.setAttribute("onclick", "editarCard()")
);

//9. Adicione o atributo 'onclick' nos elementos de classe “botão-apagar”. Ao clicar nesses elementos deve chamar a função 'apagarCard()'. Essa função deve perguntar ao usuário se ele tem certeza da exclusão do card. Se o usuário confirmar a exclusão deve mostrar um alerta com a mensagem "Confirmado!", se não deve mostrar a mensagem "Cancelou!".
function apagarCard(button) {
    if (confirm("Você deseja confirmar o apagamento?")) {
      button.parentElement.remove();
      alert(`Confirmado!`);
    } else {
      alert(`Cancelou!`);
    }
  }
  botaoApagar.forEach((botaoApagar) =>
  botaoApagar.setAttribute("onclick", "apagarCard(this)")
);
