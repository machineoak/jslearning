const cliente = {
    nome: "kali",
    idade: 20,
    email: "kali@games.com",
    telefone: ["1155555550", "1144444440"],
    peso: 80.1,
    altura: 1.69,
    calcularIMC:function(){
        return (this.peso/(Math.pow(this.altura,2)))
  },
};
  
cliente.enderecos = [
    {
      rua: "Bolsonarogames",
      numero: 1337,
      apartamento: true,
      complemento: "ap 666",
    },
];

cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,  
})

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);
  
console.log(listaApenasApartamentos);
