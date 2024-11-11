import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ButtonAction } from "./ButtonAction";

describe("ButtonAction", () => {
  test("should render the ButtonAction component", () => {
    // ARRANGE
    render(<ButtonAction>Click me</ButtonAction>);

    // ACT
    const button = screen.getByRole("button");

    // ASSERT
    expect(button).toBeDefined();
  });
});
