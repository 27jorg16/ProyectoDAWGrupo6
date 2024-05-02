package pe.edu.cibertec.TiendaGranRitmo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Venta;

@Repository
public interface VentaRepository extends JpaRepository<Venta,Integer> {
}
