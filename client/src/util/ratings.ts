const ratingsToValues: Record<string, number> = {
  AAA: 27,
  "AA+": 25,
  AA: 24,
  "AA-": 23,
  "A+": 22,
  A: 21,
  "A-": 20,
  "BBB+": 19,
  BBB: 18,
  "BBB-": 17,
  "BB+": 16,
  BB: 15,
  "BB-": 14,
  "B+": 13,
  B: 12,
  "B-": 11,
  "CCC+": 10,
  CCC: 9,
  "CCC-": 8,
  CC: 7,
  C: 4,
  D: 3,
  NR: 0,
  "N/A": 0
};

function compareBondRating(rating1: string, rating2: string): number {
  return ratingsToValues[rating2] - ratingsToValues[rating1];
}

function getRatingValue(rating: string): number {
  return ratingsToValues[rating] ?? 99;
}

export { getRatingValue, compareBondRating };
