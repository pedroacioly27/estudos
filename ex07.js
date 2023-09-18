const populacaoInfectada = 1500

const taxaDeInfeccao = 5

const tempo = 14

const totalInfectados = populacaoInfectada * (taxaDeInfeccao ** (tempo / 7))

console.log(`tendo ${populacaoInfectada} pessoas infectadas, com uma taxa de infecção de ${taxaDeInfeccao} pessoas, em ${tempo} dias teremos ${totalInfectados} pessoas infectadas!`)