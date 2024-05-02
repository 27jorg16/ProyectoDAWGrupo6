$(document).on("click", "#btnagregar", function(){
    $("#txtfecha").val("");
    $("#txtcantidad").val("");
    $("#txtprecio_unitario").val("");
    listarClienteProductoInstrumento(0, 0, 0);
    $("#hddventacod").val("0");
    $("#modalventa").modal("show");
});

$(document).on("click", ".btnactualizar", function(){
    $("#txtfecha").val($(this).attr("data-ventafecha"));
    $("#txtcantidad").val($(this).attr("data-ventacantidad"));
    $("#txtprecio_unitario").val($(this).attr("data-ventaprecio"));
    $("#cboclienteventa").empty();
    $("#cboempleadoventa").empty();
    $("#cboinstrumentoventa").empty();
    listarClienteProductoInstrumento($(this).attr("data-ventacliente"),
                                          $(this).attr("data-ventainstrumento"),
                                          $(this).attr("data-ventaempleado"));
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
                idcliente: $("#cboclienteventa").val()
            },
            empleado: {
                idempleado: $("#cboempleadoventa").val()
            },
            instrumento: {
                idinstrumento: $("#cboinstrumentoventa").val()
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
            $.each(resultado, function(index, value){
                $("#cboclienteventa").append(
                    `<option value="${value.idcliente}">${cliente.nombre}</option>`
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
                    $.each(resultado, function(index, value){
                        $("#cboempleadoventa").append(
                            `<option value="${value.idempleado}">${empleado.nombre}</option>`
                        );
                    });
                    if(idProducto > 0){
                        $("#cboempleadoventa").val(idEmpleado);
                    }
                    $.ajax({
                        type: "GET",
                        url: "/instrumento/get",
                        dataType: "json",
                        success: function(resultado){
                            $.each(resultado, function(index, value){
                                $("#cboinstrumento").append(
                                    `<option value="${value.idinstrumento}">${instrumento.nombre}</option>`
                                );
                            });
                            if(idInstrumento > 0){
                                $("#cboinstrumento").val(idInstrumento);
                            }
                        }
                    });
                }
            });
        }
    });
}

