/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 // Insert, Select, Update e Delete

 exports.seed = async function(knex) {
    // Insert
    await knex('TB_CLIENTE').insert([{tipoCliente: 'PESSOA_FISICA', codigo: 444, cnpjcpf: '86876292304', nome: 'Isabelle Natália Cavalcanti'}]);
    await knex('TB_CLIENTE').insert([{tipoCliente: 'PESSOA_JURIDICA', codigo: 555, cnpjcpf: '14618861000142', nome: 'Sophie Isabel Benedita Gonçalves'}]);

  
    // Função para o retorno so select, já ao executar os seeds
    function runKnex(){
      // Select do tipoCliente, codigo, cnpjcpf e nome de um CLIENTE.
      var result = knex.column('tipoCliente','codigo', 'cnpjcpf', 'nome').select().from('TB_CLIENTE')
       return result.then(function(rows){
          return rows;
      })
    }
  
    // Retorno do código
    const knexres = await runKnex();
    console.log(knexres);
  
    // Update
    await knex('TB_CLIENTE')
    .where('cnpjcpf', '=', '90470917369') // O Cliente Benjamin, originalmente, tem o cpf de: 904.709.173-69
    .update({
      cnpjcpf: 54898803334 // Agora, ele assume o valor de 548.988.033-34
    })
  
    // Delete
    await knex('TB_CLIENTE')
    .where('codigo', '=', '555') // No topo do script, a cliente Sophie adquire o código 555, agora
    .del()                        // estamos deletando a fileira que corresponde ao código a este código.
  
  };
