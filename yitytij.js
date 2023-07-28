const cliente = {
    nome: "andre",
    idade: 32,
    cpf: "231872321",
    email: "andre@dominio.com",
};

console.log(`o nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);

const chaves = ["nome", "idade", "cpf", "email", "altura"]
chaves.forEach(chave => {
    console.log(`a chave ${chave} tem valor ${cliente[chave]}`)
})
