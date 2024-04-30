package pe.edu.cibertec.TiendaGranRitmo.controller;

import lombok.AllArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import pe.edu.cibertec.TiendaGranRitmo.model.BD.Cliente;
import pe.edu.cibertec.TiendaGranRitmo.service.IClienteService;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(path = "api/cliente")
public class ClienteController {
    private IClienteService iClienteService;

    @GetMapping("/clientes")
    public String listarClientes(Model model){
        model.addAttribute("clientes", iClienteService.listarClientes());
        return "backoffice/cliente/frmClientes";
    }

    @GetMapping("/list")
    @ResponseBody
    public List<Cliente> listProducts(){
        return iClienteService.listarClientes();
    }
}
