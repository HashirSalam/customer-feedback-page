import Chart from "./Chart.jsx";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

describe("Rendering Chart component", () => {
  it("can render the doughnut", () => {
    const { getByTestId } = render(<Chart data={[12, 12, 12]} />);

    expect(getByTestId("doughnut-chart")).toBeVisible();
  });
});
