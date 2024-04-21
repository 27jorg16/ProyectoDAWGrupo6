package pe.edu.cibertec.TiendaGranRitmo.model.BD;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
@Entity
@Table(name = "ventas")
public class Venta {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Date fecha;
    private Integer cantidad;
    private Double precio_unitario;
    @ManyToOne
    @JoinColumn(name = "clienteid")
    private Cliente cliente;
    @ManyToOne
    @JoinColumn(name = "empleadoid")
    private Empleado empleado;
    @ManyToOne
    @JoinColumn(name = "instrumentoid")
    private Instrumento instrumento;
}
