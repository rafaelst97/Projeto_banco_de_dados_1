var db = openDatabase('banco', '1.0', 'banco de dados', 2097152);
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS produtos (nome TEXT, unidade_medida TEXT, quantidade TEXT, preco TEXT, perecivel TINYINT, data_validade DATE, data_fabricacao DATE)');
});

function inserirProduto(objeto) {

    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO produtos (nome, unidade_medida, quantidade, preco, perecivel, data_validade, data_fabricacao) VALUES (?,?,?,?,?,?,?)', [objeto.nome, objeto.unidade, objeto.quantidade, objeto.preco, objeto.perecivel, objeto.dataValidade, objeto.dataFabricacao]);
    });
}
    