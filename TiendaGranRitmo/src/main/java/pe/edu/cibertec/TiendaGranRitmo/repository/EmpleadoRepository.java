package pe.edu.cibertec.TiendaGranRitmo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.cibertec.TiendaGranRitmo.model.BD.Empleado;

@Repository
public interface EmpleadoRepository extends JpaRepository<Empleado,Integer> {
}
