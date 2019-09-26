$(document).ready(function() {
    console.log("jquery y la web caergados");


    var variable = $("#usuario");
    console.log(variable);
    var valor_usuario = $("#usuario").val();


    console.log(valor_usuario);
    $("#boton").click(function() {
        alert($("#usuario").val());
    });


});