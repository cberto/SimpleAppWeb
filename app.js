function cargarDatos() {
    //    console.log('Cargando datos...');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // console.log('Entro al IF');        	
            // document.getElementById("texto1").innerHTML = this.responseText;
            document.getElementById("texto1").value = this.responseText;
           // document.getElementById("respuesta").innerHTML = this.responseText;
        } else {
            console.log("no entro al IF!");
        }
    };
    xhttp.open("GET", "data.txt", true);
    xhttp.send();
}