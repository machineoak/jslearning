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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`ligando para ${telefoneComercial}`);
    console.log(`ligando para ${telefoneResidencial}`);
};

ligaParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);