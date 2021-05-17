type BreakPoint =
  1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

export interface ColBreakPoints {
  xs?: BreakPoint;
  s?: BreakPoint;
  m?: BreakPoint;
  l?: BreakPoint;
  xl?: BreakPoint;
  xxl?: BreakPoint;
}

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 760,
  lg: 992,
  xl: 1320,
  xxl: 1600,
  uxl: 1900
};

export const mediaQuery = (key: keyof typeof breakpoints, down?: boolean) => {
  const breakpoint = breakpoints[key];
  const query = `${!down ? "min" : "max"}-width:`;
  const size = down ? breakpoint - 1 : breakpoint;

  return `@media (${query} ${size}px)`;
};
