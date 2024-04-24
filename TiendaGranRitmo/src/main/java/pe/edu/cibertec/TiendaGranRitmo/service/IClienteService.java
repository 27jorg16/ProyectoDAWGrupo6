package pe.edu.cibertec.TiendaGranRitmo.service;

import pe.edu.cibertec.TiendaGranRitmo.model.BD.Cliente;

import java.util.List;

public interface IClienteService {

    List<Cliente> listarClientes();

    void registrarCliente(Cliente cliente);
}
