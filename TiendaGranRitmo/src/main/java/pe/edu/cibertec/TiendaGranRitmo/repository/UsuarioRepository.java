package pe.edu.cibertec.TiendaGranRitmo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.cibertec.TiendaGranRitmo.model.BD.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    Usuario findbyUsername(String username);
}
