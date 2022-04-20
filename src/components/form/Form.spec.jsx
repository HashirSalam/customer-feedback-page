import FeedbackForm from "./Form.jsx";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "log").mockImplementation(() => {});
});
describe("Rendering Form component", () => {
  it("can render the form fields", () => {
    const { getByTestId } = render(<FeedbackForm />);

    expect(getByTestId("name-input")).toBeVisible();
    expect(getByTestId("email-input")).toBeVisible();
    expect(getByTestId("comments-input")).toBeVisible();
    expect(getByTestId("star")).toBeInTheDocument();
  });

  it("can render email field", () => {
    const { getByTestId } = render(<FeedbackForm />);

    expect(getByTestId("email-input")).toHaveAttribute("type", "email");
  });

  it("can fire validation for the email field", async () => {
    const { getByTestId } = render(<FeedbackForm />);

    const inputEl = getByTestId("email-input");

    await userEvent.type(inputEl, "test@gmail.com");

    expect(getByTestId("email-input")).toHaveValue("test@gmail.com");

    expect(getByTestId("email-input")).toBeValid();
  });

  it("can fire validation for the input fields", async () => {
    const { getByTestId } = render(<FeedbackForm />);

    const inputEl = getByTestId("name-input");
    await userEvent.type(inputEl, "test", { delay: 1 });

    expect(getByTestId("name-input")).toHaveValue("test");

    expect(getByTestId("name-input")).toBeValid();
  });

  it("can submit the form", async () => {
    const onFinish = jest.fn();

    const { getByTestId } = render(<FeedbackForm />);

    const form = getByTestId("form");
    form.onsubmit = onFinish;
    const btn = getByTestId("button-submit");

    await userEvent.click(btn);

    expect(onFinish).toHaveBeenCalledTimes(1);
  });
});
