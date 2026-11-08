import { EditIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Heading,
  Container,
  IconButton,
  useToast
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import VentanaModal from "./components/VentanaModal";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clientes, setClientes] = useState([]);
  const [clienteActual, setClienteActual] = useState({});
  const toast = useToast();

  useEffect(() => {
    const dataGuardada = localStorage.getItem("db_clientes_v2");
    if (dataGuardada) {
      setClientes(JSON.parse(dataGuardada));
    }
  }, []);

  const eliminarCliente = (correo) => {
    const filtrados = clientes.filter((c) => c.correo !== correo);
    setClientes(filtrados);
    localStorage.setItem("db_clientes_v2", JSON.stringify(filtrados));
    toast({
      title: "Cliente eliminado",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };

  const abrirParaCrear = () => {
    setClienteActual({});
    onOpen();
  };

  const abrirParaEditar = (cli, index) => {
    setClienteActual({ ...cli, index });
    onOpen();
  };

  return (
    <Box bg="gray.100" minH="100vh" py={10}>
      <Container maxW="container.md" bg="white" p={6} borderRadius="xl" boxShadow="lg">
        <Flex justify="space-between" align="center" mb={6} borderBottom="2px solid" borderColor="teal.100" pb={4}>
          <Heading size="md" color="teal.700">Panel de Clientes</Heading>
          <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={abrirParaCrear} size="sm">
            Nuevo Cliente
          </Button>
        </Flex>

        <Box overflowX="auto">
          <Table variant="striped" colorScheme="teal" size="md">
            <Thead bg="teal.600">
              <Tr>
                <Th color="white">Nombre y Apellido</Th>
                <Th color="white">Correo Electrónico</Th>
                <Th color="white" textAlign="center">Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {clientes.length === 0 ? (
                <Tr>
                  <Td colSpan={3} textAlign="center" color="gray.500" py={8}>
                    No hay clientes registrados en el sistema.
                  </Td>
                </Tr>
              ) : (
                clientes.map((cli, idx) => (
                  <Tr key={idx}>
                    <Td fontWeight="semibold">{cli.nombre}</Td>
                    <Td>{cli.correo}</Td>
                    <Td textAlign="center">
                      <IconButton
                        icon={<EditIcon />}
                        colorScheme="blue"
                        size="sm"
                        aria-label="Editar"
                        mr={2}
                        onClick={() => abrirParaEditar(cli, idx)}
                      />
                      <IconButton
                        icon={<DeleteIcon />}
                        colorScheme="red"
                        size="sm"
                        aria-label="Eliminar"
                        onClick={() => eliminarCliente(cli.correo)}
                      />
                    </Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </Box>
      </Container>

      <VentanaModal
        isOpen={isOpen}
        onClose={onClose}
        clientes={clientes}
        setClientes={setClientes}
        clienteActual={clienteActual}
      />
    </Box>
  );
};

export default App;