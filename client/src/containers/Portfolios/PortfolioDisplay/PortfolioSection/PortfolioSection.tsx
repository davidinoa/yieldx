import React from "react";
import { Row } from "react-bootstrap";
import clsx from "clsx";
import Tooltip from "elements/Tooltip/Tooltip";
import { ExportButton } from "containers/AssetExplorer/PortfolioBuilder/PortfolioBuilder.styles";
import { ReactComponent as Export } from "assets/svg/export.svg";
import {
  EditPositionsButton,
  PortfolioSectionWrapper,
  SectionEdit,
  SectionTitle
} from "./PortfolioSection.styles";

type Props = {
  title: string;
  version?: "CURRENT" | "ORIGINAL";
  children?: JSX.Element[] | JSX.Element;
  tooltipContent?: string;
  exportPositions?: () => void;
  onEditPositions?: () => void;
  onExportClick?: () => void;
};

export default function PortfolioSection({
  title,
  version,
  children,
  tooltipContent,
  exportPositions,
  onEditPositions,
  onExportClick
}: Props) {
  return (
    <div className={clsx("container-fluid", { "mb-3": exportPositions })}>
      <PortfolioSectionWrapper>
        <Row className="mb-2">
          <SectionTitle>
            <h2>
              {title}&nbsp;
              {tooltipContent && <Tooltip content={tooltipContent} />}
            </h2>
          </SectionTitle>

          <SectionEdit>
            {version && (
              <span>
                <b>VERSION: </b>
                {version}
              </span>
            )}
            {(exportPositions ?? onExportClick) && (
              <ExportButton onClick={exportPositions ?? onExportClick}>
                Export <Export />
              </ExportButton>
            )}
            {title.includes("Positions") && onEditPositions && (
              <EditPositionsButton
                data-testid="edit-positions-button"
                onClick={onEditPositions}
              >
                Edit positions
              </EditPositionsButton>
            )}
          </SectionEdit>
        </Row>
        {children}
      </PortfolioSectionWrapper>
    </div>
  );
}
