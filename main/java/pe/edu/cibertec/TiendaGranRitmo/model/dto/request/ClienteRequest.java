package pe.edu.cibertec.TiendaGranRitmo.model.dto.request;

import lombok.Data;

@Data
public class ClienteRequest {
    private Integer idcliente;
    private String nombre;
    private String apellido;
    private String direccion;
    private String telefono;
}
