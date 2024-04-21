DROP DATABASE IF EXISTS TiendaGranRitmo;

CREATE DATABASE TiendaGranRitmo;

USE TiendaGranRitmo;

CREATE TABLE roles (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    correo VARCHAR(255) UNIQUE NOT NULL,
    rolid INT,
    FOREIGN KEY (rolid) REFERENCES roles (id)
);

CREATE TABLE empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    salario DECIMAL(10, 2) NOT NULL,
    usuarioid INT,
    FOREIGN KEY (usuarioid) REFERENCES usuarios(id)
);

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    telefono VARCHAR(20)
);

CREATE TABLE instrumentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    tipo VARCHAR(50),
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL
);

CREATE TABLE ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE,
    cantidad INT,
    precio_unitario DECIMAL(10,2),
    clienteid INT,
    empleadoid INT,
    instrumentoid INT,
    FOREIGN KEY (clienteid) REFERENCES clientes(id),
    FOREIGN KEY (empleadoid) REFERENCES empleados(id),
    FOREIGN KEY (instrumentoid) REFERENCES instrumentos(id)
);

-- Listar roles
DELIMITER //
CREATE PROCEDURE ListarRoles()
BEGIN
    SELECT * FROM roles;
END;

-- Agregar rol
DELIMITER //
CREATE PROCEDURE AgregarRol(IN nombre VARCHAR(50))
BEGIN
    INSERT INTO roles (nombre) VALUES (nombre);
END;

-- Actualizar rol
DELIMITER //
CREATE PROCEDURE EditarRol(IN id INT, IN nombre VARCHAR(50))
BEGIN
    UPDATE roles SET nombre = nombre WHERE id = id;
END;

-- Eliminar rol
DELIMITER //
CREATE PROCEDURE EliminarRol(IN id INT)
BEGIN
    DELETE FROM roles WHERE id = id;
END;

-- Listar usuario
DELIMITER //
CREATE PROCEDURE ListarUsuarios()
BEGIN
    SELECT * FROM usuarios;
END;

-- Agregar usuario
DELIMITER //
CREATE PROCEDURE AgregarUsuario(IN username VARCHAR(50), IN password VARCHAR(255), IN correo VARCHAR(255), IN rolid INT)
BEGIN
    INSERT INTO usuarios (username, password, correo, rolid) VALUES (username, password, correo, rolid);
END;

-- Actualizar usuario
DELIMITER //
CREATE PROCEDURE EditarUsuario(IN id INT, IN username VARCHAR(50), IN password VARCHAR(255), IN correo VARCHAR(255), IN rolid INT)
BEGIN
    UPDATE usuarios SET username = username, password = password, correo = correo, rolid = rolid WHERE id = id;
END;

-- Eliminar usuario
DELIMITER //
CREATE PROCEDURE EliminarUsuario(IN id INT)
BEGIN
    DELETE FROM usuarios WHERE id = id;
END;

-- Listar empleados
DELIMITER //
CREATE PROCEDURE ListarEmpleados()
BEGIN
    SELECT * FROM empleados;
END;
drop procedure if exists ListarEmpleados;
-- Agregar empleado
DELIMITER //
CREATE PROCEDURE AgregarEmpleado(IN nombre VARCHAR(100), IN apellido VARCHAR(100), IN cargo VARCHAR(50), IN salario DECIMAL(10,2), IN usuarioid INT)
BEGIN
    INSERT INTO empleados (nombre, apellido, cargo, salario, usuarioid) VALUES (nombre, apellido, cargo, salario, usuarioid);
END;

-- Actualizar empleado
DELIMITER //
CREATE PROCEDURE EditarEmpleado(IN id INT, IN nombre VARCHAR(100), IN apellido VARCHAR(100), IN cargo VARCHAR(50), IN salario DECIMAL(10,2), IN usuarioid INT)
BEGIN
    UPDATE empleados SET nombre = nombre, apellido = apellido, cargo = cargo, salario = salario, usuarioid = usuarioid WHERE id = id;
END;

-- Eliminar empleado
DELIMITER //
CREATE PROCEDURE EliminarEmpleado(IN id INT)
BEGIN
    DELETE FROM empleados WHERE id = id;
END;

-- Listar clientes
DELIMITER //
CREATE PROCEDURE ListarClientes()
BEGIN
    SELECT * FROM clientes;
END;

-- Agregar cliente
DELIMITER //
CREATE PROCEDURE AgregarCliente(IN nombre VARCHAR(100), IN apellido VARCHAR(100), IN direccion VARCHAR(255), IN telefono VARCHAR(20))
BEGIN
    INSERT INTO clientes (nombre, apellido, direccion, telefono) VALUES (nombre, apellido, direccion, telefono);
END;

-- Actualizar cliente
DELIMITER //
CREATE PROCEDURE EditarCliente(IN id INT, IN nombre VARCHAR(100), IN apellido VARCHAR(100), IN direccion VARCHAR(255), IN telefono VARCHAR(20))
BEGIN
    UPDATE clientes SET nombre = nombre, apellido = apellido, direccion = direccion, telefono = telefono WHERE id = id;
END;

-- Eliminar cliente
DELIMITER //
CREATE PROCEDURE EliminarCliente(IN id INT)
BEGIN
    DELETE FROM clientes WHERE id = id;
END;

-- Listar instrumentos
DELIMITER //
CREATE PROCEDURE ListarInstrumentos()
BEGIN
    SELECT * FROM instrumentos;
END;

-- Agregar instrumento
DELIMITER //
CREATE PROCEDURE AgregarInstrumento(IN nombre VARCHAR(255), IN tipo VARCHAR(50), IN precio DECIMAL(10,2), IN stock INT)
BEGIN
    INSERT INTO instrumentos (nombre, tipo, precio, stock) VALUES (nombre, tipo, precio, stock);
END;

-- Actualizar instrumento
DELIMITER //
CREATE PROCEDURE EditarInstrumento(IN id INT, IN nombre VARCHAR(255), IN tipo VARCHAR(50), IN precio DECIMAL(10,2), IN stock INT)
BEGIN
    UPDATE clientes SET nombre = nombre, tipo = tipo, precio = precio, stock = stock WHERE id = id;
END;

-- Eliminar instrumento
DELIMITER //
CREATE PROCEDURE EliminarInstrumento(IN id INT)
BEGIN
    DELETE FROM instrumentos WHERE id = id;
END;

-- Listar ventas
DELIMITER //
CREATE PROCEDURE ListarVentas()
BEGIN
    SELECT * FROM ventas;
END;

-- Agregar venta
DELIMITER //
CREATE PROCEDURE AgregarVenta(IN fecha DATE, IN cantidad INT, IN precio_unitario DECIMAL(10,2), IN clienteid INT, IN empleadoid INT, IN instrumentoid INT)
BEGIN
    INSERT INTO ventas (fecha, cantidad, precio_unitario, clienteid, empleadoid, instrumentoid) VALUES (fecha, cantidad, precio_unitario, clienteid, empleadoid, instrumentoid);
END;

-- Actualizar venta
DELIMITER //
CREATE PROCEDURE EditarVenta(IN id INT, IN fecha DATE, IN cantidad INT, IN precio_unitario DECIMAL(10,2), IN clienteid INT, IN empleadoid INT, IN instrumentoid INT)
BEGIN
    UPDATE ventas SET fecha = fecha, cantidad = cantidad, precio_unitario = precio_unitario, clienteid = clienteid, empleadoid = empleadoid, instrumentoid = instrumentoid WHERE id = id;
END;

-- Eliminar venta
DELIMITER //
CREATE PROCEDURE EliminarVenta(IN id INT)
BEGIN
    DELETE FROM ventas WHERE id = id;
END;
/*falta completar registros
-- Agregar registros

INSERT INTO roles (nombre) VALUES
('admin'),
('empleado');

-- falta insertar correctamente, sale un error
INSERT INTO usuarios (username, password, correo, rolid) VALUES
('juancho98',aes_encrypt('987456321456987','j4u8a6n2157'),'juancito_98@gmail.com','2'),
('dennis456',aes_encrypt('321456987412365','d2e6n4n4i8s'),'den_di2008@hotmail.com','1');

INSERT INTO instrumentos (nombre, tipo, precio, stock) VALUES
('Guitarra', 'Cuerdas', 500.00),
('Batería', 'Percusión', 1000.00);

INSERT INTO cliente (nombre, direccion, telefono, nombre_instrumento, nombre_empleado) VALUES
('Juan Pérez', 'Calle A, Ciudad', '123-456-7890', 'Guitarra', 'Vendedor'),
('María Rodríguez', 'Calle B, Ciudad', '987-654-3210', 'Batería', 'Vendedor');

INSERT INTO empleado (nombre, cargo, salario, cliente_nombre) VALUES
('Pérez', 'Vendedor', 1500.00, 'Juan Pérez'),
('Gómez', 'Vendedor', 1750.00, 'María Rodríguez');
*/

