package pe.edu.cibertec.TiendaGranRitmo.model.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class EmpleadoResponse {
    private Boolean respuesta;
    private String mensaje;
}
