import React, { useState, FormEvent, useEffect } from "react";
import env from "react-dotenv";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/movie";
import {
  Container,
  Header,
  Content,
  Form,
  SearchForm,
  Wrapper,
  List,
  Information,
  Title,
  Description,
  Percentage,
  MovieDescription,
  Tag,
  Footer,
} from "./styles";
import api from "../../services/api";

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [movies, setMovies] = useState<any[]>([]);
  const [genreText, setGenreText] = useState<any[]>([]);
  const [recalculate, setRecalculate] = useState(false);
  const [pageNumber, setPageNumber] = useState<Array<number>>([0]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [moviesPerPage] = useState<number>(5);
  const privateKey = env.APP_PRIVATE_API_KEY;
  const { signIn, deleteItem } = useAuth();
  let pages: Array<number> = [];

  async function handleSearch(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const response = await api.get(
      `/search/movie?api_key=${privateKey}&language=pt-BR&query=${searchText}&page=1&include_adult=true`
    );
    const genreResponse = await api.get(
      `/genre/movie/list?api_key=${privateKey}&language=pt-BR`
    );

    setMovies(response.data.results);
    setGenreText(genreResponse.data.genres);
    setRecalculate(true);
  }

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  useEffect(() => {
    if (recalculate === true) {
      for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
        pages.push(i);
        setRecalculate(false);
      }

      setPageNumber(pages);
    }
  }, [recalculate, moviesPerPage, movies, pageNumber, pages]);

  const paginate = (page: number) => setCurrentPage(page);

  const setId = (id: any) => {
    deleteItem();
    signIn(id);
  };

  return (
    <Container>
      <Header>
        <Link to="/">
          <span>Movies</span>
        </Link>
      </Header>

      <Content>
        <Form onSubmit={handleSearch}>
          <SearchForm>
            <div>
              <input
                type="text"
                name="search"
                placeholder="Busque um filme por nome, ano ou gênero..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button icon={MdSearch} type="submit" />
            </div>
          </SearchForm>
        </Form>

        <Wrapper>
          {currentMovies.length ? (
            currentMovies.map((item) => (
              <List key={item.id}>
                <Link to="/detail" onClick={() => setId(item.id)}>
                  {item.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title}
                    />
                  ) : (
                    <div
                      style={{ background: "#fff", width: 260, height: 300 }}
                    ></div>
                  )}
                  <Information>
                    <Title>{item.title}</Title>
                    <Percentage>
                      <div>
                        <div>{Math.floor(item.vote_average * 10)}%</div>
                      </div>
                    </Percentage>
                    <Description>
                      <div>
                        <p>{item.release_date}</p>
                      </div>
                      <MovieDescription>{item.overview}</MovieDescription>
                      <Tag>
                        <ul>
                          {item.genre_ids.map((genre: number) => {
                            return genreText.map((value) => {
                              if (genre === value.id) {
                                return <li key={value.id}>{value.name}</li>;
                              }
                            });
                          })}
                        </ul>
                      </Tag>
                    </Description>
                  </Information>
                </Link>
              </List>
            ))
          ) : (
            <span>Faça a busca de um filme</span>
          )}
        </Wrapper>
      </Content>
      <Footer>
        <ul>
          {pageNumber.map((number: number) => (
            <li key={number}>
              <Link
                onClick={() => paginate(number)}
                to="/"
                style={
                  number === currentPage
                    ? {
                        backgroundColor: "#1881c6",
                        color: "#fff",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 50,
                        height: 50,
                        padding: 4,
                      }
                    : number === 0
                    ? {
                        pointerEvents: "none",
                        cursor: "none",
                      }
                    : {}
                }
              >
                <div
                  style={
                    number === currentPage
                      ? {
                          background: "#1bcecb",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 45,
                          height: 40,
                        }
                      : {}
                  }
                >
                  <div
                    style={
                      number === currentPage
                        ? {
                            background: "#1881c6",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 34,
                            height: 35,
                            color: "#1bcecb",
                            fontSize: 24,
                          }
                        : {}
                    }
                  >
                    {number}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Footer>
    </Container>
  );
};

export default Search;
