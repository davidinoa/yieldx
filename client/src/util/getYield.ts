import { Analysis as StandardAnalysis } from "@bondhouse/rover-portfolio-analyzer";
import { Analysis as InpaasAnalysis } from "@bondhouse/income-portfolios";

/**
 * Get the yield from an analysis object. This helper function exists so you can retrieve yield easily without having to
 * put a bunch of ESLint and TSLint exclusions everywhere
 *
 * @param analysis - a Rover Portfolio Analyzer or InPaaS analysis
 */
export default function getYield(
  analysis: StandardAnalysis | InpaasAnalysis
): number | undefined {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return analysis.yield;
}
