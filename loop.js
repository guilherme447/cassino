// FOR = é loop antigo, o mais rapido "para"
//while = enquanto
//for of
//forEACH = mais moderno, sentexe bem simlicada, parém não da para quebrar o loop.
//FOR in x


//quero printar dez mensagens representar meus reps da academia.

for (let rep = 1; rep <= 10; rep++) {
    console.log(`estou fazendo minha rep número ${rep}💪`)
}

const pessoa = ['guilherme', 2006, "desenvolvedor", "Osasco"]

for (let i = 0; i < 4; i++) {
    console.log(pessoa[i])
}


const anos = [2006, 1988, 2007, 2008, 2000]

// calcular quantos anos cada pessoa tem no array em anos.
for (let i = 0; i < anos.length; i++) {
    console.log(2024 - anos[i])

}

//mesmo resultado de maneira diferente
console.log("================== inicio do for of ====================")

for (const ano of anos) {
    console.log(2024 - ano)
}

const btns = document.querySelectorAll("button")

for (const botao of btns) {
    botao.addEventListener("click", () => {
        alert("botão foi clicado")

    })

}