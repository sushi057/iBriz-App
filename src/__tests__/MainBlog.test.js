import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MainBlog from "../components/MainBlog";
import articles from "../assets/articles";

describe("MainBlog", () => {
  test("renders blog items correctly", () => {
    render(<MainBlog />);

    const blogItems = screen.getAllByTestId("blog-item");
    expect(blogItems.length).toBe(articles.length);

    articles.forEach((blog, index) => {
      const title = screen.getByText(blog.title);
      expect(title).toBeInTheDocument();

      const author = screen.getByText(blog.author);
      expect(author).toBeInTheDocument();

      const date = screen.getByText(blog.date);
      expect(date).toBeInTheDocument();

      const content = screen.getByText(blog.content);
      expect(content).toBeInTheDocument();

      fireEvent.click(blogItems[index]);
      // Add assertions or test any expected behavior after the click event
    });
  });
});
