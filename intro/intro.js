"use strict";
class produto {
    constructor(_codigo, _descricao, _preco) {
        this.codigo = _codigo;
        this.descricao = _descricao;
        this.preco = _preco;
    }
    getDados() {
        return "Produto " + this.codigo + ": " + this.descricao + ": " + this.preco;
    }
}
