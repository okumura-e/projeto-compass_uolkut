import { Container } from "./styles";
import PerfilHeader from "../../components/PerfilHeader";
import EditUserCard from "../../components/cards/EditUserCard";
import EditInfoCard from "../../components/cards/EditInfoCard";

const EditPerfilPage = () => {
  return (
    <>
      <PerfilHeader username="Gabriel Barbosa" />
      <Container>
        <EditUserCard />
        <EditInfoCard />
      </Container>
    </>
  );
};

export default EditPerfilPage;
