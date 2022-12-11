function ativarAlerta(elemento){
    $(elemento).addClass("d-inline-flex");
}

function desativarAlerta(elemento){
    $(elemento).removeClass("d-inline-flex");
}

function modal(elemento){
    $(elemento).modal("show");
}