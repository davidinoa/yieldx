import React from "react";
import {
  ListStatuses,
  Status
} from "../../../../components/ListPages/ListPages.styles";

type Props = {
  statusCount: {
    active: number;
    closed: number;
    tracking: number;
  };
};

export default function StatusList({ statusCount }: Props) {
  return (
    <ListStatuses>
      <span>
        <Status className="ready" />
        <b>active:</b>
        {statusCount.active}
      </span>
      <span>
        <Status className="terminated" />
        <b>closed:</b>
        {statusCount.closed}
      </span>
      <span>
        <Status className="tracking" />
        <b>tracking:</b>
        {statusCount.tracking}
      </span>
    </ListStatuses>
  );
}
