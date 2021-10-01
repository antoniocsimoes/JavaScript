let tabela = document.getElementById("minhaTabela");
let linhas = document.getElementsByTagName("tr");

console.log(linhas);

for(let i=0; i < linhas.length; i++){
    let linha = linhas[i];
    linha.addEventListener("click", function(){
        selLinha(this, false);
    })
}

const selLinha = ((linha, multiplos) => {
    if(!multiplos){
        let linhas = linha.parentElement.getElementsByTagName("tr");
        for(let i=0; i < linhas.length; i++){
            let linha_ = linhas[i];
            linha_.classList.remove("selecionado");
        }
    }
    linha.classList.toggle("selecionado");
})

var btnVisualizar = document.getElementById("visualizarDados");

btnVisualizar.addEventListener("click", function(){
	var selecionados = tabela.getElementsByClassName("selecionado");
  //Verificar se eestá selecionado
  if(selecionados.length < 1){
  	alert("Selecione pelo menos uma linha");
    return false;
  }
  
  var dados = "";
  
  for(var i = 0; i < selecionados.length; i++){
  	var selecionado = selecionados[i];
    selecionado = selecionado.getElementsByTagName("td");
    dados += "ID: " + selecionado[0].innerHTML + " - Nome: " + selecionado[1].innerHTML + " - Idade: " + selecionado[2].innerHTML + "\n";
  }
  
  alert(dados);
});