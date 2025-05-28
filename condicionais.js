const idade = 60
const mensagem = `Idade: ${idade} anos`

console.log(mensagem);

//if, else
if (idade >= 60) {
    console.log(`Véi`);
    //console.log(`Se a condição for atendida`)
} else if (idade >= 12 && idade <= 18) {
    console.log(`Aborrecente`);
} else if (idade < 12) {
    console.log(`Tira a cantiga do mijo`);
} else {
    //19 ao 59
    console.log(`Adúltero, segundo o Chaves`);
}
