import { createContext, useState } from "react";

const defaultState = {
  fullname: "Gabriel Barbosa",
  thought: "Programar sem café é igual poeta sem poesia.",
  fansAmount: 85,
  trustable: 2,
  coolness: 3,
  attractive: 2,
  age: 22,
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

export const UserContext = createContext({});

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
