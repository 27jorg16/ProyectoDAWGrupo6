$(document).on("click", "#btnagregar", function(){
    $("#txtfecha").val("");
    $("#txtcantidad").val("");
    $("#txtprecio_unitario").val("");
    $("#cmbcliente").val("");
    $("#cmbempleado").val("");
    $("#cmbinstrumento").val("");
    $("#hddventacod").val("0");
    $("#modalventa").modal("show");
});

$(document).on("click", ".btnactualizar", function(){
    $("#txtfecha").val($(this).attr("data-ventafecha"));
    $("#txtcantidad").val($(this).attr("data-ventacantidad"));
    $("#txtprecio_unitario").val($(this).attr("data-ventaprecio"));
    $("#cmbcliente").val($(this).attr("data-ventacliente"));
    $("#cmbempleado").val($(this).attr("data-ventaempleado"));
    $("#cmbinstrumento").val($(this).attr("data-ventainstrumento"));
    $("#hddventacod").val($(this).attr("data-ventacod"));
    $("#modalventa").modal("show");
});

$(document).on("click", "#btnguardar", function(){
    $.ajax({
        type: "POST",
        url: "/venta/registerVenta",
        contentType: "application/json",
        data: JSON.stringify({
            idventa: $("#hddventacod").val(),
            fecha: $("#txtfecha").val(),
            cantidad: $("#txtcantidad").val(),
            precio_unitario: $("#txtprecio_unitario").val(),
            cliente: {
                idcliente: $("#cmbcliente").val()
            },
            empleado: {
                idempleado: $("#cmbempleado").val()
            },
            instrumento: {
                idinstrumento: $("#cmbinstrumento").val()
            }
        }),
        success: function(resultado){
            if(resultado.respuesta){
                listarVentas();
            }
            alert(resultado.mensaje);
        }
    });
    $("#modalventa").modal("hide");
});

// Evento click para el botón eliminar
$(document).on("click", ".btneliminarventa", function(){
    var ventaId = $(this).attr("data-ventacod"); // Obtener el ID de la venta a eliminar
    $("#modalEliminarVenta").modal("show"); // Mostrar el modal de confirmación

    // Al confirmar la eliminación
    $("#btnConfirmarEliminarVenta").unbind().click(function() {
        $.ajax({
            type: "DELETE",
            url: "/venta/deleteVenta/" + ventaId,
            success: function(resultado){
                if(resultado.respuesta){
                    listarVentas();
                }
                alert(resultado.mensaje);
            }
        });
    });
});

function listarVentas(){
    $.ajax({
        type: "GET",
        url: "/venta/list",
        dataType: "json",
        success: function(resultado){
            $("#tblventa > tbody").html("");
            $.each(resultado, function(index, value){
                var newRow = $("<tr>");
                newRow.append(`<td>${value.idventa}</td>`);
                newRow.append(`<td>${value.fecha}</td>`);
                newRow.append(`<td>${value.cantidad}</td>`);
                newRow.append(`<td>${value.precio_unitario}</td>`);
                newRow.append(`<td>${value.cliente.nombre}</td>`);
                newRow.append(`<td>${value.empleado.nombre}</td>`);
                newRow.append(`<td>${value.instrumento.nombre}</td>`);
                newRow.append(`<td><button type='button' class='btn btn-primary btnactualizar' ` +
                    `data-ventacod="${value.idventa}" ` +
                    `data-ventafecha="${value.fecha}" ` +
                    `data-ventacantidad="${value.cantidad}" ` +
                    `data-ventaprecio="${value.precio_unitario}" ` +
                    `data-ventacliente="${value.cliente.idcliente}" ` +
                    `data-ventaempleado="${value.empleado.idempleado}" ` +
                    `data-ventainstrumento="${value.instrumento.idinstrumento}">Actualizar` +
                    `</button></td>`);

                newRow.append(`<td><button type='button' class='btn btn-danger btneliminarventa' ` +
                    `data-ventacod="${value.idventa}">Eliminar` +
                    `</button></td>`);

                $("#tblventa > tbody").append(newRow);
            });
        }
    });
}
