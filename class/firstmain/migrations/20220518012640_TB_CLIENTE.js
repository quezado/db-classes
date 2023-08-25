/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_CLIENTE', table => {
        table.increments('id').primary()
        table.enum('tipoCliente', ['PESSOA_FISICA', 'PESSOA_JURIDICA'])
        table.integer('codigo').unique().notNull()
        table.string('cnpjcpf').unique()
        table.string('nome')
            .notNull().defaultTo(true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_CLIENTE')
};