/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('TB_NOTA_FISCAL_VENDA', table => {
        table.increments('id').primary()
        table.integer('codigo').notNull()
        table.timestamp('data')
            .defaultTo(knex.fn.now())
        table.float('valorNota').notNull()
        table.integer('cliente_id').unsigned()
        table.foreign('cliente_id').references('TB_CLIENTE.id')
        table.integer('itemNotaFiscal_id').unsigned()
        table.foreign('itemNotaFiscal_id').references('TB_ITEM_NOTA_FISCAL.id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TB_NOTA_FISCAL_VENDA')
};
