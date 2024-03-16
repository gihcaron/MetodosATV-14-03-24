// Lista de Exercicios: Métodos Array

// Metodo 1: ForEach 

//Sitaxe: array1.forEach((element) => console.log(element));

//Exemplo 1 - ForEach

// Declarar os números (Array) desejados

//const numbers = [4, 8, 28, 32];

//Para cada núemro e index
//Exibir "O Numero é X e está na posição index"

// numbers.forEach((numbers, index) => {
  //  console.log(" O Numero é " + numbers + " e está na posição " + index);

// });


//Exemplo 2 - ForEach: Como posso aplicar o ForEach na prática?
// Tenho uma lista de alunos e quero saber somente quem são os maiores de idade 

// Declarar a lista de alunos

const alunos = [
    { nome: "Beyonce", idade: "15", turma: "1TDS1" },
    { nome: "Luan Santana", idade: "18", turma: "M5B" },
    { nome: "Lady Gaga", idade: "19", turma: "3TEE" },
    { nome: "Justi Biber", idade: "17", turma: "2TAD" },

]

//Para cada aluno 
// Verificar se ele é maior de idade

alunos.forEach(function (item, index){
    if(item.idade >= 18){
    console.log('O aluno,' + item.nome + '  posição ' + index + ' da turma ' + item.turma + ' é maior de idade')
    //console.log('O aluno{item.nome}, posição ${index} da turma ${item.turma} é maior de idade')
}
});



// Metodo 2: 