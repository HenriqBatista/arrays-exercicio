const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
// - Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. 



const arrayNum = [10,20,30,40]
console.table(arrayNum)
console.log(arrayNum.length) // impressao do numero de itens
console.log(arrayNum[0]) // impressao do 1° item do array
console.log(arrayNum.includes(10)) //impressao retornando true
console.log(arrayNum.includes(100)) // impressao retornando false


const arrayString = ["Henrique","Erick","Lucas","Mateus"]
console.table(arrayString)
console.log(arrayString.length) // impressao do numero de itens
console.log(arrayString[1]) // impressao do 2° item do array
console.log(arrayString.includes("Erick")) //impressao retornando true
console.log(arrayString.includes("Marcelo")) // impressao retornando false


const arrayNumStgBoo = [6,"Henrique Batista", (100==10)]
console.table(arrayNumStgBoo)
console.log(arrayNumStgBoo.length) // impressao do numero de itens
console.log(arrayNumStgBoo[2]) // impressao do 3° item do array
console.log(arrayNumStgBoo.includes("Henrique Batista"))
console.log(arrayNumStgBoo.includes((100>10)))