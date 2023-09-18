const valorInicial = 1000

const jurosMensal = 12.5

const tempoDeAplicacao = 5

const valorFinal = (valorInicial * (1 + jurosMensal / 100) ** tempoDeAplicacao)

console.log(`Um investimento de R$${valorInicial}, com juros mensal de ${jurosMensal}%, em ${tempoDeAplicacao} meses, teremos um montante de R$${valorFinal}`)

