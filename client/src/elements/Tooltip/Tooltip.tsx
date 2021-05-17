import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import styled from "styled-components";
import { ReactComponent as InfoIcon } from "../../assets/svg/info.svg";
import { TooltipIcon } from "./Tooltip.styles";

const StyledOverlayTrigger = styled(OverlayTrigger).attrs({
  className: "pdf-hidden"
})``;

function Tooltip({ content }: { content: string }) {
  return (
    <StyledOverlayTrigger
      placement="top"
      overlay={
        <Popover id="popover">
          <Popover.Content>{content}</Popover.Content>
        </Popover>
      }
    >
      <TooltipIcon>
        <InfoIcon />
      </TooltipIcon>
    </StyledOverlayTrigger>
  );
}

export default Tooltip;
