import App from "./App";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

describe("Rendering App component", () => {
  it("can show Header, Content and Footer", () => {
    const { getByText } = render(<App />);

    expect(getByText("Customer Feedback")).toBeVisible();
    expect(getByText("Footer")).toBeVisible();
  });
});
