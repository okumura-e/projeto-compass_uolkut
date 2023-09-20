import {
  Container,
  ContentContainer,
  LeftSection,
  RightSection,
  Logo,
  Navbar,
  LinksList,
  LinkHolder,
  Link,
  UserContainer,
  Username,
} from "./styles";

import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import SearchInput from "../SearchInput";

interface PerfilHeaderProps {
  username: string;
}

const PerfilHeader = ({ username }: PerfilHeaderProps) => {
  return (
    <Container>
      <ContentContainer>
        <LeftSection>
          <Logo>UOLkut</Logo>
          <Navbar>
            <LinksList>
              <LinkHolder>
                <Link>Início</Link>
              </LinkHolder>
              <LinkHolder>
                <Link selected>Perfil</Link>
              </LinkHolder>
              <LinkHolder>
                <Link>Comunidades</Link>
              </LinkHolder>
              <LinkHolder>
                <Link>Jogos</Link>
              </LinkHolder>
            </LinksList>
          </Navbar>
        </LeftSection>
        <RightSection>
          <SearchInput />
          <UserContainer>
            <span>
              <AiOutlineUser />
            </span>
            <Username>{username}</Username>
            <IoIosArrowDown />
          </UserContainer>
        </RightSection>
      </ContentContainer>
    </Container>
  );
};

export default PerfilHeader;
