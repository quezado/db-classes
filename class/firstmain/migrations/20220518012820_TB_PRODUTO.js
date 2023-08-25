/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_PRODUTO', table => {
        table.increments('id').primary()
        table.integer('codigo').unique().notNull()
        table.string('descricao').notNull()
        table.double('valor')
            .notNull().defaultTo(true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_PRODUTO')
};