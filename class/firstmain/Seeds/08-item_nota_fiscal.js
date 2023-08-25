/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Insert
    await knex('TB_ITEM_NOTA_FISCAL').insert([{
        sequencial: 10,
        quantidade: 5,
        valor: 7.8,
        produto: 138,
        notaFiscal_id: 96
    }]);

    // Função para o retorno so select, já ao executar os seeds
    function runKnex(){
    // Select do código do produto e sua descrição
    var result = knex.column('produto', 'notaFiscal_id').select().from('TB_ITEM_NOTA_FISCAL')
    return result.then(function(rows){
        return rows;
    })
    }

    // Retorno do código
    const knexres = await runKnex();
    console.log("Select PRODUTO e NOTAFISCAL_ID de TB_ITEM_NOTA_FISCAL\n", knexres);

    // Update
    await knex('TB_ITEM_NOTA_FISCAL')
    .where('id', '=', '96') 
    .update({
        valor: 10.1
    })

    // Delete
    await knex('TB_ITEM_NOTA_FISCAL')
    .where('sequencial', '=', '3') 
    .del()
};
