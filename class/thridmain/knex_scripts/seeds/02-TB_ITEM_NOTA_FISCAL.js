/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_ITEM_NOTA_FISCAL').del()
  await knex('TB_ITEM_NOTA_FISCAL').insert([
    {id: 1, sequencial: '390', quantidade: "9", valor: "32.00", produto_id: "10", notaFiscal_id: "1", TipoCliente: "Pessoa_Fisica"},
    {id: 2, sequencial: '101', quantidade: "5", valor: "82.75", produto_id: "20", notaFiscal_id: "2", TipoCliente: "Pessoa_Fisica"},
    {id: 3, sequencial: '011', quantidade: "7", valor: "9.80", produto_id: "30", notaFiscal_id: "3", TipoCliente: "Pessoa_Fisica"},
  ]);
};
