/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_NOTA_FISCAL_VENDA', table => {
        table.increments('id').primary()
        table.integer('codigo').unique().notNull()
        table.string('data')
        table.double('valorNota')
            .notNull().defaultTo(true)
        table.integer('cliente_id').notNull().references('TB_CLIENTE.id');
        table.integer('itens_id').notNull().references('TB_ITEM_NOTA_FISCAL.id');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_NOTA_FISCAL_VENDA')
};