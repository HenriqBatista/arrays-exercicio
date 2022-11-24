// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

// - Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

const arrayNum = [10,20,30,40,50]
const arrayString = ["Agua", "Terra", "Fogo", "Ar"] 
const arrayBoo = [(10>=55),(14==11),(88<=89)]


const novoArrayNum = arrayNum.slice()
const novoArrayString = arrayString.slice()
const novoArrayBoo = arrayBoo.slice()

novoArrayNum.unshift(01)
console.log(novoArrayNum)

novoArrayString.pop()
console.log(novoArrayString)

novoArrayBoo.splice(1,1)
console.log(novoArrayBoo)