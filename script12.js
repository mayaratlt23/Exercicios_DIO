// NOT ( ! ) - nega uma afirmação
let tempo = "chuva"
let resultado = tempo === "chuva"
console.log(!!resultado)

let tempo2 = "chuva"
let horario = 8
let resultado2 = !((tempo2 !== "chuva") && (horario > 6))
console.log(resultado2)