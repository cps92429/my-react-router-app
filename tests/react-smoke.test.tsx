import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

function Hello() {
  return <h1>Hello Test</h1>;
}

describe("React smoke test", () => {
  it("renders heading", () => {
    render(<Hello />);
    expect(screen.getByRole("heading", { name: "Hello Test" })).toBeInTheDocument();
  });
});