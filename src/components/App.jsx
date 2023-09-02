import {lazy} from 'react'
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";



const Home = lazy(() => import('../pages/Home'));
const SearchMovie = lazy(() => import('../pages/Search'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path=":movieId" element={ <MoviesDetails /> }>
          <Route path="cast" element={ <Cast/> } />
          <Route path="reviews" element={ <Reviews />} />
        </Route>
        <Route path="movies" element={ <SearchMovie /> } />
        <Route path="movies/:movieId" element={ <MoviesDetails /> } >
          <Route path="cast" element={ <Cast/> } />
          <Route path="reviews" element={ <Reviews />} />
        </Route>
      
      </Route>
    </Routes>
  );
};
