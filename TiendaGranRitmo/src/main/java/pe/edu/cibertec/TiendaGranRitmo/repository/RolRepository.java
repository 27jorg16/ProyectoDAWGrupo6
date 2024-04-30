package pe.edu.cibertec.TiendaGranRitmo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.cibertec.TiendaGranRitmo.model.BD.Rol;

public interface RolRepository extends JpaRepository<Rol,Integer> {
    Rol findByNomRol(String nomrol);
}
