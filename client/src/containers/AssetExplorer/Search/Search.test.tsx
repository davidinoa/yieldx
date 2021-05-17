import React from "react";
import { render, screen, waitFor } from "test/utils";
import Search, { createRowCountText } from "./Search";
import { ratings } from "./SearchOptionsBar/RatingsSlider/RatingsSlider";

describe("Search", () => {
  test("createRowCountText", async () => {
    render(<Search />);
    expect(createRowCountText).toBeDefined();
    await waitFor(() => screen.queryByText("hide"));
  });

  test("ratings", () => {
    expect(ratings).toHaveLength(26);
    expect(ratings).toMatchInlineSnapshot(`
      Array [
        "AAA",
        "AA+",
        "AA",
        "AA-",
        "A+",
        "A",
        "A-",
        "BBB+",
        "BBB",
        "BBB-",
        "BB+",
        "BB",
        "BB-",
        "B+",
        "B",
        "B-",
        "CCC+",
        "CCC",
        "CCC-",
        "CC+",
        "CC",
        "CC-",
        "C+",
        "C",
        "C-",
        "D",
      ]
    `);
  });
});
