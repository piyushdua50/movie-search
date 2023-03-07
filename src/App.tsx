import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FavoriteMovies from "./pages/favoriteMovies/FavoriteMovies.component";
import Home from "./pages/home/Home.component";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<FavoriteMovies />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
