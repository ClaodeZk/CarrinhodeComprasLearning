let totalGeral;
limpar();


function adicionar(){

//recuperar valores: nome do produto, quantidade e valor.

let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidadeProduto = document.getElementById('quantidade').value;

//calcular o preço: o subtotal por produto.

let preco = quantidadeProduto * valorUnitario;
let carrinho = document.getElementById('lista-produtos');

//adicionar o produto no carrinho.
carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul"> ${preco} </span>
        </section>
      </section>`;

//atualizar o valor total do carrinho.

totalGeral = totalGeral + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`;

//limpar campo quantidade após adicionar
document.getElementById('quantidade').value = '';
}


function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '';
}