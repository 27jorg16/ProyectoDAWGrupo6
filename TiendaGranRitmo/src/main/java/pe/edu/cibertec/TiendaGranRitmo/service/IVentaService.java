package pe.edu.cibertec.TiendaGranRitmo.service;

import pe.edu.cibertec.TiendaGranRitmo.model.bd.Venta;

import java.util.List;

public interface IVentaService {
    List<Venta> listVenta();

    void registerVenta(Venta product);

}
