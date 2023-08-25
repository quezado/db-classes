/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

// id, tipoCliente, codigo, cnpjcpf, nome
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_CLIENTE').del()
  await knex('TB_CLIENTE').insert([
    {
      tipoCliente: 'PESSOA_FISICA',
      codigo: 111,
      cnpjcpf: '90470917369',
      nome: 'Benjamin Severino Antonio Almada'
    },
    {
      tipoCliente: 'PESSOA_JURIDICA',
      codigo: 222,
      cnpjcpf: '70.794.703/0001-14',
      nome: 'Ademar Severino Castro da Paz'
    },
    {
      tipoCliente: 'PESSOA_FISICA',
      codigo: 333,
      cnpjcpf: '40966750403',
      nome: 'Lara Stefany Almada'
    }
  ]);
};
