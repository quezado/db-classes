/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 // Insert, Select, Update e Delete

exports.seed = async function(knex) {
  // Insert
  await knex('TB_PRODUTO').insert([{codigo: 1111, descricao: 'ALFACE', valor: 3.40}]);
  await knex('TB_PRODUTO').insert([{codigo: 233, descricao: 'BOLACHA DE MAIZENA', valor: 3.50}]);

  // Função para o retorno so select, já ao executar os seeds
  function runKnex(){
    var result = knex.column('codigo', 'descricao').select().from('TB_PRODUTO')
     return result.then(function(rows){
        return rows;
    })
  }

  // Retorno do código
  const knexres = await runKnex();
  console.log(knexres);

  // Update
  await knex('TB_PRODUTO')
  .where('descricao', '=', 'SUCRILHOS') // SUCRILHOS originalmente é inserido com o valor 12.58
  .update({
    valor: 6.5 // Agora, ele assume o valor 6.5
  })

  // Delete
  await knex('TB_PRODUTO')
  .where('codigo', '=', '1111') // No topo do script, ALFACE adquire o código 1111, agora
  .del()                        // estamos deletando a fileira que corresponde ao código 1111

};
