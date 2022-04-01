function contar() {
    const inicio = document.getElementById('txti')
    const fim = document.getElementById('txtf')
    const passo = document.getElementById('txtp')
    const res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('ERRO! Faltam dados!')
    } else {
        res.innerHTML = `Contando: <br>`
        const i = Number(inicio.value)
        const f = Number(fim.value)
        const p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considere PASSO 1')
            res.innerHTML = 'Impossível contar!'
        }
        //Contagem Crescente
        if (i < f) {
           // Contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
                } else {
                // Contagem Regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `${c} \u{1F3C1}`
       }
    }
}