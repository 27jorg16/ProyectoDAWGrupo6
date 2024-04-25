package pe.edu.cibertec.TiendaGranRitmo.service;

import pe.edu.cibertec.TiendaGranRitmo.model.BD.Instrumento;

import java.util.List;

public interface IInstrumentoService {

    List<Instrumento> listarInstrumentos();

    void registrarInstrumentos(Instrumento instrumento);
}
