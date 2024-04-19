/* eslint-disable no-unused-vars */
import UseGet from "../../Hooks/useGet";
import Loading from "../Loading/Loading";
import MovieCard from "../Movies/MovieCard";

const Actor = () => {
  const apiTopMovies = import.meta.env.VITE_TOP_PERSON;
  const apikey = import.meta.env.VITE_API_KEY;

  const { data, error, isLoading } = UseGet(
    `${apiTopMovies}?${apikey}&language=pt-BR&page=1`
  );

  console.log(data);

  if (isLoading) return <Loading />;
  return (
    <div id="home" className="container">
      <h1 className="home-title">
        <span>ACTOR</span> Most accessed/visited of the week{" "}
      </h1>

      {error && <p>{error}</p>}

      {data && data.map((item) => <MovieCard key={item.id} movie={item} />)}
    </div>
  );
};

export default Actor;
