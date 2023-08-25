/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('TB_CLIENTE', table => {
        table.increments('id').primary()
        table.integer('codigo').notNull()
        table.string('cnpjcpf').notNull().unique()
        table.string('nome').notNull()
        table.enum('TipoCliente', ['Pessoa_Fisica', 'Pessoa_Juridica']).defaultTo('Pessoa_Fisica')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TB_CLIENTE')
};
