function transformarEmJson(objeto) {
    let retorno = JSON.stringify(objeto);

    return retorno;
}

function salvarEmLocalStorage(json) {
    localStorage.setItem("itensTabela", json);
}

function salvarFuncionarioEmLocalStorage(json) {
    localStorage.setItem("funcionarioTabela", json);
}

function buscarDeLocalStorage() {
    let retorno = localStorage.getItem("itensTabela");

    return retorno;
}

function buscarFuncionarioDeLocalStorage() {
    let retorno = localStorage.getItem("itensTabela");

    return retorno;
}

function buscarFuncionarioDeLocalStorage() {
    let retorno = localStorage.getItem("funcionarioTabela");

    return retorno;
}

function transformaJsonEmObjeto(json) {
    let retorno = JSON.parse(json);

    return retorno;
}