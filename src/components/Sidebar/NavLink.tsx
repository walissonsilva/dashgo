import { Link, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface NavLinkProps extends ChakraLinkProps {
  icon: IconType;
  text: string;
}

export function NavLink({ icon, text, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest} >
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{text}</Text>
    </Link>
  )
}