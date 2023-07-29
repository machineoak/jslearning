const clientes = require("./objjfinal.json");

function filtrarAp(clientes){
    return clientes.filter((cliente)=>{
        return (cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        )
    });
}

const filtrados = filtrarAp(clientes);

console.log(filtrados);