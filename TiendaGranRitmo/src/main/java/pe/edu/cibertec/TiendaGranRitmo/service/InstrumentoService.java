package pe.edu.cibertec.TiendaGranRitmo.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Instrumento;
import pe.edu.cibertec.TiendaGranRitmo.repository.InstrumentoRepository;

import java.util.List;

@AllArgsConstructor
@Service
public class InstrumentoService implements IInstrumentoService{
    private InstrumentoRepository instrumentoRepository;
    @Override
    public List<Instrumento> listInstrumento() {
        return instrumentoRepository.findAll();
    }

    @Override
    public void registerInstrumento(Instrumento instrumento) {
        instrumentoRepository.save(instrumento);
    }
}
