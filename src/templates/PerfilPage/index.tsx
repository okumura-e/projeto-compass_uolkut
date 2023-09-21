import { useState, useEffect, useCallback } from "react";
import { Container, CardSection, PseudoSection } from "./styles";
import EditPerfilButton from "../../components/EditPerfilButton";
import FeedSmallCard from "../../components/FeedSmallCard";
import MainCard from "../../components/MainCard";
import PerfilHeader from "../../components/PerfilHeader";
import UserCard from "../../components/UserCard";

const mock = {
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

const PerfilPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = useCallback(() => {
    if (window.innerWidth > 768 && !isMobile) {
      setIsMobile(false);
    } else if (window.innerWidth < 768 && !isMobile) {
      setIsMobile(true);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <PerfilHeader username="Gabriel Barbosa" />
      <Container>
        <CardSection>
          <UserCard
            fullname="Gabriel Barbosa"
            location="Brasil"
            maritalStatus="Solteiro"
          />
          <EditPerfilButton />
        </CardSection>
        <MainCard {...mock} />

        {isMobile && (
          <>
            <FeedSmallCard title="Amigos(248)" type="friends" />
            <FeedSmallCard title="Comunidade(42)" type="community" />
          </>
        )}
        {!isMobile && (
          <PseudoSection>
            <FeedSmallCard title="Amigos(248)" type="friends" />
            <FeedSmallCard title="Comunidade(42)" type="community" />
          </PseudoSection>
        )}
      </Container>
    </>
  );
};

export default PerfilPage;
