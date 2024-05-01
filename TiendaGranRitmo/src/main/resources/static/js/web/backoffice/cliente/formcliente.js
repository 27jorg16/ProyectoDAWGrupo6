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
            }
            alert(resultado.mensaje);
        }
    });
    $("#modalcliente").modal("hide");
});

function listarClientes(){
    $.ajax({
        type: "GET",
        url: "/cliente/list",
        dataType: "json",
        success: function(resultado){
            $("#tblcliente > tbody").html("");
            $.each(resultado, function(index, value){
                $("#tblcliente > tbody").append(`<tr>`+
                `<td>${value.idcliente}</td>`+
                `<td>${value.nombre}</td>`+
                `<td>${value.apellido}</td>`+
                `<td>${value.direccion}</td>`+
                `<td>${value.telefono}</td>`+
                `<td><button type='button' class='btn btn-primary btnactualizar' `+
                    `data-cliecod="${value.idcliente}" `+
                    `data-clienom="${value.nombre}" `+
                    `data-clieape="${value.apellido}" `+
                    `data-cliedir="${value.direccion}" `+
                    `data-clietel="${value.telefono}">Actualizar`+
                `</button></td>`+
                `</tr>`);
            });
        }
    });
}
