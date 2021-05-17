import React, { RefObject } from "react";
import styled, { css } from "styled-components";
import dayjs from "dayjs";
import { Container } from "react-bootstrap";
import YieldXPortfolio from "models/YieldXPortfolio";
import PDF from "./PDFService";

const PdfCss = css`
  .k-pdf-export {
    button,
    a {
      display: none;
    }

    .hidden-pdf,
    .pdf-hidden,
    .toggle-link,
    i {
      display: none;
    }
  }
`;
export const ExportOptions = styled.div`
  & button {
    padding: 0.5rem;
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: none !important;
    background-color: none !important;
    height: 200px;
    border: 1px solid#253859;
    border-radius: 7px;
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 165%;
      text-align: center;

      color: #6980a6;
    }
  }
`;
export const PDFStyles = styled.main`
  ${(props: { exporting: boolean }) => (props.exporting ? PdfCss : undefined)}
`;

export default ({
  children,
  exporting,
  setExporting
}: {
  children: React.ReactNode;
  exporting: boolean;
  setExporting: React.Dispatch<boolean>;
  portfolio: YieldXPortfolio;
}) => {
  const bodyRef = React.createRef();

  React.useEffect(() => {
    if (exporting && bodyRef.current) {
      document.documentElement.style.setProperty("--theme", "ag-theme-alpine");
      document.documentElement.style.setProperty("--page", "white");
      document.documentElement.style.setProperty("--dark", "#F6F6F9");
      document.documentElement.style.setProperty("--darkest", "white");
      document.documentElement.style.setProperty("--subtext-3", "black");
      document.documentElement.style.setProperty("--subtext-2", "black");
      document.documentElement.style.setProperty("--subtext-1", "black");
      document.documentElement.style.setProperty("--lightest", "black");
      document.documentElement.style.setProperty("--light", "black");
      document.documentElement.style.setProperty("--white", "black");
      PDF.createPdf(bodyRef.current as HTMLElement);

      setTimeout(() => {
        document.documentElement.style.setProperty(
          "--theme",
          "ag-theme-alpine-dark"
        );
        document.documentElement.style.setProperty("--page", " #03132f");
        document.documentElement.style.setProperty("--dark", "#0e1f3b");
        document.documentElement.style.setProperty("--darkest", "#03132f");
        document.documentElement.style.setProperty("--subtext-3", "#6980a6");
        document.documentElement.style.setProperty("--subtext-2", "white");
        document.documentElement.style.setProperty("--subtext-1", "white");
        document.documentElement.style.setProperty("--lightest", "white");
        document.documentElement.style.setProperty("--light", "white");
        document.documentElement.style.setProperty("--white", "white");
      }, 1000);
    }
    setExporting(false);
  }, [exporting, bodyRef, setExporting]);

  return (
    <PDFStyles exporting={exporting}>
      <section className="pdf-container">
        <section className="pdf-body" ref={bodyRef as RefObject<HTMLElement>}>
          {exporting && (
            <Container style={{ borderBottom: "1px solid black" }}>
              <h2>BestFit proposal</h2>
            </Container>
          )}
          {children}
          <Container style={{ maxWidth: "80vw", borderTop: "1px solid black" }}>
            <footer style={{ textAlign: "right" }}>
              Created on: {dayjs().format("MMM D, YYYY")}
            </footer>
          </Container>
        </section>
      </section>
    </PDFStyles>
  );
};
