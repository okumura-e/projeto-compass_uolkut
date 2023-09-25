import { createContext, useState } from "react";

interface IUserState {
  id?: string;
  fullname: string;
  birthday: string;
  city: string;
  state: string;
  country: string;
  maritalStatus:
    | "Solteiro"
    | "Casado"
    | "Divorciado"
    | "Namorando"
    | "Preocupado";
  job: string;
}

const defaultState = {
  fullname: "Gabriel Barbosa",
  thought: "Programar sem café é igual poeta sem poesia.",
  fansAmount: 85,
  trustable: 2,
  coolness: 3,
  attractive: 2,
  birthday: "21 de Julho",
  city: "Guarantã",
  state: "São Paulo",
  country: "Brasil",
  job: "Programador",
  maritalStatus: "Solteiro",
  categories: [
    { id: 1, name: "Músicas", tags: ["Trap", "Rap", "Indie"] },
    { id: 2, name: "Filmes", tags: ["A Rede Social", "Meu amigo tororo"] },
  ],
};

export const UserContext = createContext(
  {} as { user: IUserState; setUser: (data?: IUserState) => void }
);

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState(defaultState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
