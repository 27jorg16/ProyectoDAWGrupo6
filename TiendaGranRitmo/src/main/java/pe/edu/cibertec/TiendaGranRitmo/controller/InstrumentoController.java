package pe.edu.cibertec.TiendaGranRitmo.controller;

import lombok.AllArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pe.edu.cibertec.TiendaGranRitmo.service.IInstrumentoService;

@AllArgsConstructor
@RestController
@RequestMapping(path = "api/instrumento")
public class InstrumentoController {
    private IInstrumentoService iInstrumentoService;

    @RequestMapping("")
    public String listarInstrumento(Model model){
        model.addAttribute("instrumentos", iInstrumentoService.listarInstrumentos());
        return "backoffice/instrumento/frminstrumentos";
    }
}
