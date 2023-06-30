import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BlogItem from "../components/BlogItem";

describe("BlogItem", () => {
  const mockOnClick = jest.fn();

  test("renders blog item correctly", () => {
    render(
      <BlogItem
        title="Test Blog"
        author="John Doe"
        date="2023-06-30"
        content="This is a test blog"
        onClick={mockOnClick}
      />
    );

    expect(screen.getByText("Test Blog")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("2023-06-30")).toBeInTheDocument();
    expect(screen.getByText("This is a test blog")).toBeInTheDocument();
  });

  test("calls onClick handler when edit button is clicked", () => {
    render(
      <BlogItem
        title="Test Blog"
        author="John Doe"
        date="2023-06-30"
        content="This is a test blog"
        onClick={mockOnClick}
      />
    );

    const editButton = screen.getByAltText("edit button");
    fireEvent.click(editButton);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
