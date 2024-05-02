$(document).on("click", "#btnagregar", function(){
    $("#txtnomempleado").val("");
    $("#txtapeempleado").val("");
    $("#txtcargoempleado").val("");
    $("#txtsalarioempleado").val("");
    $("#hddempcod").val("0");
    $("#modalempleado").modal("show");
});

$(document).on("click", ".btnactualizar", function(){
    $("#txtnomempleado").val($(this).attr("data-empnom"));
    $("#txtapeempleado").val($(this).attr("data-empape"));
    $("#txtcargoempleado").val($(this).attr("data-empcargo"));
    $("#txtsalarioempleado").val($(this).attr("data-empsalario"));
    $("#hddempcod").val($(this).attr("data-empcod"));
    $("#modalempleado").modal("show");
});

$(document).on("click", "#btnguardar", function(){
    $.ajax({
        type: "POST",
        url: "/empleado/registerEmpleado",
        contentType: "application/json",
        data: JSON.stringify({
            idempleado: $("#hddempcod").val(),
            nombre: $("#txtnomempleado").val(),
            apellido: $("#txtapeempleado").val(),
            cargo: $("#txtcargoempleado").val(),
            salario: $("#txtsalarioempleado").val()
        }),
        success: function(resultado){
            if(resultado.respuesta){
                listarEmpleados();
                location.reload();
            }
            alert(resultado.mensaje);
        }
    });
    $("#modalempleado").modal("hide");
});

// Evento click para el botón eliminar
$(document).on("click", ".btneliminar", function(){
    var empleadoId = $(this).attr("data-empcod"); // Obtener el ID del empleado a eliminar
    $("#modalEliminarEmpleado").modal("show"); // Mostrar el modal de confirmación

    // Al confirmar la eliminación
    $("#btnConfirmarEliminar").unbind().click(function() {
        $.ajax({
            type: "DELETE",
            url: "/empleado/deleteEmpleado/" + empleadoId,
            success: function(resultado){
                if(resultado.respuesta){
                    listarEmpleados();
                    location.reload();
                }
                alert(resultado.mensaje);
            }
        });
        $("#modalEliminarEmpleado").modal("hide");
    });
});

function listarEmpleados(){
    $.ajax({
        type: "GET",
        url: "/empleado/list",
        dataType: "json",
        success: function(resultado){
            $("#tblempleado > tbody").html("");
            $.each(resultado, function(index, value){
                var newRow = $("<tr>");
                newRow.append(`<td>${value.idempleado}</td>`);
                newRow.append(`<td>${value.nombre}</td>`);
                newRow.append(`<td>${value.apellido}</td>`);
                newRow.append(`<td>${value.cargo}</td>`);
                newRow.append(`<td>${value.salario}</td>`);
                newRow.append(`<td><button type='button' class='btn btn-primary btnactualizar' ` +
                    `data-empcod="${value.idempleado}" ` +
                    `data-empnom="${value.nombre}" ` +
                    `data-empape="${value.apellido}" ` +
                    `data-empcargo="${value.cargo}" ` +
                    `data-empsalario="${value.salario}">Actualizar` +
                    `</button></td>`);
                newRow.append(`<td><button type='button' class='btn btn-danger btneliminarempleado' ` +
                    `data-empcod="${value.idempleado}">Eliminar` +
                    `</button></td>`);

                $("#tblempleado > tbody").append(newRow);
            });
        }
    });
}
