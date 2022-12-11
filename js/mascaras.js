function mascaraReal(elemento){
	let valor = elemento.value.replace(/\D/g,'');
	valor = (valor/100).toFixed(2) + '';
	valor = valor.replace(".", ",");
	valor = valor.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
	valor = valor.replace(/(\d)(\d{3}),/g, "$1.$2,");
	elemento.value = 'R$' +  valor;
}

function mascaraQuantidade(elemento){
	let unidade = $('#unidade').val()
    let quantidade = $('#quantidade').val();
    quantidade = quantidade.replace(/\D/g, "");

    if (quantidade == ""){
        quantidade = "0";
    }


	switch(unidade){
		case 'Litro':
            quantidade = mascaraTresDecimos(quantidade);
            $("#quantidade").val(quantidade + " Lt.");
			$("#quantidade").attr("placeholder", "0 Lt.");
			break
		case 'Quilograma':
            quantidade = mascaraTresDecimos(quantidade);
			$("#quantidade").val(quantidade + " Kg.");
			$("#quantidade").attr("placeholder", "0 Kg.");
			break
		case 'Unidade':
            quantidade = mascaraSemDecimais(quantidade);
			$("#quantidade").val(quantidade + " Un.");
			$("#quantidade").attr("placeholder", "0 Un.");
			break
	}
}

function mascaraTresDecimos(quantidade){
    quantidade = (quantidade/1000).toFixed(3);
    quantidade = quantidade.replace(".", ",");
    quantidade = quantidade.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    quantidade = quantidade.replace(/(\d)(\d{3}),/g, "$1.$2,");

    return quantidade;
}

function mascaraSemDecimais(quantidade){
    quantidade = (Number(quantidade)).toLocaleString('pt-BR', {style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0});

    return quantidade;
}