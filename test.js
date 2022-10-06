// let http = new XMLHttpRequest();

// let produtos = [];

// http.open('GET', 'http://localhost:3000/estoque/getProdutos');

// http.send();

// http.onload = () => {
//     const data = http.response;
//     produtos.push(data);
//     console.log(produtos[1]);
// }


let url = "http://localhost:3000/estoque/getProdutos";
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
let div = document.querySelector("tbody");
let produtos = data;
console.log(produtos)
console.log(produtos[0].id)
produtos.forEach(function(produto){
div.innerHTML += `<tr>
                    <td>${produto.id}</td>
                    <td>${produto.descricao_produto}</td>
                    <td>${produto.quantidade_estoque}</td>
                    <td>${produto.valor_produto}</td>
                    <td>${produto.validade_produto}</td>
                </tr>`;
});
})
.catch(function(error) {
console.log(error);
});


