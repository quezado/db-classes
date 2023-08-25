/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_CLIENTE').del()
  await knex('TB_CLIENTE').insert([
    {id: 1, codigo: '305', cnpjcpf: '78879240064', nome: "João", TipoCliente: "Pessoa_Fisica"},
    {id: 2, codigo: '107', cnpjcpf: '99710237098', nome: "Carlos", TipoCliente: "Pessoa_Fisica"},
    {id: 3, codigo: '322', cnpjcpf: '52874559091', nome: "Ana", TipoCliente: "Pessoa_Fisica"},
       ]);
};
