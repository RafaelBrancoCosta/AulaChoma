//catalogo 

async function fetchProdutos(){
    try {
        await fetch('https://fakestoreapi.com/products')
        const listaProdutos = resposta.json();
        console.log(listaProdutos);
    } catch (error) {
        
    }
}
fetchProdutos();