package pe.edu.cibertec.TiendaGranRitmo.controller;

import lombok.AllArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pe.edu.cibertec.TiendaGranRitmo.service.IEmpleadoService;

@AllArgsConstructor
@RestController
@RequestMapping(path = "api/empleado")
public class EmpleadoController {
    private IEmpleadoService iEmpleadoService;

    @RequestMapping("/empleados")
    public String listarEmpleado(Model model){
        model.addAttribute("empleados", iEmpleadoService.listarEmpleados());
        return "backoffice/empleado/frmempleados";
    }
}
