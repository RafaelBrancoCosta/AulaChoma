function expressao(parametro){
    document.getElementById('tela').value += parametro
}

function resultado(){

    try {
        let expressao = document.getElementById('tela').value;
        let resultado = eval(expressao);
        document.getElementById('tela').value  = resultado;
    } catch (error) {
        document.getElementById('tela').value = "Digite direito seu porra";
    }
}

function limpar(){
    document.getElementById('tela').value  = "";

}