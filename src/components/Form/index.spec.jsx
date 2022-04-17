import FeedbackForm from "./index.jsx";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

describe("Rendering App component", () => {
  it("can show Header, Content and Footer", () => {
    const { getByText } = render(<FeedbackForm />);

    expect(getByText("Name")).toBeVisible();
    expect(getByText("Email")).toBeVisible();
  });
});
