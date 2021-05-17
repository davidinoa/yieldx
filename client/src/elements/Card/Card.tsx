import React from "react";
import { ReactComponent as Edit } from "assets/svg/edit.svg";
import { EditLink, Root, Title } from "./Card.styles";
import Tooltip from "../Tooltip/Tooltip";

export type CardProps = {
  title: string;
  className?: string;
  toggle?: React.ReactNode;
  children?: React.ReactNode;
  tooltipContent?: string;
  onEdit?: () => void;
};

export function Card({
  className,
  title,
  onEdit,
  children,
  toggle,
  tooltipContent
}: CardProps) {
  return (
    <Root id="card" className={className}>
      <Title>
        {title}
        {tooltipContent && <Tooltip content={tooltipContent} />}
        {toggle}
        {onEdit && (
          <EditLink data-testid="Card-EditLink" onClick={onEdit}>
            <Edit /> Edit
          </EditLink>
        )}
      </Title>
      {children}
    </Root>
  );
}

export default Card;
