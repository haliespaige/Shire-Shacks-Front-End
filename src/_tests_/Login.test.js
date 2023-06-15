import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../components/Header";

describe("<Login />", () => {

  it("render with a form", () => {

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const formData = screen.getByRole("form");
    expect(formData).toBeInTheDocument();
  });
});