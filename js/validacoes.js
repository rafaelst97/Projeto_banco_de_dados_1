function validarEntradas(entrada) {

    let entradaValida = true;

    //nome

    if (entrada.nome == "" || entrada.nome == null) {
        ativarAlerta("#semNome");
        entradaValida = false;
    }else{
        desativarAlerta("#semNome");
    }

    if (entrada.nome.length > 50){
        ativarAlerta("#maximoCaracteres");
        entradaValida = false;
    }else{
        desativarAlerta("#maximoCaracteres");
    }


    if (entrada.unidade == "" || entrada.unidade == null) {
        ativarAlerta("#semUnidade");
        entradaValida = false;
    }else{
        desativarAlerta("#semUnidade");
    }

    if (entrada.preco == 0 || entrada.preco == "" || entrada.preco == null) {
        ativarAlerta("#semPreco");
        entradaValida = false;
    }else{
        desativarAlerta("#semPreco");
    }

    if (entrada.perecivel != "true" && entrada.perecivel != "false" && entrada.perecivel == null) {
        ativarAlerta("#semPerecivel");
        entradaValida = false;
    }else{
        desativarAlerta("#semPerecivel");
    }

    if(entrada.perecivel == "true" && (entrada.dataValidade == "" || entrada.dataValidade == null || isNaN(entrada.dataValidade))){
        ativarAlerta("#semValidade");
        entradaValida = false;
    }else{
        desativarAlerta("#semValidade");
    }

    if(entrada.dataFabricacao == "" || entrada.dataFabricacao == null || isNaN(entrada.dataFabricacao)){
        ativarAlerta("#semFabricacao");
        entradaValida = false;
    }else{
        desativarAlerta("#semFabricacao");
    }

    return entradaValida;
}

function validarEntradasFuncionario(entrada) {
    let entradaValida = true;

    if (entrada.nome == "" || entrada.nome == null) {
        ativarAlerta("#semNomeFuncionario");
        entradaValida = false;
    }else{
        desativarAlerta("#semNomeFuncionario");
    }

    if (entrada.cargo == "" || entrada.cargo == null) {
        ativarAlerta("#semCargo");
        entradaValida = false;
    }else{
        desativarAlerta("#semCargo");
    }

    if (entrada.setor == "" || entrada.setor == null) {
        ativarAlerta("#semSetor");
        entradaValida = false;
    }else{
        desativarAlerta("#semSetor");
    }

    if (entrada.nome.length > 50) {

        ativarAlerta("#maximoCaracteresFuncionario");
        entradaValida = false;
    }else{
        desativarAlerta("#maximoCaracteresFuncionario");
    }

    if (entrada.cargo.length > 50) {

        ativarAlerta("#maximoCaracteresCargo");
        entradaValida = false;
    }else{
        desativarAlerta("#maximoCaracteresCargo");
    }

    if (entrada.setor.length > 50) {

        ativarAlerta("#maximoCaracteresSetor");
        entradaValida = false;
    }else{
        desativarAlerta("#maximoCaracteresSetor");
    }

    return entradaValida;
}


$(document).on("change", "input[name='radioPerecivel']", function(){
    let valorRadio = $('input[name="radioPerecivel"]:checked').val();

    if(valorRadio == "true"){
        $("#validade").removeAttr("disabled");
    }else{
        $("#validade").attr("disabled", "disabled");
    }
})

$(document).on("change", "#unidade", function(){
    let quantidade = $("#quantidade");
    mascaraQuantidade(quantidade);
})

$(document).on("blur", "#quantidade", function(){
    let quantidade = $("#quantidade");
    mascaraQuantidade(quantidade);
})

function verificaQuantidadeVazia(string){
    if (string.charAt(0) == " " ){
        let retorno = `0 ${string}`

        return retorno;
    }else{
        return string;
    }
}

function verificaValidade(item){
    let validade;
    let fabricacao = item.dataFabricacao.getTime();
    let hoje = new Date();
    let itemValido = true;

    if (item.dataValidade != null){
        validade = item.dataValidade.getTime();
    }

    if(validade < fabricacao || validade < hoje){
        itemValido = false;
    }

    return itemValido;
}