package pe.edu.cibertec.TiendaGranRitmo.controller;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import pe.edu.cibertec.TiendaGranRitmo.model.BD.Cliente;
import pe.edu.cibertec.TiendaGranRitmo.service.IClienteService;

import java.util.List;

@AllArgsConstructor
@Controller
@RequestMapping("/cliente")
public class ClienteController {
    private IClienteService iClienteService;
    @GetMapping("/frmClientes")
    public String formProduct(Model model){
        model.addAttribute("listarcliente", iClienteService.listarClientes());
        return "backoffice/cliente/frmClientes";
    }
    @GetMapping("/list")
    @ResponseBody
    public List<Cliente> listProducts(){
        return iClienteService.listarClientes();
    }
}
