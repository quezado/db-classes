/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

// codigo, descricao, valor
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_PRODUTO').del()
  await knex('TB_PRODUTO').insert([
    {
      codigo: 212,
      descricao: 'MANTEIGA DEMERARA',
      valor: 22.98
      },
    {
      codigo: 232,
      descricao: 'SUCRILHOS',
      valor: 12.58

      },
      {
      codigo: 242,
      descricao: 'NESCAU',
      valor: 8.9
      }
  ]);
};
