$("#enviar").off("click");
$("#enviar").on("click", function(e) {
    $('enviar').attr("disabled", true);
    var nombre = $("#nombre").val();
    var costo = $("#costo").val();
    var precio = $("#precio").val();
    var stock = $("#stock").val();
    var Stock_minimo = $("#Stock_minimo").val();
   
    parametros = {
        'nombre': nombre,
        'costo': costo,
        'precio': precio,
        'precio': precio,
        'stock': stock,
        'Stock_minimo': Stock_minimo
    };
    $.ajax({
        type: "POST",
        url: "recibe_producto_ajax.php",
        data: parametros,
        beforeSend: function(objeto) {
            $("#Msg").html('Cargando...');
        },
        success: function(datos) {
            $("#Msg").html(datos);
            $('#enviar').attr("disabled", false);
            $('#nombre').val(''),
            $('#costo').val(''),
            $('#precio').val(''),
            $('#stock').val(''),
            $('#Stock_minimo').val('')
        }
    });
    event.preventDefault();
});
