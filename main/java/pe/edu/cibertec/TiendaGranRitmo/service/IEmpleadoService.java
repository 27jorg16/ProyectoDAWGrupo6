package pe.edu.cibertec.TiendaGranRitmo.service;

import pe.edu.cibertec.TiendaGranRitmo.model.bd.Empleado;

import java.util.List;

public interface IEmpleadoService {
    List<Empleado> listEmpleado();

    void registerEmpleado(Empleado empleado);

    void deleteEmpleado(Integer idempleado);

}
