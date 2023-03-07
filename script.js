function decirHola () {
    var nombre =
        document.getElementById("nombre").value;
    var apellido =
        document.getElementById("apellido").value;
        
        var mensaje = "Hola " + nombre + " " + apellido + "! ¿Cómo estás?";

        document
            .getElementById("content")
            .textContent = mensaje;

}
