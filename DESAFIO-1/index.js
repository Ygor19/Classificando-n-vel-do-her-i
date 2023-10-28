let nome = "Sung Jin Woo"
let xp = 10001
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

if (xp < 1000){
    console.log("Herói " + nome + " está no nível " + nivel[0])
}else if (xp >= 1001 && xp <= 2000) {
    console.log("Herói " + nome + " está no nível " + nivel[1])
} else if (xp >= 2001 && xp <= 5000) {
    console.log("Herói " + nome + " está no nível " + nivel[2])
} else if (xp >= 5001 && xp <= 7000) {
    console.log("Herói " + nome + " está no nível " + nivel[3])
} else if (xp >= 7001 && xp <= 8000) {
    console.log("Herói " + nome + " está no nível " + nivel[4])
} else if (xp >= 8001 && xp <= 9000) {
    console.log("Herói " + nome + " está no nível " + nivel[5])
} else if (xp >= 9001 && xp <= 10000) {
    console.log("Herói " + nome + " está no nível " + nivel[6])
} else {
    console.log("Herói " + nome + " está no nível " + nivel[7])
}