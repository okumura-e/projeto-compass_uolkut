import { Container, ImageContainer, Fullname, Details } from "./styles";
import { BiUser } from "react-icons/bi";

interface UserCardProps {
  fullname: string;
  location: string;
  maritalStatus: string;
}

const UserCard = ({ fullname, location, maritalStatus }: UserCardProps) => {
  return (
    <Container>
      <ImageContainer>
        <BiUser />
      </ImageContainer>
      <Fullname>{fullname}</Fullname>
      <Details>
        {maritalStatus}, {location}
      </Details>
    </Container>
  );
};

export default UserCard;
