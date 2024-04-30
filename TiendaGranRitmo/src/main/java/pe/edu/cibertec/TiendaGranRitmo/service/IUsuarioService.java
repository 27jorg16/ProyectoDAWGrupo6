package pe.edu.cibertec.TiendaGranRitmo.service;

import pe.edu.cibertec.TiendaGranRitmo.model.BD.Usuario;

import java.util.List;

public interface IUsuarioService {
    Usuario findUserByUserName(String username);
    Usuario guardarUsuario(Usuario usuario);
    List<Usuario> listarUsuarios();
    Usuario obtenerUsuariobyId(int id);
    void actualizarUsuario(Usuario usuario);
}
