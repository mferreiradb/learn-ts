var produto = /** @class */ (function () {
    function produto(_codigo, _descricao, _preco) {
        this.codigo = _codigo;
        this.descricao = _descricao;
        this.preco = _preco;
    }
    produto.prototype.getDados = function () {
        return "Produto " + this.codigo + ": " + this.descricao + ": " + this.preco;
    };
    return produto;
}());
