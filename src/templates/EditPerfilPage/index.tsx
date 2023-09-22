import { Container } from "./styles";
import PerfilHeader from "../../components/PerfilHeader";
import EditUserCard from "../../components/EditUserCard";
import EditInfoCard from "../../components/EditInfoCard";

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
