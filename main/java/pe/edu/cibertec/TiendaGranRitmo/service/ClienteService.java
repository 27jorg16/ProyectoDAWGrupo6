package pe.edu.cibertec.TiendaGranRitmo.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pe.edu.cibertec.TiendaGranRitmo.model.bd.Cliente;
import pe.edu.cibertec.TiendaGranRitmo.repository.ClienteRepository;

import java.util.List;

@AllArgsConstructor
@Service
public class ClienteService implements IClienteService{
    private ClienteRepository clienteRepository;
    @Override
    public List<Cliente> listCliente() {
        return clienteRepository.findAll();
    }

    @Override
    public void registerCliente(Cliente cliente) {
        clienteRepository.save(cliente);
    }

    @Override
    public void deleteCliente(Integer idcliente) {
        clienteRepository.deleteById(idcliente);
    }


}
