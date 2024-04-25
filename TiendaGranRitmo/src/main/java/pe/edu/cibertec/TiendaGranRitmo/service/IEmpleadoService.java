package pe.edu.cibertec.TiendaGranRitmo.service;

import pe.edu.cibertec.TiendaGranRitmo.model.BD.Empleado;

import java.util.List;

public interface IEmpleadoService {

    List<Empleado> listarEmpleados();

    void registrarEmpleado(Empleado empleado);
}
