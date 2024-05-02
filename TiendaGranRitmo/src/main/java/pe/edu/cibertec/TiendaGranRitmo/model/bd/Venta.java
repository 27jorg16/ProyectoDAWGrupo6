package pe.edu.cibertec.TiendaGranRitmo.model.bd;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@Data
@Entity
@Table(name = "ventas")
public class Venta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idventa;
    @Column(name = "fecha")
    private Date fecha;
    @Column(name = "nombre")
    private Integer cantidad;
    @Column(name = "precio_unitario")
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
