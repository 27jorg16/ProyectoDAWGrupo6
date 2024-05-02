$(document).on("click", "#btnagregar", function(){
    $("#txtfechaventa").val("");
    $("#txtcantidadventa").val("");
    $("#txtprecioventa").val("");
    listarClienteProductoInstrumento(0, 0, 0);
    $("#hddventacod").val("0");
    $("#modalventa").modal("show");
});

$(document).on("click", ".btnactualizar", function(){
    $("#txtfechaventa").val($(this).attr("data-ventafecha").substring(0, 10));
    $("#txtcantidadventa").val($(this).attr("data-ventacantidad"));
    $("#txtprecioventa").val($(this).attr("data-ventaprecio"));
    $("#cboclienteventa").empty();
    $("#cboempleadoventa").empty();
    $("#cboinstrumentoventa").empty();
    listarClienteProductoInstrumento($(this).attr("data-ventacliente"),
                                          $(this).attr("data-ventaempleado"),
                                          $(this).attr("data-ventainstrumento"));
    $("#hddventacod").val($(this).attr("data-ventacod"));
    $("#modalventa").modal("show");
});

$(document).on("click", "#btnguardar", function(){
    $.ajax({
        type: "POST",
        url: "/venta/register",
        contentType: "application/json",
        data: JSON.stringify({
            idventa: $("#hddventacod").val(),
            fecha: $("#txtfechaventa").val(),
            cantidad: $("#txtcantidadventa").val(),
            precioUnitario: $("#txtprecioventa").val(),
            clienteId: $("#cboclienteventa").val(),
            empleadoId: $("#cboempleadoventa").val(),
            instrumentoId: $("#cboinstrumentoventa").val()
        }),
        success: function(resultado){
            if(resultado.respuesta){
                listarVentas();
                location.reload();
            }
            alert(resultado.mensaje);
        }
    });
    $("#modalventa").modal("hide");
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
listarClienteProductoInstrumento(0, 0, 0);

function listarClienteProductoInstrumento(idCliente, idEmpleado, idInstrumento){
    $.ajax({
        type: "GET",
        url: "/cliente/get",
        dataType: "json",
        success: function(resultado){
            $("#cboclienteventa").empty();
            $.each(resultado, function(index, value){
                $("#cboclienteventa").append(
                    `<option value="${value.idcliente}">${value.nombre}</option>`
                );
            });
            if(idCliente > 0){
                $("#cboclienteventa").val(idCliente);
            }
            $.ajax({
                type: "GET",
                url: "/empleado/get",
                dataType: "json",
                success: function(resultado){
                    $("#cboempleadoventa").empty();
                    $.each(resultado, function(index, value){
                        $("#cboempleadoventa").append(
                            `<option value="${value.idempleado}">${value.nombre}</option>`
                        );
                    });
                    if(idEmpleado > 0){
                        $("#cboempleadoventa").val(idEmpleado);
                    }
                    $.ajax({
                        type: "GET",
                        url: "/instrumento/get",
                        dataType: "json",
                        success: function(resultado){
                            $("#cboinstrumentoventa").empty();
                            $.each(resultado, function(index, value){
                                $("#cboinstrumentoventa").append(
                                    `<option value="${value.idinstrumento}">${value.nombre}</option>`
                                );
                            });
                            if(idInstrumento > 0){
                                $("#cboinstrumentoventa").val(idInstrumento);
                            }
                        }
                    });
                }
            });
        }
    });
}

