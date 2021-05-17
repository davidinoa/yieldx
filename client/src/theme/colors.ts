export type Status =
  | "paper"
  | "processing"
  | "live"
  | "caution"
  | "issue"
  | "close"
  | "risk";

export const colorWheel = [
  "#125FEE",
  "#1981FF",
  "#19C2FF",
  "#42E8F1",
  "#ACFFEC",
  "#ACFFD0",
  "#ACFFB4",
  "#D0FEC2",
  "#EEFFC1",
  "#FFFBC1",
  "#F5EACC",
  "#FFCCE3",
  "#E5B3DA",
  "#CA7DE8",
  "#B96EF7",
  "#A066FF",
  "#8833FF",
  "#6C0AFF",
  "#4117E9"
];

export const colors = {
  white: "#ffffff",
  primary: {
    main: "#015CFF",
    hover: "#337CFF"
  },
  secondary: {
    main: "#19C2FF",
    hover: "#4DD0FF"
  },
  background: {
    page: "#03132F",
    container: "#1A2B48",
    component: "#304466",
    selected: "#475d83"
  },
  border: {
    main: "#5D6D88",
    hover: "#FFFFFF"
  },
  status: {
    paper: "#FFF",
    processing: "#19C2FF",
    live: "#00E8A0",
    caution: "#FCFF63",
    issue: "#FF5252",
    close: "#A6B2C6",
    risk: "#FFA15E"
  },
  text: {
    primary: "#FFF",
    // we should delete this and use a 'negative'
    secondary: "#03132F",
    negative: "#03132F",
    subText: {
      main: "#A6B2C6",
      hover: "#FFFFFF"
    }
  },
  gradient: {
    main: "linear-gradient(180deg, #015CFF 0%, #19C2FF 100%)",
    secondary: "linear-gradient(270deg, #19C2FF 0%, #015CFF 100%)",
    dark: "linear-gradient(180deg, #03132F 0%, rgba(3, 19, 47, 0) 100%)",
    verticalPrimarySecondary:
      "linear-gradient(180deg, #015CFF 0%, #19C2FF 100%)",
    pageGradient: "linear-gradient(180deg, #5D6D89 0%, #5D6D89 100%)"
  }
};
