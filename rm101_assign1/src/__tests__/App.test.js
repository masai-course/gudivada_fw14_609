import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "../App";

describe("Testing routing Application", () => {
  beforeAll(() => {
    global.score = 0;
    console.log("Resetting Score to 0");
  });

  describe("App component should", () => {
    beforeEach(() => {
      render(<App />);
    });

    it("render App and check structure", async () => {
      expect(screen.getByTestId("counter-value")).toBeInTheDocument();
      expect(
        screen.getByTestId("counter-increment-button")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("counter-decrement-button")
      ).toBeInTheDocument();
      global.score += 2;
    });

    it("Check Data Rendering", async () => {
      expect(screen.getByTestId("counter-value")).toHaveTextContent(0);
      global.score += 2;
    });

    it("check increment/decrement function", () => {
      let incButton = screen.getByTestId("counter-increment-button");
      let decButton = screen.getByTestId("counter-decrement-button");

      // clicked 3 times
      fireEvent.click(incButton);
      fireEvent.click(incButton);
      fireEvent.click(incButton);
      expect(screen.getByTestId("counter-value")).toHaveTextContent(3);
      global.score += 2;

      expect(decButton).not.toBeDisabled();
      // clicked 3 times
      fireEvent.click(decButton);
      fireEvent.click(decButton);
      fireEvent.click(decButton);
      expect(screen.getByTestId("counter-value")).toHaveTextContent(0);
      global.score += 2;

      expect(decButton).toBeDisabled();
      global.score += 2;
    });
  });

  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});
