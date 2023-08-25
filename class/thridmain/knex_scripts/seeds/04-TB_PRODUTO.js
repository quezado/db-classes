/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_PRODUTO').del()
  await knex('TB_PRODUTO').insert([
    {id: 1, codigo: '399', descricao: "Arroz", valor: 1.80},
    {id: 2, codigo: '630', descricao: "Carne", valor: 10.00},
    {id: 3, codigo: '855', descricao: "Feijão", valor: 5.00},
  ]);
};
