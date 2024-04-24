package pe.edu.cibertec.TiendaGranRitmo.model.BD;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
@Table(name = "instrumentos")
public class Instrumento {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String nombre;
    private String tipo;
    private Double precio;
    private Integer stock;
}
