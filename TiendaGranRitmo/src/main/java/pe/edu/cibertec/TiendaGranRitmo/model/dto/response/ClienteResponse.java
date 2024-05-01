package pe.edu.cibertec.TiendaGranRitmo.model.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ClienteResponse {
    private Boolean respuesta;
    private  String mensaje;
}
