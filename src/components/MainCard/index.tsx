import {
  Container,
  Title,
  Thought,
  StatisticsContainer,
  Statistic,
  StatisticTitle,
  StatisticData,
  DetailsDataContainer,
  Detail,
  PreferencesContainer,
  Preference,
  Tag,
  SeeMoreLink,
} from "./styles";

import { FiThumbsUp } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";

interface MainCardProps {
  fullname: string;
  thought: string;
  fansAmount: number;
  trustable: number;
  coolness: number;
  attractive: number;
  maritalStatus: string;
  birthday: string;
  age: number;
  job: string;
  city: string;
  country: string;
  state: string;
  categories: { id: string | number; name: string; tags: string[] }[];
}

const MainCard = ({
  fullname,
  thought,
  fansAmount,
  trustable,
  coolness,
  attractive,
  age,
  birthday,
  city,
  state,
  country,
  job,
  maritalStatus,
  categories,
}: MainCardProps) => {
  return (
    <Container>
      <Title>Boa tarde, {fullname}</Title>
      <Thought>{thought}</Thought>
      <StatisticsContainer>
        <Statistic>
          <StatisticTitle>Fãs</StatisticTitle>
          <StatisticData>
            <AiOutlineStar color="#FACF41" />
            {fansAmount}
          </StatisticData>
        </Statistic>
        <Statistic>
          <StatisticTitle>Confiável</StatisticTitle>
          <StatisticData>
            {Array(trustable)
              .fill(0)
              .map(() => (
                <BsEmojiSmile color="#FACF41" />
              ))}
          </StatisticData>
        </Statistic>
        <Statistic>
          <StatisticTitle>Legal</StatisticTitle>
          <StatisticData>
            {Array(coolness)
              .fill(0)
              .map(() => (
                <FiThumbsUp color="#26CAFF" />
              ))}
          </StatisticData>
        </Statistic>
        <Statistic>
          <StatisticTitle>Sexy</StatisticTitle>
          <StatisticData>
            {Array(attractive)
              .fill(0)
              .map(() => (
                <AiOutlineHeart color="#ED2590" />
              ))}
          </StatisticData>
        </Statistic>
      </StatisticsContainer>
      <DetailsDataContainer>
        <Detail>
          Relacionamento: <strong>{maritalStatus}</strong>
        </Detail>
        <Detail>
          Aniversário: <strong>{birthday}</strong>
        </Detail>
        <Detail>
          Idade: <strong>{age}</strong>
        </Detail>
        <Detail>
          Quem sou eu: <strong>{job}</strong>
        </Detail>
        <Detail>
          Moro: <strong>{city}</strong>
        </Detail>
        <Detail>
          País: <strong>{country}</strong>
        </Detail>
        <Detail>
          Cidade: <strong>{state}</strong>
        </Detail>
      </DetailsDataContainer>
      <PreferencesContainer>
        {categories.map((category) => (
          <Preference key={`${category.id}`}>
            {category.name}:
            {category.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
            <SeeMoreLink>Ver todos</SeeMoreLink>
          </Preference>
        ))}
      </PreferencesContainer>
    </Container>
  );
};

export default MainCard;
