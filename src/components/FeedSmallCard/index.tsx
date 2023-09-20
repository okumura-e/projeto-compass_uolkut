import { Title, SeeAll, Section, Row, Grid, Icon, Profile, ProfilePhoto, Name, CommunityPhoto, CommunityIcon } from "./styles";

const users: string[] = ["Fernando", "Ana", "Carlos", "Vitor", "Matheus", "Ramos", "Eiji", "Julia", "Carol"];
const comunities: string[] = ["Carros", "Desenhos", "Crazy", "Fofos", "Animes", "Leitura", "Meu ovo", "Books", "Cafeee"];

function FeedSmallCard(props: { title: string }) {
  return(
    <Section>
      <Row>
        <Title>{props.title}</Title>
        <SeeAll>Ver todos</SeeAll>
      </Row>

        {props.title === "Amigos(248)" && (<Grid>
          {users.map((user, index) => (
            <Profile>
              <ProfilePhoto>
                <Icon />
              </ProfilePhoto>
              <Name key={index}>{user}</Name>
            </Profile>
          ))}
        </Grid>)}

        {props.title === "Comunidade(42)" && (<Grid>
          {comunities.map((comunities, index) => (
            <Profile>
              <CommunityPhoto>
                <CommunityIcon />
              </CommunityPhoto>
              <Name key={index}>{comunities}</Name>
            </Profile>
          ))}
        </Grid>)}

    </Section>
  )
}

export default FeedSmallCard;