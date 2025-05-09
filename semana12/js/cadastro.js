//cadastro

const botao = document.getElementById('btnCadastrar');

botao.addEventListener('click',
    function (){
        const usuario = {
            usuario: document.getElementById('login').value,
            senha: document.getElementById('senha').value
        }

        let usuarios = [];
        usuarios.push(usuario);
            let listaUsuarios = JSON.stringify(usuarios);
            localStorage.setItem("usuarios", listaUsuarios);
    }

)