package pe.edu.cibertec.TiendaGranRitmo.service;

import pe.edu.cibertec.TiendaGranRitmo.model.bd.Instrumento;

import java.util.List;

public interface IInstrumentoService {
    List<Instrumento> listInstrumento();

    void registerInstrumento(Instrumento instrumento);

    void deleteInstrumento(Integer idinstrumento);

}
