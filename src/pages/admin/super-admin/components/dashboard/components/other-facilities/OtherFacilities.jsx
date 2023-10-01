import React, { useEffect, useState } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
import Card from "antd/es/card";
import Statistic from "antd/es/statistic";
import { db } from "../../../../../../../firebase/firebase.config";
import { StyledCard } from "../../Dashboard.styles";
import { CardContainer, Container } from "./OtherFacilities.styles";
import {
  CoffeeOutlined,
  DeliveredProcedureOutlined,
  MergeCellsOutlined,
  TableOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const OtherFacilities = () => {
  const [counts, setCounts] = useState({
    accelerators: 0,
    coWorkingSpaces: 0,
    fabLabs: 0,
    foods: 0,
    iHubs: 0,
  });

  useEffect(() => {
    const getCounts = async () => {
      const acceleratorCol = collection(db, "accelerator");
      const coWorkingSpaceCol = collection(db, "coWorkingSpace");
      const fabLabCol = collection(db, "fabLab");
      const foodCol = collection(db, "food");
      const iHubCol = collection(db, "iHub");

      const acceleratorQuery = await getCountFromServer(acceleratorCol);
      const coWorkingSpaceQuery = await getCountFromServer(coWorkingSpaceCol);
      const fabLabQuery = await getCountFromServer(fabLabCol);
      const foodQuery = await getCountFromServer(foodCol);
      const iHubQuery = await getCountFromServer(iHubCol);

      setCounts((prev) => ({
        ...prev,
        accelerators: acceleratorQuery.data().count,
        coWorkingSpaces: coWorkingSpaceQuery.data().count,
        fabLabs: fabLabQuery.data().count,
        foods: foodQuery.data().count,
        iHubs: iHubQuery.data().count,
      }));
    };

    getCounts();
  }, []);

  return (
    <StyledCard title="Other Facilities">
      <Container>
        <p>Total Counts</p>
        <CardContainer>
          <Card style={{ width: "400px", marginBottom: 5 }}>
            <Statistic
              prefix={<ThunderboltOutlined />}
              title="Total Accelerators"
              value={counts.accelerators}
            />
          </Card>
          <Card style={{ width: "400px", marginBottom: 5 }}>
            <Statistic
              prefix={<TableOutlined />}
              title="Total Co-working Spaces"
              value={counts.coWorkingSpaces}
            />
          </Card>
          <Card style={{ width: "400px", marginBottom: 5 }}>
            <Statistic
              prefix={<MergeCellsOutlined />}
              title="Total Fab Labs"
              value={counts.fabLabs}
            />
          </Card>
          <Card style={{ width: "400px", marginBottom: 5 }}>
            <Statistic
              prefix={<CoffeeOutlined />}
              title="Total Food Innovation Centers"
              value={counts.foods}
            />
          </Card>
          <Card style={{ width: "400px", marginBottom: 5 }}>
            <Statistic
              prefix={<DeliveredProcedureOutlined />}
              title="Total Innovation Hubs"
              value={counts.iHubs}
            />
          </Card>
        </CardContainer>
      </Container>
    </StyledCard>
  );
};

export default OtherFacilities;
