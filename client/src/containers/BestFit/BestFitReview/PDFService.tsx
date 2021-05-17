import { savePDF } from "@progress/kendo-react-pdf";

class PDFService {
  createPdf = (html: HTMLElement) => {
    savePDF(html, {
      paperSize: "Letter",
      repeatHeaders: true,
      fileName: "bestfit_proposal.pdf",
      margin: "1.95cm",
      scale: 0.55,
      landscape: true,
      keepTogether: ".keep-together",
      forcePageBreak: ".break-page"
    });
  };
}

const PDF = new PDFService();
export default PDF;
