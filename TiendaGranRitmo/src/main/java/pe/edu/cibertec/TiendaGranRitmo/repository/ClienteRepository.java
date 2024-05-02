package pe.edu.cibertec.TiendaGranRitmo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente,Integer> {
    void deleteByIdcliente(Integer idcliente);
}
