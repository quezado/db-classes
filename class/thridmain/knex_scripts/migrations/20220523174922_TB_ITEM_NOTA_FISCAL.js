/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('TB_ITEM_NOTA_FISCAL', table => {
        table.increments('id').primary()
        table.integer('sequencial').notNull()
        table.integer('quantidade').notNull()
        table.float('valor').notNull()
        table.integer('produto_id').unsigned()
        table.foreign('produto_id').references('TB_PRODUTO.id')
        table.integer('notaFiscal_id').unsigned()
        table.foreign('notaFiscal_id').references('TB_NOTA_FISCAL_VENDA.id')
        table.enum('TipoCliente', ['Pessoa_Fisica', 'Pessoa_Juridica']).defaultTo('Pessoa_Fisica')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TB_ITEM_NOTA_FISCAL')
};
