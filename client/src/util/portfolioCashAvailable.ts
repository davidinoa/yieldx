type PartialPosition = {
  unsettled?: number;
  settled?: number;
  quantity?: number;
  id: string;
};

type PartialPortfolio = {
  positions: PartialPosition[];
};

export default function portfolioCashAvailable(portfolio: PartialPortfolio) {
  const cashPosition = portfolio.positions.find(
    position => position.id === "CASH-USD" || position.id === "USD"
  );
  return (cashPosition?.unsettled ?? 0) > 0
    ? cashPosition?.settled ?? 0
    : cashPosition?.quantity ?? 0;
}
