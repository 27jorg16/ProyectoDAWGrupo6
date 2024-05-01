package pe.edu.cibertec.TiendaGranRitmo.controller.backoffice;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Cliente;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Empleado;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Venta;
import pe.edu.cibertec.TiendaGranRitmo.model.dto.request.EmpleadoRequest;
import pe.edu.cibertec.TiendaGranRitmo.model.dto.response.EmpleadoResponse;
import pe.edu.cibertec.TiendaGranRitmo.service.IEmpleadoService;

import java.util.List;

@AllArgsConstructor
@Controller
@RequestMapping("/empleado")
public class EmpleadoController {
    private IEmpleadoService iEmpleadoService;

    @GetMapping("")
    public String formEmpleado(Model model){
        model.addAttribute("listempleado", iEmpleadoService.listEmpleado());
        return "backoffice/empleado/formempleado";
    }
    @GetMapping("/list")
    @ResponseBody
    public List<Empleado> listEmpleado(){
        return iEmpleadoService.listEmpleado();
    }
    @PostMapping("/registerEmpleado")
    @ResponseBody
    public EmpleadoResponse registerEmpleado(@RequestBody EmpleadoRequest empleadoRequest){
        String mensaje = "Empleado registrado correctamente";
        boolean respuesta = true;
        try{
            Empleado empleado = new Empleado();
            if(empleadoRequest.getIdempleado() > 0){
                empleado.setIdempleado(empleadoRequest.getIdempleado());
            }
            empleado.setNombre(empleadoRequest.getNombre());
            empleado.setApellido(empleadoRequest.getApellido());
            empleado.setCargo(empleadoRequest.getCargo());
            empleado.setSalario(empleadoRequest.getSalario());
            iEmpleadoService.registerEmpleado(empleado);
        }catch (Exception ex){
            mensaje = "Empleado no registrado, error en la BD.";
            respuesta = false;
        }
        return EmpleadoResponse.builder().mensaje(mensaje).respuesta(respuesta).build();
    }

}
