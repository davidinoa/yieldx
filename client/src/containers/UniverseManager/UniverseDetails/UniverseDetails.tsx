import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { InventoriesApi, Inventory } from "@bondhouse/rover-universe";
import { useRecoilValue } from "recoil";
import { userState } from "services/userState";
import YieldXLoader from "elements/YieldXLoader/YieldXLoader";
import BackLink from "elements/BackLink/BackLink";
import { EditNameButton, RootContainer } from "./UniverseDetails.styles";
import { EditIcon } from "../../Portfolios/PortfolioDisplay/PortfolioHeader/PortfolioHeader.styles";
import EditUniverseName from "./EditUniverseName/EditUniverseName";
import InventoryGrid from "./InventoryGrid/InventoryGrid";

const api = new InventoriesApi();

export function useUniverseNameData(
  institutionId?: string,
  inventory?: Inventory
) {
  const [editingName, setEditingName] = useState(false);
  if (!inventory || !institutionId) return {};
  const handleNameUpdate = async (universe: Inventory, name: string) => {
    const constituents = [...universe.assetIds.map(assetId => ({ assetId }))];
    await api.updateInventory(institutionId, inventory.id, {
      inventory: { ...universe, name, constituents }
    });
  };

  return {
    setEditingName,
    EditUniverseNameModal: () => (
      <EditUniverseName
        show={editingName}
        onHide={() => setEditingName(false)}
        onSave={name => handleNameUpdate(inventory, name)}
      />
    )
  };
}

export default function UniverseDetails() {
  const { inventoryId } = useParams<{ inventoryId: string }>();
  const { institutionId } = useRecoilValue(userState);
  const [inventory, setInventory] = useState<Inventory>();

  useEffect(() => {
    if (institutionId)
      api
        .getInventory(institutionId, inventoryId)
        .then(res => setInventory(res.data.inventory));
  }, [inventoryId, institutionId]);

  const nameData = useUniverseNameData(institutionId, inventory);
  const { EditUniverseNameModal, setEditingName } = nameData;

  return EditUniverseNameModal && setEditingName && inventory ? (
    <RootContainer data-testid="universe-details">
      <EditUniverseNameModal />
      <BackLink text="All universes" to="/universes" />
      <Row className="header">
        <Col className="universe-name">
          <h2 className="d-flex">
            {inventory.name}
            <EditNameButton
              style={{ display: "none" }}
              onClick={() => setEditingName(true)}
            >
              <EditIcon />
            </EditNameButton>
          </h2>
        </Col>
      </Row>
      <Row className="grid">
        <Col>
          <InventoryGrid assetIds={inventory.assetIds} />
        </Col>
      </Row>
    </RootContainer>
  ) : (
    <YieldXLoader />
  );
}
