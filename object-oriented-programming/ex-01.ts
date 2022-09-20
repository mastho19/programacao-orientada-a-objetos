// Crie uma classe cliente e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto cliente, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class Cliente {

    // Tipagem das variáveis

    nome: string
    cadastro: number

    // Métodoo construtor

    constructor(nome: string, cadastro: number){

        this.nome = nome
        this.cadastro = cadastro

    }

    exibidirDados():void{
        console.log(`Nome: ${this.nome}, Cadastro: ${this.cadastro}`)

    }


}

var cliente: Cliente = new Cliente('Thomás', 22384)

cliente.exibidirDados()

// Crie uma classe avião e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto avião, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class Aviao {

    modelo: string
    id: number
    emServico: boolean

    constructor(modelo: string, id: number, emServico: boolean){

        this.modelo = modelo
        this.id = id
        this.emServico = emServico
    }

    exibirDados():void{
        console.log(`Modelo: ${this.modelo}\nid: ${this.id}\nemServico: ${this.emServico}   
`)
    }
}

var aviao: Aviao = new Aviao('boing', 22763, true)

aviao.exibirDados()

// Crie uma classe produto eletrônico e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto produto eletrônico, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class Controle{

    cor: string
    marca: string

    constructor(cor: string, marca: string){

        this.cor = cor
        this.marca = marca
    }

    exibirDados():void{
        console.log(`Controle da marca: ${this.marca}\nCor: ${this.cor}`)
    }

    avançarCanal():void{
        console.log('Avançou')
    }

    voltarCanal():void{
        console.log('Voltou')
    }
}

const controle: Controle = new Controle('preto','Samsung')



controle.exibirDados()
controle.avançarCanal()

//Crie uma classe funcionário e apresente os atributos e métodos referentes esta classe, em seguida crie um objeto funcionário, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class Funcionario {

    nome: string
    cargo: string
    salario: number

    constructor(nome: string, cargo: string, salario: number){

        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }

    exibirDados(){
        console.log(`Funcionário: ${this.nome}\nCargo: ${this.cargo}\nSalário: $${this.salario}`)
    }
}

const novoFuncionario = new Funcionario('Thomás', 'Desenvolvedor Jr', 2000)
novoFuncionario.exibirDados()