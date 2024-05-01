package pe.edu.cibertec.TiendaGranRitmo.model.dto.request;

import lombok.Data;

@Data
public class EmpleadoRequest {
    private Integer idempleado;
    private String nombre;
    private String apellido;
    private String cargo;
    private double salario;
}
