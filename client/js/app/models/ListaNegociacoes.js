class ListaNegociacoes {
    
    constructor(armadilha){
        
        this._negociacoes = []
        //this._armadilha = armadilha;
    }
    
    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
        //this._armadilha(this);
        
    }
    
    get negociacoes() {
        
        return [].concat(this._negociacoes);
        
    }
    
    apaga() {
        
        this._negociacoes = [];
        //this._armadilha(this);
    }

    get volumeTotal() {

        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);

    }
    
}