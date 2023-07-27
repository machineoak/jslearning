const alunos = ["ana" ,"clara", "maria", "maria", "joao", "joao", "joao" ]

const meuSet = new Set(alunos);

const nomesAtualizados = [... meuSet]

console.log(nomesAtualizados)