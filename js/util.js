function atualizaPagina(){
    location.reload();
}

function converteDataParaString(data){
	let dataRetorno = new Date(data);
	dataRetorno = ("0" + (dataRetorno.getDate() + 1)).slice(-2) + "/" + ("0" + (dataRetorno.getMonth() + 1)).slice(-2) + "/" + dataRetorno.getFullYear();

	return dataRetorno;
}

function converteDataParaISO(data){
	let dataRetorno = new Date(data);
	dataRetorno = dataRetorno.toISOString().substring(0, 10);

	return dataRetorno;
}