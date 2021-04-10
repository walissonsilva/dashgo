import { Button } from '@chakra-ui/react';

interface PaginationItem {
  isCurrent?: boolean;
  pageNumber: number;
}

export function PaginationItem({
  isCurrent = false,
  pageNumber
}: PaginationItem) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        colorScheme="pink"
        width="4"
        disabled
        _disabled={{bgColor: 'pink.500', cursor: 'default'}}>
        { pageNumber }
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500'
      }}>
      { pageNumber }
    </Button>
  )
}