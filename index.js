class classeHero {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    descrever(){
        console.log(`O Herói ${this.nome} tem ${this.idade} anos e é da classe ${this.tipo}`)
    }
    atacar(){
    let arma
        if (this.tipo == "mago") {
    arma = "magia"
    } else if (this.tipo == "guerreiro") {
    arma = "espada"
    } else if (this.tipo == "monge") {
    arma = "artes marciais"
    } else if (this.tipo == "ninja") {
    arma = "shuriken"
    }
    
    console.log(`o ${this.tipo} atacou usando ${arma}`)

    }
}

let mago = new classeHero("Apollo", "15", "mago")
let guerreiro = new classeHero("Thor", "25", "guerreiro")
let monge = new classeHero("Ramessés", "40", "monge")
let ninja = new classeHero("Moisés", "12", "ninja")

mago.descrever()
mago.atacar()
guerreiro.descrever()
guerreiro.atacar()
monge.descrever()
monge.atacar()
ninja.descrever()
ninja.atacar()
