package pe.edu.cibertec.TiendaGranRitmo.service;

import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;
import pe.edu.cibertec.TiendaGranRitmo.model.BD.Empleado;
import pe.edu.cibertec.TiendaGranRitmo.repository.EmpleadoRepository;

import java.util.List;

@NoArgsConstructor
@Service
public class EmpleadoService implements IEmpleadoService{
    private EmpleadoRepository empleadoRepository;

    @Override
    public List<Empleado> listarEmpleados() {
        return empleadoRepository.findAll();
    }

    @Override
    public void registrarEmpleado(Empleado empleado) {
        empleadoRepository.save(empleado);
    }
}
