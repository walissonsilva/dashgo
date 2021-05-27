import { useDisclosure, UseDisclosureProps } from "@chakra-ui/hooks";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: React.ReactNode;
}

const SidebarDrawerContext = createContext({} as UseDisclosureProps);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      { children }
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => {
  const context = useContext(SidebarDrawerContext);

  if (!context) {
    throw Error('This context must be inside a provider SidebarDrawerProvider');
  }

  return context;
}