import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trending from "./components/Trending";
import Header from "./components/Header";
import LastYear from "./components/LastYear";
import CurrentYear from "./components/CurrentYear";
import TopRated from "./components/TopRated";
import NowPlaying from "./components/NowPlaying";
import MovieDetails from "./components/MovieDetails";
import Series from "./components/Series";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/now-playing" element={<NowPlaying />} />
            <Route path="/top-rated" element={<TopRated />} />
            <Route path="/last-year" element={<LastYear />} />
            <Route path="/current-year" element={<CurrentYear />} />
            <Route path="/details/:id" element={<MovieDetails />} />
            <Route path="/series" element={<Series />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
