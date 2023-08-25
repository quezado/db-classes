/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_ITEM_NOTA_FISCAL', table => {
        table.increments('id').primary()
        table.integer('sequencial').unique().notNull()
        table.integer('quantidade').notNull()
        table.double('valor')
        table.string('produto').references('TB_PRODUTO.id')
            .notNull().defaultTo(true)
        table.integer('notaFiscal_id').references('TB_NOTA_FISCAL_VENDA.id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_ITEM_NOTA_FISCAL')
};