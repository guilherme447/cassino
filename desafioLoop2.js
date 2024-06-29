function simularCassino() {
    let digito1
    let digito2
    let digito3
        //dica 2
    let jackpot = false

    //dicas 3
    let tentativa = 0
    let gastoTotal = 0

    while (!jackpot) {
        tentativa++
        gastoTotal += 5
        digito1 = sortearDigito()
        digito2 = sortearDigito()
        digito3 = sortearDigito()
        console.log(`O cassino deu ${digito1} ${digito2} ${digito3}`)

        if (digito1 === 7 && digito2 === 7 && digito3 === 7) {
            jackpot = true
            console.log(`Você jogou ${tentativa} vezes e gastou R$ ${gastoTotal} reais até alcançar o JACKPOT`)
        }


    }

    // while (jackpot === false) {


}

function sortearDigito() {
    return Math.trunc(Math.random() * 9 + 1)
}