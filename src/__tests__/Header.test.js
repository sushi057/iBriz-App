import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  test("renders header correctly", () => {
    render(<Header />);

    const logoImage = screen.getByAltText("blog logo");
    expect(logoImage).toBeInTheDocument();

    const btnText = screen.getByText("Add new article");
    expect(btnText).toBeInTheDocument();

    const addBtn = screen.getByText("+");
    expect(addBtn).toBeInTheDocument();
  });
});
