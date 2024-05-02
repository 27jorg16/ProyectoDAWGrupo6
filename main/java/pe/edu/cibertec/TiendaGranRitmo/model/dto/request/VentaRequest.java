package pe.edu.cibertec.TiendaGranRitmo.model.dto.request;

import lombok.Data;

import java.util.Date;

@Data
public class VentaRequest {
    private Integer idventa;
    private Date fecha;
    private Integer cantidad;
    private Double precioUnitario;
    private Integer clienteId;
    private Integer empleadoId;
    private Integer instrumentoId;
}
