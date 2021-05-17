import React from "react";
import {
  NoItemAvailable
} from "./ListPages/ListPages.styles";

interface Props {
  title: string;
  message: string;
  Icon: React.ReactElement;
  className?: string;
}
function NoItemsMessage({ title, message, Icon, className }: Props) {
  return (
    <NoItemAvailable className={className}>
      {Icon}
      <h2>{title}</h2>
      <p>{message}</p>
    </NoItemAvailable>
  );
}

export default NoItemsMessage;
