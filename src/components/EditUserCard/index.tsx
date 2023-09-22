import { Container, ImageContainer, IconHolder } from "./styles";
import { BiUser, BiSolidPencil } from "react-icons/bi";

const EditUserCard = () => {
  return (
    <Container>
      <ImageContainer>
        <BiUser />
        <IconHolder>
          <BiSolidPencil />
        </IconHolder>
      </ImageContainer>
    </Container>
  );
};

export default EditUserCard;
