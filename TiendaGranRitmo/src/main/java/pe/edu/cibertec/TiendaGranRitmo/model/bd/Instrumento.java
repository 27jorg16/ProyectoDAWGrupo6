package pe.edu.cibertec.TiendaGranRitmo.model.bd;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "instrumentos")
public class Instrumento {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idinstrumento;
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "tipo")
    private String tipo;
    @Column(name = "precio")
    private Double precio;
    @Column(name = "stock")
    private Integer stock;
}
