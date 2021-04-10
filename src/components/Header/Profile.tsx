import { Box, Flex, Text, Avatar } from "@chakra-ui/react"

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Walisson Silva</Text>
        <Text color="gray.300" fontSize="small">walissonsilva10@gmail.com</Text>
      </Box>

      <Avatar
        size="md"
        name="Walisson Silva"
        src="https://avatars.githubusercontent.com/u/13500056?v=4" />
    </Flex>
  )
}