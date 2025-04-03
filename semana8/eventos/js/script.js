const mensagem = document.getElementById('mensagem');

const botao = document.getElementById('meuBotao');

const evento = document.getElementById('evento');

const travar = document.getElementById('travar');

botao.addEventListener('click',
    function(){
        evento.innerHTML = alert("Você foi invadido.");
    }
);

botao.addEventListener('mouseover',
    function(){
       evento.innerHTML = alert("Você foi invadido.");
    }
);

botao.addEventListener('mouseout',
    function(){
        evento.innerHTML = alert("Você foi invadido. Não adianta correr.");
    }
);

travar.addEventListener('click',
    function(){
        while (true){
            mensagem.innerText = '<h1>asdf</h1>'
        }
    }
);