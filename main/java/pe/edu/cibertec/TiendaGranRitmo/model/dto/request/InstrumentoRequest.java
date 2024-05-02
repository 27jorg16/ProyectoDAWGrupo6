package pe.edu.cibertec.TiendaGranRitmo.model.dto.request;

import lombok.Data;

@Data
public class InstrumentoRequest {
    private Integer idinstrumento;
    private String nombre;
    private String tipo;
    private Double precio;
    private Integer stock;
}
