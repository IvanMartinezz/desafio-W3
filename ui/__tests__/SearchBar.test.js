import { render, fireEvent } from "@testing-library/react";

import SearchBar from "../src/components/SearchBar";

describe("SearchBar", () => {
  it("it display the data and trigger the events", async () => {
    const mockOnChange = jest.fn();
    const mockOnClick = jest.fn();

    const { getByRole, getByPlaceholderText } = render(
      <SearchBar
        onSearch={mockOnClick}
        onValueChange={mockOnChange}
        value={"test"}
      />
    );

    const button = getByRole("button");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalled();

    const input = getByPlaceholderText("Busca países");
    fireEvent.change(input, { target: { value: "ina" } });
    expect(mockOnChange).toHaveBeenCalledWith("ina");
  });
});
