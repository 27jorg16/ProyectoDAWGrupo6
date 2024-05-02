$(document).on("click", "#btnagregar", function(){
    $("#txtnombre").val("");
    $("#txttipo").val("");
    $("#txtprecio").val("");
    $("#txtstock").val("");
    $("#hddinstrumentocod").val("0");
    $("#modalinstrumento").modal("show");
});

$(document).on("click", ".btnactualizar", function(){
    $("#txtnombre").val($(this).attr("data-nombre"));
    $("#txttipo").val($(this).attr("data-tipo"));
    $("#txtprecio").val($(this).attr("data-precio"));
    $("#txtstock").val($(this).attr("data-stock"));
    $("#hddinstrumentocod").val($(this).attr("data-instrcod"));
    $("#modalinstrumento").modal("show");
});

$(document).on("click", "#btnguardar", function(){
    $.ajax({
        type: "POST",
        url: "/instrumento/registerInstrumento",
        contentType: "application/json",
        data: JSON.stringify({
            idinstrumento: $("#hddinstrumentocod").val(),
            nombre: $("#txtnombre").val(),
            tipo: $("#txttipo").val(),
            precio: $("#txtprecio").val(),
            stock: $("#txtstock").val()
        }),
        success: function(resultado){
            if(resultado.respuesta){
                listarInstrumentos();
            }
            alert(resultado.mensaje);
        }
    });
    $("#modalinstrumento").modal("hide");
});

$(document).on("click", ".btneliminar", function(){
    var instrumentoId = $(this).attr("data-instrcod"); // Obtener el ID del instrumento a eliminar
    $("#modalEliminarInstrumento").modal("show"); // Mostrar el modal de confirmación

    // Al confirmar la eliminación
    $("#btnConfirmarEliminar").unbind().click(function() {
        $.ajax({
            type: "DELETE",
            url: "/instrumento/deleteInstrumento/" + instrumentoId,
            success: function(resultado){
                if(resultado.respuesta){
                    listarInstrumentos();
                    $("#modalEliminarInstrumento").modal("hide");
                }
                alert(resultado.mensaje);
            }
        });

    });
});

function listarInstrumentos(){
    $.ajax({
        type: "GET",
        url: "/instrumento/list",
        dataType: "json",
        success: function(resultado){
            $("#tblinstrumento > tbody").html("");
            $.each(resultado, function(index, value){
                var newRow = $("<tr>");
                newRow.append(`<td>${value.idinstrumento}</td>`);
                newRow.append(`<td>${value.nombre}</td>`);
                newRow.append(`<td>${value.tipo}</td>`);
                newRow.append(`<td>${value.precio}</td>`);
                newRow.append(`<td>${value.stock}</td>`);
                newRow.append(`<td><button type='button' class='btn btn-primary btnactualizar' ` +
                    `data-instrcod="${value.idinstrumento}" ` +
                    `data-nombre="${value.nombre}" ` +
                    `data-tipo="${value.tipo}" ` +
                    `data-precio="${value.precio}" ` +
                    `data-stock="${value.stock}">Actualizar</button></td>`);

                newRow.append(`<td><button type='button' class='btn btn-danger btneliminarinstrumento' ` +
                    `data-instrcod="${value.idinstrumento}">Eliminar</button></td>`);
                $("#tblinstrumento > tbody").append(newRow);
            });
        }
    });
}
