import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import MovieList from "../MovieList.component";
test("render the MovieList correctly", () => {
  const mockStore = configureStore();
  const mockedMovieList = [
    {
      Title: "Kuch Tum Kaho Kuch Hum Kahein",
      Year: "2002",
      imdbID: "tt0327004",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGVhMjBhYmQtMDFmZC00Mjc2LWIwZTYtMmJiY2ZkNjM4N2FlXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
  ];
  const { container } = render(
    <BrowserRouter>
      <Provider store={mockStore()}>
        <Routes>
          <Route path="/" element={<MovieList movieList={mockedMovieList} />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
