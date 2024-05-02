package pe.edu.cibertec.TiendaGranRitmo.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Venta;
import pe.edu.cibertec.TiendaGranRitmo.repository.VentaRepository;

import java.util.List;

@AllArgsConstructor
@Service
public class VentaService implements IVentaService{
    private VentaRepository ventaRepository;
    @Override
    public List<Venta> listVenta() {
        return ventaRepository.findAll();
    }

    @Override
    public void registerVenta(Venta venta) {
        ventaRepository.save(venta);
    }
}
