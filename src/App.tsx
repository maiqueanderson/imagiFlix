import { useEffect, useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import CONST from "./data/constants";
import Footer from "./components/Footer";
import Loading from "./components/Loading";


function App() {
  const { URL, APISTRING } = CONST;

  const [mainMovie, setMainMovie] = useState<any>(null);

  const [movies, setMovies] = useState<any>(null);

  const [series, setSeries] = useState<any>(null);

  const [loading, setLoading] = useState<boolean>(true);



  useEffect(() => {
    const fetchData = async () => {
      const moviesResponse = await fetch(
        `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
      );
      const moviesData = await moviesResponse.json();
      console.log(moviesData.results[0]);
      setMainMovie(moviesData.results[0]);
      setMovies(moviesData.results);

      const seriesResponse = await fetch(
        `${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`
      );
      const seriesData = await seriesResponse.json();
      setSeries(seriesData.results);  
      setLoading(false);

    };
    fetchData();
  }, []);

  return (
    <div className="bg-black text-white m-auto font-sans antialised">
      {
        loading && (
          <>
          <Loading/>
          </>
        )
      }
      {
        !loading && (
           <>
      <Hero
        title={mainMovie?.title}
        score={mainMovie?.vote_average}
        image={mainMovie?.backdrop_path}
      />
      <Navbar />
      <Carousel title="Filmes Populates" data={movies}/>
      <Carousel title="Series Populares" data={series} />
      <Footer/>
    </>
        )
      }
    </div>
    
  );
}

export default App;
