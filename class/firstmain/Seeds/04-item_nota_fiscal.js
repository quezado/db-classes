/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

// sequencial, quantidade, valor, produto, notaFiscal_id
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_ITEM_NOTA_FISCAL').del()
  await knex('TB_ITEM_NOTA_FISCAL').insert([
    {
      sequencial: 1,
      quantidade: 4,
      valor: 67.9,
      produto: 1,
      notaFiscal_id: 1
    },
    {
      sequencial: 2,
      quantidade: 3,
      valor: 19.9,
      produto: 2,
      notaFiscal_id: 2
    },
    {
      sequencial: 3,
      quantidade: 5,
      valor: 77.9,
      produto: 2,
      notaFiscal_id: 3
    }
  ]);
};
