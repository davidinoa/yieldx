import dataIsEqual, {
  DataVal
} from "components/ComparisonBarChart/util/dataIsEqual";

const mockData1: DataVal = { label: "inpaas", value: 25 };
const mockData2: DataVal = {
  label: "average",
  value: 7
};

describe("dataIsEqual", () => {
  it("Should return false if inputs have different values", () => {
    const newData1Val = { ...mockData1, value: 20 };
    expect(dataIsEqual([mockData1, mockData2], [newData1Val, mockData2])).toBe(
      false
    );
    expect(dataIsEqual([mockData1, mockData2], [mockData1, newData1Val])).toBe(
      false
    );
  });

  it("Should return false if inputs have different labels", () => {
    const newData1Label = { ...mockData1, label: "new label" };
    expect(
      dataIsEqual([mockData1, mockData2], [newData1Label, mockData2])
    ).toBe(false);
    expect(
      dataIsEqual([mockData1, mockData2], [mockData1, newData1Label])
    ).toBe(false);
  });

  it("Should return true if they are same objects in memory and in value", () => {
    expect(dataIsEqual([mockData1, mockData2], [mockData1, mockData2])).toBe(
      true
    );
    expect(
      dataIsEqual([mockData1, mockData2], [{ ...mockData1 }, { ...mockData2 }])
    ).toBe(true);
  });
});
