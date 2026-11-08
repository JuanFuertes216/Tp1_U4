import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const VentanaModal = ({ isOpen, onClose, clientes, setClientes, clienteActual }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const toast = useToast();

  useEffect(() => {
    if (isOpen) {
      setNombre(clienteActual.nombre || "");
      setCorreo(clienteActual.correo || "");
    }
  }, [isOpen, clienteActual]);

  const guardarDatos = () => {
    if (!nombre.trim() || !correo.trim()) {
      toast({ title: "Completa todos los campos", status: "warning", duration: 2000 });
      return;
    }

    const correoDuplicado = clientes.find(
      (c, idx) => c.correo === correo && idx !== clienteActual.index
    );

    if (correoDuplicado) {
      toast({ title: "El correo ya está registrado", status: "error", duration: 2000 });
      return;
    }

    let nuevosClientes;
    if (clienteActual.index !== undefined) {
      // Editar
      nuevosClientes = [...clientes];
      nuevosClientes[clienteActual.index] = { nombre, correo };
      toast({ title: "Cliente actualizado con éxito", status: "info", duration: 2000 });
    } else {
      // Agregar
      nuevosClientes = [...clientes, { nombre, correo }];
      toast({ title: "Cliente registrado con éxito", status: "success", duration: 2000 });
    }

    setClientes(nuevosClientes);
    localStorage.setItem("db_clientes_v2", JSON.stringify(nuevosClientes));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom">
      <ModalOverlay backdropFilter="blur(3px)" />
      <ModalContent>
        <ModalHeader color="teal.600">
          {clienteActual.index !== undefined ? "Actualizar Datos del Cliente" : "Registrar Nuevo Cliente"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={4}>
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel fontWeight="bold">Nombre y Apellido</FormLabel>
              <Input
                placeholder="Ej. María Gómez"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                focusBorderColor="teal.400"
                variant="filled"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontWeight="bold">Correo Electrónico</FormLabel>
              <Input
                type="email"
                placeholder="ejemplo@correo.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                focusBorderColor="teal.400"
                variant="filled"
              />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter bg="gray.50" borderBottomRadius="md">
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="teal" onClick={guardarDatos}>
            Guardar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default VentanaModal;