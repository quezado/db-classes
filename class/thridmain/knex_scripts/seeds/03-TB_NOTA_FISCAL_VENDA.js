/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_NOTA_FISCAL_VENDA').del()
  await knex('TB_NOTA_FISCAL_VENDA').insert([
    {id: 1, codigo: "9", data: "29/05", valorNota: "131", cliente_id: "1", itemNotaFiscal_id: "1"},
    {id: 2, codigo: "8", data: "24/02", valorNota: "301", cliente_id: "2", itemNotaFiscal_id: "2"},
    {id: 3, codigo: "7", data: "03/09", valorNota: "121", cliente_id: "3", itemNotaFiscal_id: "3"},
  ]);
};
