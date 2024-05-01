package pe.edu.cibertec.TiendaGranRitmo.controller.backoffice;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Instrumento;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Venta;
import pe.edu.cibertec.TiendaGranRitmo.model.dto.request.InstrumentoRequest;
import pe.edu.cibertec.TiendaGranRitmo.model.dto.response.InstrumentoResponse;
import pe.edu.cibertec.TiendaGranRitmo.service.IInstrumentoService;

import java.util.List;

@AllArgsConstructor
@Controller
@RequestMapping("/instrumento")
public class InstrumentoController {
    private IInstrumentoService iInstrumentoService;

    @GetMapping("")
    public String formInstrumento(Model model){
        model.addAttribute("listinstrumento", iInstrumentoService.listInstrumento());
        return "backoffice/instrumento/forminstrumento";
    }

    @GetMapping("/list")
    @ResponseBody
    public List<Instrumento> listInstrumento(){
        return iInstrumentoService.listInstrumento();
    }
    @PostMapping("/registerInstrumento")
    @ResponseBody
    public InstrumentoResponse registerInstrumento(@RequestBody InstrumentoRequest instrumentoRequest){
        String mensaje = "Instrumento registrado correctamente";
        boolean respuesta = true;
        try{
            Instrumento instrumento = new Instrumento();
            if(instrumentoRequest.getIdinstrumento() > 0){
                instrumento.setIdinstrumento(instrumentoRequest.getIdinstrumento());
            }
            instrumento.setNombre(instrumentoRequest.getNombre());
            instrumento.setTipo(instrumentoRequest.getTipo());
            instrumento.setPrecio(instrumentoRequest.getPrecio());
            instrumento.setStock(instrumentoRequest.getStock());
            iInstrumentoService.registerInstrumento(instrumento);
        }catch (Exception ex){
            mensaje = "Instrumento no registrado, error en la BD.";
            respuesta = false;
        }
        return InstrumentoResponse.builder().mensaje(mensaje).respuesta(respuesta).build();
    }


}
