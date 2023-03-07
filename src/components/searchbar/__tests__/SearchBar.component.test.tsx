import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import SearchBar from "../SearchBar.component";
test("render the SearchBar correctly", () => {
  const mockStore = configureStore();
  const { container } = render(
    <BrowserRouter>
      <Provider store={mockStore()}>
        <Routes>
          <Route path="/" element={<SearchBar />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
