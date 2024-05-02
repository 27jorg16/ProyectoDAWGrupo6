$(document).on("click", "#btnagregar", function(){
    $("#txtnominstrumento").val("");
    $("#txttipoinstrumento").val("");
    $("#txtprecioinstrumento").val("");
    $("#txtstockinstrumento").val("");
    $("#hddinstcod").val("0"); // Variable corregida: 'hddinstcod' en lugar de 'hddinstrumentocod'
    $("#modalinstrumento").modal("show");
});

$(document).on("click", ".btnactualizar", function(){
    $("#txtnominstrumento").val($(this).attr("data-instnom"));
    $("#txttipoinstrumento").val($(this).attr("data-insttipo"));
    $("#txtprecioinstrumento").val($(this).attr("data-instprecio"));
    $("#txtstockinstrumento").val($(this).attr("data-inststock"));
    $("#hddinstcod").val($(this).attr("data-instcod"));
    $("#modalinstrumento").modal("show");
});


$(document).on("click", "#btnguardar", function(){
    $.ajax({
        type: "POST",
        url: "/instrumento/registerInstrumento",
        contentType: "application/json",
        data: JSON.stringify({
            idinstrumento: $("#hddinstcod").val(),
            nombre: $("#txtnominstrumento").val(),
            tipo: $("#txttipoinstrumento").val(),
            precio: $("#txtprecioinstrumento").val(),
            stock: $("#txtstockinstrumento").val()
        }),
        success: function(resultado){
            if(resultado.respuesta){
                listarInstrumentos();
                location.reload();
            }
            alert(resultado.mensaje);
        }
    });
    $("#modalinstrumento").modal("hide");
});

$(document).on("click", ".btneliminar", function(){
    var instrumentoId = $(this).attr("data-instcod"); // Variable corregida: 'data-instcod' en lugar de 'data-instrcod'
    $("#modalEliminarInstrumento").modal("show");

    $("#btnConfirmarEliminar").unbind().click(function() {
        $.ajax({
            type: "DELETE",
            url: "/instrumento/deleteInstrumento/" + instrumentoId,
            success: function(resultado){
                if(resultado.respuesta){
                    listarInstrumentos();
                    location.reload();

                }
                alert(resultado.mensaje);
            }
        });
        $("#modalEliminarInstrumento").modal("hide");
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
                    `data-instcod="${value.idinstrumento}" ` +
                    `data-nombre="${value.nombre}" ` +
                    `data-tipo="${value.tipo}" ` +
                    `data-precio="${value.precio}" ` +
                    `data-stock="${value.stock}">Actualizar</button></td>`);
                newRow.append(`<td><button type='button' class='btn btn-danger btneliminarinstrumento' ` +
                    `data-instcod="${value.idinstrumento}">Eliminar</button></td>`);
                $("#tblinstrumento > tbody").append(newRow);
            });
        }
    });
}
