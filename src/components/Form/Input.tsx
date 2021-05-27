import { FormControl, Input as ChakraInput, FormLabel, InputProps as ChkraInputProps } from '@chakra-ui/react';

interface InputProps extends ChkraInputProps {
  name: string;
  label?: string;
}

export function Input({name, label, ...rest}: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        type="email"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900"
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}