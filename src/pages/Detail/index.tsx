import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import env from "react-dotenv";
import { format, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";
import { useAuth } from "../../hooks/movie";
import api from "../../services/api";
import {
  Container,
  Header,
  Content,
  Title,
  Wrapper,
  Tag,
  Percentage,
} from "./styles";

const Search: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [video, setVideo] = useState<any>([]);
  const [date, setDate] = useState<any>("");
  const [budget, setBudget] = useState<any>("");
  const [revenue, setRevenue] = useState<any>("");
  const [profit, setProfit] = useState<any>("");
  const privateKey = env.APP_PRIVATE_API_KEY;
  const { id } = useAuth();

  useEffect(() => {
    const getHeroData = async () => {
      const response = await api.get(
        `/movie/${id}?api_key=${privateKey}&language=pt-BR`
      );

      const parsed = parseISO(response.data.release_date);
      const formattedDate = format(parsed, "dd/MM/yyyy", {
        locale: pt,
      });

      const budget = response.data.budget.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });

      const revenue = response.data.revenue.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });

      const profitNumber = response.data.revenue - response.data.budget;
      const profit = profitNumber.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });

      const videoResponse = await api.get(
        `/movie/${id}/videos?api_key=${privateKey}&language=pt-BR`
      );

      console.log(response.data);
      setData(response.data);
      setVideo(videoResponse.data.results);
      setDate(formattedDate);
      setBudget(budget);
      setRevenue(revenue);
      setProfit(profit);
    };

    getHeroData();
  }, [id, privateKey]);

  return (
    <Container>
      <Header>
        <Link to="/">
          <span>Movies</span>
        </Link>
      </Header>

      <Content>
        {data.id ? (
          <>
            <Title>
              <div>{data.title}</div>
              <span>{date}</span>
            </Title>
            <Wrapper>
              <div>
                <h3>Sinopse</h3>
                <span>{data.overview}</span>
                <h3>Informações</h3>
                <div>
                  <p>
                    Situação
                    <span>{data.status}</span>
                  </p>
                  <p>
                    Idioma
                    <span>
                      {data.spoken_languages.map((language: any) => (
                        <span key={language.name}>{language.english_name}</span>
                      ))}
                    </span>
                  </p>
                  <p>
                    Duração
                    <span>
                      {Math.floor(data.runtime / 60)}h {data.runtime % 60}min
                    </span>
                  </p>
                  <p>
                    Orçamento
                    <span>{budget}</span>
                  </p>
                  <p>
                    Receita
                    <span>{revenue}</span>
                  </p>
                  <p>
                    Lucro
                    <span>{profit}</span>
                  </p>
                </div>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
              />
            </Wrapper>
            <Tag>
              <ul>
                {data.genres.map((genre: any) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </Tag>
            <Percentage>
              <div>
                <div>{Math.floor(data.vote_average * 10)}%</div>
              </div>
            </Percentage>
          </>
        ) : null}
        {video.length
          ? video.map((item: any) => (
              <div key={item.id}>
                <iframe
                  key={item.id}
                  src={`https://www.youtube.com/embed/${item.key}`}
                  frameBorder="0"
                ></iframe>
              </div>
            ))
          : null}
      </Content>
    </Container>
  );
};

export default Search;
