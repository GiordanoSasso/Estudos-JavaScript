const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()//conflito entre paradigmas : futuro e 00

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()//bind serve para criar uma função já fixada como nova

