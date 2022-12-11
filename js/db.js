var db = openDatabase('banco', '1.0', 'banco de dados', 2097152);
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS produtos (nome TEXT, unidade_medida TEXT, quantidade TEXT, preco TEXT, perecivel TINYINT, data_validade DATE, data_fabricacao DATE)');
});

function inserirProduto(objeto) {
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO produtos (nome, unidade_medida, quantidade, preco, perecivel, data_validade, data_fabricacao) VALUES (?,?,?,?,?,?,?)', [objeto.nome, objeto.unidade, objeto.quantidade, objeto.preco, objeto.perecivel, objeto.dataValidade, objeto.dataFabricacao]);
    });
}

function selectTodosProdutos() {
    let array = new Array();
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM produtos', [], function (tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                let item ={
                    nome: results.rows.item(i).nome,
                    unidade: results.rows.item(i).unidade_medida,
                    quantidade: results.rows.item(i).quantidade,
                    preco: results.rows.item(i).preco,
                    perecivel: results.rows.item(i).perecivel,
                    dataValidade: new Date (results.rows.item(i).data_validade),
                    dataFabricacao: new Date (results.rows.item(i).data_fabricacao)
                }
                array.push(item);
            }
            console.log(array);
            return transformarEmJson(array); 
        });
    });
}
 
function deletarProduto(id) {
    db.transaction(function (tx) {
        tx.executeSql('DELETE FROM produtos WHERE rowid = ?', [id+1]);
    });

    console.log(`Produto de código ${id} deletado com sucesso!`);
}