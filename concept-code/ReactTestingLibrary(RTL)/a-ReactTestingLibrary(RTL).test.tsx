import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "./Counter";

describe("Counter Component", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it("renders with initial state", () => {
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.queryByTestId("error")).not.toBeInTheDocument();
  });

  it("increments the counter", () => {
    const incrementButton = screen.getByRole("button", {
      name: /Increment value/i,
    });

    fireEvent.click(incrementButton);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByTestId("error")).toBeInTheDocument(); // Since 1 is odd
  });

  it("decrements the counter", () => {
    const incrementButton = screen.getByRole("button", {
      name: /Increment value/i,
    });
    const decrementButton = screen.getByRole("button", {
      name: /Decrement value/i,
    });

    // First increment to make sure we can decrement from 1 to 0
    fireEvent.click(incrementButton);
    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(decrementButton);

    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.queryByTestId("error")).not.toBeInTheDocument(); // Since 0 is even
  });
});
