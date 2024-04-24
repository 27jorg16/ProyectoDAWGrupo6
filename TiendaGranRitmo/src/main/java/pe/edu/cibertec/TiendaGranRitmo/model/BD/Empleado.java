package pe.edu.cibertec.TiendaGranRitmo.model.BD;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name = "empleados")
public class Empleado {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String nombre;
    private String apellido;
    private String cargo;
    private double salario;
}
