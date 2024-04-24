package pe.edu.cibertec.TiendaGranRitmo.model.BD;

import jakarta.persistence.*;

import lombok.Data;


@Data
@Entity
@Table(name = "clientes")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String nombre;
    private String apellido;
    private String direccion;
    private String telefono;
}
