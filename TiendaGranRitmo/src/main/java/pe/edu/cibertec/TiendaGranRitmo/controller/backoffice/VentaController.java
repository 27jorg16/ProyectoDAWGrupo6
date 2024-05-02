package pe.edu.cibertec.TiendaGranRitmo.controller.backoffice;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Cliente;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Empleado;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Instrumento;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Venta;
import pe.edu.cibertec.TiendaGranRitmo.model.dto.request.VentaRequest;
import pe.edu.cibertec.TiendaGranRitmo.model.dto.response.VentaResponse;
import pe.edu.cibertec.TiendaGranRitmo.service.IVentaService;

import java.util.List;

@AllArgsConstructor
@Controller
@RequestMapping("/venta")
public class VentaController {
    private IVentaService iVentaService;

    @GetMapping("")
    public String formVenta(Model model){
        model.addAttribute("listventa", iVentaService.listVenta());
        return "backoffice/venta/formventa";
    }

    @GetMapping("/list")
    @ResponseBody
    public List<Venta> listVenta(){
        return iVentaService.listVenta();
    }

    @PostMapping("/register")
    @ResponseBody
    public VentaResponse registerVenta(@RequestBody VentaRequest ventaRequest){
        String mensaje = "Venta registrada correctamente";
        boolean respuesta = true;
        try{
            Venta venta = new Venta();
            if(ventaRequest.getIdventa() > 0){
                venta.setIdventa(ventaRequest.getIdventa());
            }
            venta.setFecha(ventaRequest.getFecha());
            venta.setCantidad(ventaRequest.getCantidad());
            venta.setPrecio_unitario(ventaRequest.getPrecioUnitario());
            Cliente cliente = new Cliente();
            cliente.setIdcliente(ventaRequest.getClienteId());
            Empleado empleado = new Empleado();
            empleado.setIdempleado(ventaRequest.getEmpleadoId());
            Instrumento instrumento = new Instrumento();
            instrumento.setIdinstrumento(ventaRequest.getInstrumentoId());
            iVentaService.registerVenta(venta);
        }catch (Exception ex){
            mensaje = "Venta no registrada, error en la BD.";
            respuesta = false;
        }
        return VentaResponse.builder().mensaje(mensaje).respuesta(respuesta).build();
    }

}
