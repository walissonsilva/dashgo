import { Box, Button, Flex, Heading, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button as="a" size="sm" fontSize="small" colorScheme="pink" leftIcon={<Icon fontSize="18" as={RiAddLine} />}>
              Criar novo
            </Button>
          </Flex>

          <Table colorSchema="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de Cadastro</Th>
                <Th width="8">Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Walisson Silva</Text>
                    <Text fontSize="sm" color="gray.300">walissonsilva10@gmail.com</Text>
                  </Box>
                </Td>
                <Td>08 de abril de 2021</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="green"
                    leftIcon={<Icon fontSize="16" as={RiPencilLine}
                    />}>
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Walisson Silva</Text>
                    <Text fontSize="sm" color="gray.300">walissonsilva10@gmail.com</Text>
                  </Box>
                </Td>
                <Td>08 de abril de 2021</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="green"
                    leftIcon={<Icon fontSize="16" as={RiPencilLine}
                    />}>
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Walisson Silva</Text>
                    <Text fontSize="sm" color="gray.300">walissonsilva10@gmail.com</Text>
                  </Box>
                </Td>
                <Td>08 de abril de 2021</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="green"
                    leftIcon={<Icon fontSize="16" as={RiPencilLine}
                    />}>
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}