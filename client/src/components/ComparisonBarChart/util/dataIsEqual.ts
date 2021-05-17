export type DataVal = { label: string; value: number };

function dataIsEqual(dataset1: DataVal[], dataset2: DataVal[]) {
  if (dataset1.length !== dataset2.length) return false;
  return dataset1.every((data1, i) => {
    const data2 = dataset2[i];
    if (data1.label !== data2.label) return false;
    return data1.value === data2.value;
  });
}

export default dataIsEqual;
