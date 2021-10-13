import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export const getUsers = async (): Promise<User[]> => {
  const { data } = (await api.get("users")) as any;

  const users: User[] = data.users.map((user: User) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  }));

  return users;
};

export function useUsers() {
  return useQuery<User[]>("users", getUsers, { staleTime: 1000 * 5 });
}
