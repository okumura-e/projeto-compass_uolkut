import {
  Title,
  SeeAll,
  Section,
  Row,
  Grid,
  Icon,
  Profile,
  ProfilePhoto,
  Name,
  CommunityPhoto,
  CommunityIcon,
} from "./styles";

const users: string[] = [
  "Fernando",
  "Ana",
  "Carlos",
  "Vitor",
  "Matheus",
  "Ramos",
  "Eiji",
  "Julia",
  "Carol",
];
const comunities: string[] = [
  "Carros",
  "Desenhos",
  "Crazy",
  "Fofos",
  "Animes",
  "Leitura",
  "Meu ovo",
  "Books",
  "Cafeee",
];

interface FeedSmallCardProps {
  title: string;
  type: "friends" | "community";
}

function FeedSmallCard({ title, type }: FeedSmallCardProps) {
  return (
    <Section>
      <Row>
        <Title>{title}</Title>
        <SeeAll>Ver todos</SeeAll>
      </Row>

      {type === "friends" && (
        <Grid>
          {users.map((user, index) => (
            <Profile>
              <ProfilePhoto>
                <Icon />
              </ProfilePhoto>
              <Name key={index}>{user}</Name>
            </Profile>
          ))}
        </Grid>
      )}

      {type === "community" && (
        <Grid>
          {comunities.map((comunities, index) => (
            <Profile>
              <CommunityPhoto>
                <CommunityIcon />
              </CommunityPhoto>
              <Name key={index}>{comunities}</Name>
            </Profile>
          ))}
        </Grid>
      )}
    </Section>
  );
}

export default FeedSmallCard;
