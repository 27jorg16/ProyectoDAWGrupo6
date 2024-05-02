package pe.edu.cibertec.TiendaGranRitmo.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Empleado;
import pe.edu.cibertec.TiendaGranRitmo.repository.EmpleadoRepository;

import java.util.List;

@AllArgsConstructor
@Service
public class EmpleadoService implements IEmpleadoService{
    private EmpleadoRepository empleadoRepository;
    @Override
    public List<Empleado> listEmpleado() {
        return empleadoRepository.findAll();
    }

    @Override
    public void registerEmpleado(Empleado empleado) {
        empleadoRepository.save(empleado);
    }

    @Override
    public void deleteEmpleado(Integer idempleado) {
        empleadoRepository.deleteById(idempleado);
    }
}
