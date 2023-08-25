/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function(knex) {
// Insert
await knex('TB_NOTA_FISCAL_VENDA').insert([{codigo: 170, data: '11/05/2022', valorNota: 23.4, cliente_id: 92, itens_id: 121}]);

// Função para o retorno so select, já ao executar os seeds
function runKnex(){
  var result = knex.column('data', 'itens_id').select().from('TB_NOTA_FISCAL_VENDA')
   return result.then(function(rows){
      return rows;
  })
}

// Retorno do código
const knexres = await runKnex();
console.log("Select DATA e ITENS_ID de NOTA_FISCAL_VENDA\n", knexres);

// Update
await knex('TB_NOTA_FISCAL_VENDA')
.where('codigo', '=', '35263') 
.update({
  data: '12/05/2022' 
})

// Delete
await knex('TB_NOTA_FISCAL_VENDA')
.where('data', '=', '14/02/2022') 
.del()                     

};
