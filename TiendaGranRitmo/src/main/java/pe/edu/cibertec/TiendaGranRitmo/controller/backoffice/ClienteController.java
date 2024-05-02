package pe.edu.cibertec.TiendaGranRitmo.controller.backoffice;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Cliente;
import pe.edu.cibertec.TiendaGranRitmo.model.dto.request.ClienteRequest;
import pe.edu.cibertec.TiendaGranRitmo.model.dto.response.ClienteResponse;
import pe.edu.cibertec.TiendaGranRitmo.service.IClienteService;

import java.util.List;

@AllArgsConstructor
@Controller
@RequestMapping("/cliente")
public class ClienteController {
    private IClienteService iClienteService;

    @GetMapping("")
    public String formCliente(Model model){
        model.addAttribute("listcliente", iClienteService.listCliente());
        return "backoffice/cliente/formcliente";
    }
    @GetMapping("/list")
    @ResponseBody
    public List<Cliente> listCliente(){
        return iClienteService.listCliente();
    }
    @PostMapping("/registerCliente")
    @ResponseBody
    public ClienteResponse registerCliente(@RequestBody ClienteRequest clienteRequest){
        String mensaje = "Cliente registrado correctamente";
        boolean respuesta = true;
        try{
            Cliente cliente = new Cliente();
            if(clienteRequest.getIdcliente() > 0){
                cliente.setIdcliente(clienteRequest.getIdcliente());
            }
            cliente.setNombre(clienteRequest.getNombre());
            cliente.setApellido(clienteRequest.getApellido());
            cliente.setDireccion(clienteRequest.getDireccion());
            cliente.setTelefono(clienteRequest.getTelefono());
            iClienteService.registerCliente(cliente);
        }catch (Exception ex){
            mensaje = "Cliente no registrado, error en la BD.";
            respuesta = false;
        }
        return ClienteResponse.builder().mensaje(mensaje).respuesta(respuesta).build();
    }
    @DeleteMapping("/deleteCliente/{id}")
    @ResponseBody
    public ClienteResponse deleteCliente(@PathVariable Integer id) {
        String mensaje = "Cliente eliminado correctamente";
        boolean respuesta = true;
        try {
            iClienteService.deleteCliente(id);
        } catch (Exception ex) {
            mensaje = "Error al eliminar el cliente";
            respuesta = false;
        }
        return ClienteResponse.builder().mensaje(mensaje).respuesta(respuesta).build();
    }
}
