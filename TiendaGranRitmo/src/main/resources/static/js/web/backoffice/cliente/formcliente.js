$(document).on("click", "#btnagregar", function(){
    $("#txtnomcliente").val("");
    $("#txtapecliente").val("");
    $("#txtdircliente").val("");
    $("#txttelcliente").val("");
    $("#hddcliecod").val("0");
    $("#modalcliente").modal("show");
});

$(document).on("click", ".btnactualizar", function(){
    $("#txtnomcliente").val($(this).attr("data-clienom"));
    $("#txtapecliente").val($(this).attr("data-clieape"));
    $("#txtdircliente").val($(this).attr("data-cliedir"));
    $("#txttelcliente").val($(this).attr("data-clietel"));
    $("#hddcliecod").val($(this).attr("data-cliecod"));
    $("#modalcliente").modal("show");
});

$(document).on("click", "#btnguardar", function(){
    $.ajax({
        type: "POST",
        url: "/cliente/registerCliente",
        contentType: "application/json",
        data: JSON.stringify({
            idcliente: $("#hddcliecod").val(),
            nombre: $("#txtnomcliente").val(),
            apellido: $("#txtapecliente").val(),
            direccion: $("#txtdircliente").val(),
            telefono: $("#txttelcliente").val()
        }),
        success: function(resultado){
            if(resultado.respuesta){
                listarClientes();
                location.reload();
            }
            alert(resultado.mensaje);
        }
    });
    $("#modalcliente").modal("hide");
});

// Evento click para el botón eliminar
$(document).on("click", ".btneliminar", function(){
    var clienteId = $(this).attr("data-cliecod"); // Obtener el ID del cliente a eliminar
    $("#modalEliminarCliente").modal("show"); // Mostrar el modal de confirmación

    // Al confirmar la eliminación
    $("#btnConfirmarEliminar").unbind().click(function() {
        $.ajax({
            type: "DELETE",
            url: "/cliente/deleteCliente/" + clienteId,
            success: function(resultado){
                if(resultado.respuesta){
                    listarClientes();
                    location.reload();
                }
                alert(resultado.mensaje);
            }
        });
        $("#modalEliminarCliente").modal("hide");
    });
});
function listarClientes(){
    $.ajax({
        type: "GET",
        url: "/cliente/list",
        dataType: "json",
        success: function(resultado){
            $("#tblcliente > tbody").html("");
            $.each(resultado, function(index, value){
                var newRow = $("<tr>");
                newRow.append(`<td>${value.idcliente}</td>`);
                newRow.append(`<td>${value.nombre}</td>`);
                newRow.append(`<td>${value.apellido}</td>`);
                newRow.append(`<td>${value.direccion}</td>`);
                newRow.append(`<td>${value.telefono}</td>`);
                newRow.append(`<td><button type='button' class='btn btn-primary btnactualizar' ` +
                    `data-cliecod="${value.idcliente}" ` +
                    `data-clienom="${value.nombre}" ` +
                    `data-clieape="${value.apellido}" ` +
                    `data-cliedir="${value.direccion}" ` +
                    `data-clietel="${value.telefono}">Actualizar` +
                    `</button></td>`);
                newRow.append(`<td><button type='button' class='btn btn-outline-danger btneliminar' ` +
                    `data-cliecod="${value.idcliente}">Eliminar` +
                    `</button></td>`);

                $("#tblcliente > tbody").append(newRow);
            });
        }
    });
}

