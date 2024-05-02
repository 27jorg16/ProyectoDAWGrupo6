package pe.edu.cibertec.TiendaGranRitmo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Instrumento;

@Repository
public interface InstrumentoRepository extends JpaRepository<Instrumento,Integer> {
}
