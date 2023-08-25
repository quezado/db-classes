/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

//codigo, data, valorNota, cliente_id, itens_id
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_NOTA_FISCAL_VENDA').del()
  await knex('TB_NOTA_FISCAL_VENDA').insert([
    {
      codigo: 35263,
      data: '13/02/2022',
      valorNota: 18.99,
      cliente_id: 11,
      itens_id: 1
    },
    {
      codigo: 65146,
      data: '14/02/2022',
      valorNota: 16.99,
      cliente_id: 12,
      itens_id: 2
    },
    {
      codigo: 34865,
      data: '15/02/2022',
      valorNota: 14.99,
      cliente_id: 13,
      itens_id: 3
    }
  ]);
};
