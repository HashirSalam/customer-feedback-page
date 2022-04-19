import FeedbackForm from "./Form.jsx";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

describe("Rendering App component", () => {
  it("can render the form fields", () => {
    const { getByLabelText } = render(<FeedbackForm />);

    expect(getByLabelText("Name")).toBeVisible();
    expect(getByLabelText("Email")).toBeVisible();
    expect(getByLabelText("Comments")).toBeVisible();
  });
});
