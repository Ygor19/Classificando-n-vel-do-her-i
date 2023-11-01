let quantidadeDerrotas = 0
let quantidadeVitorias = 0
let saldoVitorias = rankeada(455, 12)

function rankeada (quantidadeVitorias, quantidadeDerrotas){
    let saldoVitorias =  quantidadeVitorias - quantidadeDerrotas
    return saldoVitorias
}

let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

if (saldoVitorias <= 10){
    console.log("O Herói tem saldo de " + saldoVitorias +  " está no nível " + nivel[0])
}else if (saldoVitorias
     >= 11 && saldoVitorias
     <= 20) {
    console.log("O Herói tem slado de " + saldoVitorias + " está no nível " + nivel[1])
} else if (saldoVitorias
     >= 21 && saldoVitorias
     <= 50) {
    console.log("O Herói tem saldo de " + saldoVitorias + " está no nível " + nivel[2])
} else if (saldoVitorias
     >= 51 && saldoVitorias
     <= 80) {
    console.log("O Herói tem saldo de " + saldoVitorias + " está no nível " + nivel[3])
} else if (saldoVitorias
     >= 81 && saldoVitorias
     <= 90) {
    console.log("O Herói tem saldo de " + saldoVitorias + " está no nível " + nivel[4])
} else if (saldoVitorias
     >= 91 && saldoVitorias
     <= 100) {
    console.log("O Herói tem saldo de " + saldoVitorias + " está no nível " + nivel[5])
} else {
    console.log("O Herói tem saldo de " + saldoVitorias + " está no nível " + nivel[6])
} 