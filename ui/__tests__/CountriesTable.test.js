import { render } from "@testing-library/react";

import CountriesTable from "../src/components/CountriesTable";

const mockData = [
  {
    id: 2,
    name: "China",
    population: "1.403.426.000",
    percentage_population: "2",
  },
  {
    id: 12,
    name: "Filipinas",
    population: "108.772.000",
    percentage_population: "1.987",
  },
];

describe("CountriesTable", () => {
  it("it display the data and headers", async () => {
    const { getByText } = render(<CountriesTable data={mockData} />);
    expect(getByText("China"));
    expect(getByText("1.403.426.000"));
    expect(getByText("Filipinas"));
    expect(getByText("108.772.000"));

    expect(getByText("Nombre"));
    expect(getByText("Población"));
  });
});
