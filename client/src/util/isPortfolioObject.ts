import { Portfolio, Position } from "@bondhouse/position-management";

// Type guard to check if object is PMS portfolio
export function isPortfolioObject(obj: unknown): obj is Portfolio {
  const castedObj = obj as Portfolio;
  return (
    castedObj.id !== undefined &&
    castedObj.positions !== undefined &&
    (castedObj.positions.length === 0 ||
      (castedObj.positions.length > 0 &&
        isPositionObject(castedObj.positions[0]))) &&
    castedObj.status !== undefined &&
    castedObj.createdAt !== undefined &&
    castedObj.currency !== undefined &&
    castedObj.name !== undefined
  );
}

function isPositionObject(obj: unknown): obj is Position {
  const castedObj = obj as Position;
  return (
    castedObj.id !== undefined &&
    castedObj.assetId !== undefined &&
    castedObj.quantity !== undefined &&
    castedObj.portfolioId !== undefined
  );
}
