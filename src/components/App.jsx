import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import MoviesDetails from "../pages/MoviesDetails";
import { Layout } from "./Layout";
import { Cast } from "./Cast";
import { Reviews } from "./Reviews";



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path=":movieId" element={ <MoviesDetails /> }>
          <Route path="cast" element={ <Cast/> } />
          <Route path="reviews" element={ <Reviews />} />
        </Route>
      <Route path="movies" element={ <div>Search Movie</div> } />
      </Route>
    </Routes>
  );
};