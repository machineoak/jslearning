const alunos = ["Godenot", "Bolsonaro", "Gokunaruto", "Cagueinascalçagames"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeeNota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        const alunos = listaDeAlunosEMedias[0];
        const medias = listaDeAlunosEMedias[1];
        
        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média de ${mediaDoAluno} pontos.`)
    } else {
        console.log("aluno não encontrado!");
    }
}

exibeNomeeNota("Gokunaruto");
