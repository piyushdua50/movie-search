import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "@testing-library/react";
import Header from "../Header.component";
test("render the Header correctly", () => {
  const { container } = render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
