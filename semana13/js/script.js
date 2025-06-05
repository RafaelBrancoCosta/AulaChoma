//catalogo 

const divCatalogo = document.getElementById('catalogo');
async function fetchProdutos(){
    try {
        const resposta = await fetch('https://fakestoreapi.com/products')
        const listaProdutos = resposta.json();
        console.log(listaProdutos);
    } catch (error) {
        console.error("Erro na api: ", error);
        divCatalogo.innerHTML = "<h1>Site está indisponivel, tente novamente mais tarde.</h1>";
    }
}
fetchProdutos();