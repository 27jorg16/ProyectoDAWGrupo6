package pe.edu.cibertec.TiendaGranRitmo.service;

import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;
import pe.edu.cibertec.TiendaGranRitmo.model.BD.Instrumento;
import pe.edu.cibertec.TiendaGranRitmo.repository.InstrumentoRepository;

import java.util.List;

@NoArgsConstructor
@Service
public class InstrumentoService implements IInstrumentoService{
    private InstrumentoRepository instrumentoRepository;

    @Override
    public List<Instrumento> listarInstrumentos() {
        return instrumentoRepository.findAll();
    }

    @Override
    public void registrarInstrumentos(Instrumento instrumento) {
        instrumentoRepository.save(instrumento);
    }
}
