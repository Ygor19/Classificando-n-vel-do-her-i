class heroi{
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        if (this.tipo === "mago"){
            console.log("O mago atacou usando magia")
        } else if(this.tipo === "guerreiro"){
            console.log("O guerreiro atacou usando espada")
        } else if(this.tipo === "monge") {
            console.log("O monge atacou usando artes marciais")
        } else {
            console.log("O ninja atacou usando shuriken")
        }
    }
}

let aventureiro = new heroi("teshian", 25, "mago")
aventureiro.atacar()