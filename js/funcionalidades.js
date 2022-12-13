function salvar(edicao = false){

    let nome = $("#nome").val();
    let unidade = $("#unidade").val();
    let quantidade = $("#quantidade").val();
    let preco = $("#preco").val();
    let perecivel = $('input[name="radioPerecivel"]:checked').val();
    let dataValidade = new Date($("#validade").val());
    let dataFabricacao = new Date($("#fabricacao").val());
    let itensTabela = buscarDeLocalStorage("itensTabela");
        itensTabela = transformaJsonEmObjeto(itensTabela);
    let produtoValido;
    let validadeCorreta;

    let item ={
        nome: nome,
        unidade: unidade,
        quantidade: quantidade,
        preco: preco,
        perecivel: perecivel,
        dataValidade: dataValidade,
        dataFabricacao: dataFabricacao
    };

    if (edicao != false && item.perecivel == "false"){
        item.dataValidade = null;
    }

    produtoValido = validarEntradas(item);
    validadeCorreta = verificaValidade(item);
    item.quantidade = verificaQuantidadeVazia(item.quantidade);

    if(produtoValido == true && validadeCorreta == true){
        
        if (itensTabela == null){
            itensTabela = [];
        }

        if (edicao == false){
            itensTabela.push(item);
            modal("#itemSalvo");

        }else{
            let id = $("#itemEditado").val();
            updateProduto(item, id);
            itensTabela[id] = item;
            atualizaPagina();
        }

        if (edicao == false){
            inserirProduto(item);
        }

        itensTabela = transformarEmJson(itensTabela);
        salvarEmLocalStorage(itensTabela);

    }else if (validadeCorreta == false){
        modal("#itemVencido");
    }
}

function salvarFuncionario(edicao = false){
    let nome = $("#nomeFuncionario").val();
    let cargo = $("#cargo").val();
    let setor = $("#setor").val();
    let funcionariosTabela = buscarFuncionarioDeLocalStorage("funcionariosTabela");
        funcionariosTabela = transformaJsonEmObjeto(funcionariosTabela);

    let funcionario ={
        nome: nome,
        cargo: cargo,
        setor: setor
    };

    funcionarioValido = validarEntradasFuncionario(funcionario);

    if (funcionarioValido == true){

        if (funcionariosTabela == null){
            funcionariosTabela = [];
        }

        if (edicao == false){
            funcionariosTabela.push(funcionario);
            modal("#funcionarioSalvo");

        }else{
            let id = $("#funcionarioEditado").val();
            updateFuncionario(funcionario, id);
            funcionariosTabela[id] = funcionario;
            atualizaPagina();
        }

        if (edicao == false){
            insereFuncionario(funcionario);
        }

        funcionariosTabela = transformarEmJson(funcionariosTabela);
        salvarFuncionarioEmLocalStorage(funcionariosTabela);
    }
}

function preparaModal(id){
    $("#idExcluir").val(id);
}

function excluirItem(){
    let id = $("#idExcluir").val();
    let itensTabela = buscarDeLocalStorage("itensTabela");
    deletarProduto(id);
    itensTabela = transformaJsonEmObjeto(itensTabela);   
    itensTabela.splice(id, 1);
    itensTabela = transformarEmJson(itensTabela);
    salvarEmLocalStorage(itensTabela);
    modal("#avisoExcluido");
}

function excluirFuncionario(){
    let id = $("#idExcluir").val();
    let funcionariosTabela = buscarFuncionarioDeLocalStorage();
    funcionariosTabela = transformaJsonEmObjeto(funcionariosTabela);
    funcionariosTabela.splice(id, 1);
    funcionariosTabela = transformarEmJson(funcionariosTabela);
    salvarFuncionarioEmLocalStorage(funcionariosTabela);
    deletarFuncionario(id);
    modal("#avisoFuncionarioExcluido");
}

function editaItem(id){
    let itens = buscarDeLocalStorage();
    itens = transformaJsonEmObjeto(itens);
    $("#itemEditado").val(id);
    $("#nome").val(itens[id].nome);
    $("#unidade").val(itens[id].unidade);
    $("#quantidade").val(itens[id].quantidade);
    $("#preco").val(itens[id].preco);
    $("#fabricacao").val(converteDataParaISO(itens[id].dataFabricacao));
    $(`input[name=radioPerecivel][value=${itens[id].perecivel}]`).prop("checked", true);

    if (itens[id].dataValidade != null){
        $("#validade").val(converteDataParaISO(itens[id].dataValidade));
    }

    if (itens[id].perecivel == "true"){
        $("#validade").prop("disabled", false);
    }else{
        $("#validade").prop("disabled", true);
    }
}

function editaFuncionario(id){
    let funcionarios = buscarFuncionarioDeLocalStorage();
    funcionarios = transformaJsonEmObjeto(funcionarios);
    $("#funcionarioEditado").val(id);
    $("#nomeFuncionario").val(funcionarios[id].nome);
    $("#cargo").val(funcionarios[id].cargo);
    $("#setor").val(funcionarios[id].setor);
}