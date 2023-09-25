import { useContext } from "react";
import { Container, CardSection, PseudoSection } from "./styles";
import EditPerfilButton from "../../components/EditPerfilButton";
import FeedSmallCard from "../../components/cards/FeedSmallCard";
import MainCard from "../../components/cards/MainCard";
import PerfilHeader from "../../components/PerfilHeader";
import UserCard from "../../components/cards/UserCard";
import SearchInput from "../../components/SearchInput";
import { UserContext } from "../../context/UserContext";

const PerfilPage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <PerfilHeader username="Gabriel Barbosa" />
      <Container>
        <SearchInput />
        <CardSection>
          <UserCard
            fullname="Gabriel Barbosa"
            location="Brasil"
            maritalStatus="Solteiro"
          />
          <EditPerfilButton />
        </CardSection>
        <PseudoSection>
          <MainCard
            {...user}
            trustable={2}
            coolness={3}
            attractive={2}
            fansAmount={85}
          />
          <FeedSmallCard title="Amigos(248)" type="friends" />
          <FeedSmallCard title="Comunidade(42)" type="community" />
        </PseudoSection>
      </Container>
    </>
  );
};

export default PerfilPage;
