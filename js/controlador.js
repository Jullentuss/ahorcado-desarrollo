function funcionInicial(){
    $("#btnBuscar").on('click', buscarPelicula);
}

function buscarPelicula(){
	var pelicula = $("#inputBuscador").val();
    console.log(pelicula);
    if (pelicula.length == 0) {
    	alert('Ingrese un nombre de película');
    } else {
    	cargarPelicula(pelicula);
    }
}

function cargarPelicula(nombre){
	console.log('Cargar película '+nombre);
	const apiKey = '42af3ea1';
	$.ajax({
		url: 'http://www.omdbapi.com/?apikey='+apiKey+'&s='+nombre,
		dataType: 'json',
		type: 'GET',
		success: (respuesta) => {
			console.log(respuesta);
			mostrarPelicula(respuesta.Search);
		},
		error: (respuestaError) => {
			console.log(respuestaError);
		}
	})
}
function mostrarPelicula(listado){
console.log(listado);
for(var peliculaListado of listado){
	console.log(peliculaListado)
}
}
/*const funcionInicial = () =>{
    console.log("Hola¡");
}*/