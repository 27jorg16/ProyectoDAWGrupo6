package pe.edu.cibertec.TiendaGranRitmo.service;

import pe.edu.cibertec.TiendaGranRitmo.model.bd.Cliente;

import java.util.List;

public interface IClienteService {
    List<Cliente> listCliente();

    void registerCliente(Cliente cliente);

}
