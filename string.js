let nome = 'Angelo'
let sobrenome = 'Filho'

let funcao = 'Professor'

//Como eu sei
//console.log(funcao, nome, sobrenome)

//Melhorando
//console.log(funcao + ':', nome.toUpperCase(), sobrenome.toUpperCase())

let nome_usuario = nome + '.' + sobrenome
//console.log(nome_usuario.toLowerCase())

//Interpolação de String
let user = `${nome}.${sobrenome}`
//let mensagem = `Nome de Usuário: ${nome.toLowerCase()}.${sobrenome.toLowerCase()}`
let mensagem = `Nome de Usuário: ${user.toLowerCase()}`
console.log(mensagem)

//Nome de Usuário: angelo.filho