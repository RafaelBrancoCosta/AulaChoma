//autenticacao de login//

const botao = document.getElementById('entrar');
botao.addEventListener('click',
    function (){
        const usuario = JSON.parse(localStorage.getItem("usuarios")) || [];
        let login = document.getElementById("login").value;
        let senha = document.getElementById("senha").value;

        const logado = usuario.find(user => user.login === login && user.senha === senha);
    
        if(logado){
            localStorage.setItem('userLogado', login);
            window.location.href = "dashbord.html";
        }else{
            document.getElementById('mensagemErro').textContent = "Login e Senha incorretos";
        }
    }
);