$(document).on("click", "#btnagregar", function(){
    $("#txtnombre").val("");
    $("#txtapellido").val("");
    $("#txtemail").val("");
    $("#txtemail").prop('readonly', false);
    $("#txtusuario").val("");
    $("#txtusuario").prop('readonly', false);
    $("#hddidusuario").val("0");
    $("#switchusuario").hide();
    $("#cbactivo").prop("checked", false);
    $("#cbactivo").prop("disabled", false); // Habilitar la casilla de verificación
    $("#divmsgpassword").show();
    $("#btnenviar").hide();
    $("#modalusuario").modal("show");
});

$(document).on("click", ".btnactualizar", function(){
    $.ajax({
        type: "GET",
        url: "/seguridad/usuario/"+$(this).attr("data-usuid"),
        dataType: "json",
        success: function(resultado){
           $("#txtnombre").val(resultado.nombres);
           $("#txtapellido").val(resultado.apellidos);
           $("#txtemail").val(resultado.email);
           $("#txtemail").prop('readonly', true);
           $("#txtusuario").val(resultado.nomusuario);
           $("#txtusuario").prop('readonly', true);
           $("#hddidusuario").val(resultado.idusuario);
           $("#switchusuario").show();
           $("#divmsgpassword").hide();
           $("#btnenviar").show();

           // Modificar el estado de la casilla de verificación
           $("#cbactivo").prop("checked", resultado.activo);
           $("#cbactivo").prop("disabled", false); // Habilitar la modificación
        }
    })
    $("#modalusuario").modal("show");
})

$(document).on("click", "#btnguardar", function(){
    $.ajax({
        type: "POST",
        url: "/seguridad/usuario/registrar",
        contentType: "application/json",
        data: JSON.stringify({
            idusuario: $("#hddidusuario").val(),
            nomusuario: $("#txtusuario").val(),
            nombres: $("#txtnombre").val(),
            apellidos: $("#txtapellido").val(),
            email: $("#txtemail").val(),
            activo: $("#cbactivo").prop("checked")
        }),
        success: function(resultado){
            if(resultado.respuesta){
                listarUsuarios()
            }
            alert(resultado.mensaje);
        }
    });
    $("#modalusuario").modal("hide");
});

function listarUsuarios(){
    $.ajax({
        type: "GET",
        url: "/seguridad/usuario/lista",
        dataType: "json",
        success: function(resultado){
            $("#tblusuario > tbody").html("");
            $.each(resultado, function(index, value){
                // Generar una fila de tabla para cada usuario
                var fila = $("<tr>");
                fila.append($("<td>").text(value.nombres));
                fila.append($("<td>").text(value.apellidos));
                fila.append($("<td>").text(value.nomusuario));
                fila.append($("<td>").text(value.email));

                // Crear la casilla de verificación para "Activo"
                var activoCheckbox = $("<input>").attr({
                    type: "checkbox",
                    disabled: true // Deshabilitar la modificación inicialmente
                }).prop("checked", value.activo);

                // Agregar la casilla de verificación a la fila de la tabla
                fila.append($("<td>").append(activoCheckbox));

                // Agregar botón de "Actualizar" a la fila de la tabla
                var actualizarBtn = $("<button>").addClass("btn btn-primary btnactualizar")
                                    .attr("data-usuid", value.idusuario)
                                    .text("Actualizar");
                fila.append($("<td>").append(actualizarBtn));

                // Agregar la fila a la tabla de usuarios
                $("#tblusuario > tbody").append(fila);
            });
        }
    });
}
