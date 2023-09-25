import { createContext, useState } from "react";

interface IUserState {
  id?: string;
  email: string;
  password: string;
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

export const UserContext = createContext(
  {} as { user: IUserState | undefined; setUser: (data?: IUserState) => void }
);

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<IUserState>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
