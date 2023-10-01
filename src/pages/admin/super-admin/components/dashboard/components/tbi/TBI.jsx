import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Chart from "react-apexcharts";
import Card from "antd/es/card";
import Statistic from "antd/es/statistic";
import { db } from "../../../../../../../firebase/firebase.config";
import { StyledCard } from "../../Dashboard.styles";
import { Container, Count, Link } from "./TBI.styles";
import { Table } from "../../../../../../../components";
import {
  CalendarOutlined,
  EyeOutlined,
  HeartOutlined,
  LikeOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Startups = () => {
  const [tbis, setTbis] = useState([]);
  const [provinces, setProvinces] = useState({
    aklan: 0,
    antique: 0,
    capiz: 0,
    guimaras: 0,
    iloilo: 0,
    negros: 0,
  });
  const [counts, setCounts] = useState({
    partners: 0,
    programs: 0,
    services: 0,
    users: 0,
    pageViews: 0,
    userEngagement: 0,
  });

  useEffect(() => {
    const getTBIs = async () => {
      const col = collection(db, "tbi");
      const querySnapshot = await getDocs(col);
      const fetchedData = [];
      let idx = 0;

      querySnapshot.forEach((doc) => {
        idx += 1;

        return fetchedData.push({ idx: idx, uid: doc.id, ...doc.data() });
      });

      setTbis(fetchedData);
    };

    const getCounts = async () => {
      const tbiPartnersCol = collection(db, "tbiPartners");
      const tbiProgramsCol = collection(db, "programs");
      const tbiServicesCol = collection(db, "tbiServices");
      const usersCol = collection(db, "users");
      const tbiProgramsQuery = query(tbiProgramsCol, where("type", "==", 2));
      const id = "YMLqKOtoTa3xFZP9GFYk";
      const col = collection(db, "analytics");
      const ref = doc(col, id);

      const pageViews = await getDoc(ref);
      const tbiPartnersQuerySnapshot = await getCountFromServer(tbiPartnersCol);
      const tbiServicesQuerySnapshot = await getCountFromServer(tbiServicesCol);
      const tbiProgramsQuerySnapshot = await getCountFromServer(
        tbiProgramsQuery
      );
      const usersQuerySnapshot = await getCountFromServer(usersCol);

      setCounts((prev) => ({
        ...prev,
        users: usersQuerySnapshot.data().count,
        partners: tbiPartnersQuerySnapshot.data().count,
        programs: tbiProgramsQuerySnapshot.data().count,
        services: tbiServicesQuerySnapshot.data().count,
        pageViews: pageViews.exists() ? pageViews.data().pageViews : 0,
        userEngagement: pageViews.exists()
          ? pageViews.data().userEngagement
          : 0,
      }));
    };

    getCounts();
    getTBIs();
  }, []);

  useEffect(() => {
    if (tbis.length > 0) {
      tbis.forEach((data) => {
        if (data.province === "Aklan")
          return setProvinces((prev) => ({
            ...prev,
            aklan: prev.aklan + 1,
          }));
        if (data.province === "Antique")
          return setProvinces((prev) => ({
            ...prev,
            antique: prev.antique + 1,
          }));
        if (data.province === "Capiz")
          return setProvinces((prev) => ({
            ...prev,
            capiz: prev.capiz + 1,
          }));
        if (data.province === "Guimaras")
          return setProvinces((prev) => ({
            ...prev,
            guimaras: prev.guimaras + 1,
          }));
        if (data.province === "Iloilo")
          return setProvinces((prev) => ({
            ...prev,
            iloilo: prev.iloilo + 1,
          }));
        if (data.province === "Negros Occidental")
          return setProvinces((prev) => ({
            ...prev,
            negros: prev.negros + 1,
          }));
      });
    }
  }, [tbis]);

  const provinceOptions = {
    chart: {
      id: "apexchart-province",
    },
    colors: ["#ff6378", "#40a0fc", "#50e7a6", "#febc4a", "#52b3a9", "#da3eec"],
    xaxis: {
      categories: [
        "Aklan",
        "Antique",
        "Capiz",
        "Guimaras",
        "Iloilo",
        "Negros Occidental",
      ],
    },
  };

  const provinceSeries = [
    {
      name: "Count",
      data: [
        provinces.aklan,
        provinces.antique,
        provinces.capiz,
        provinces.guimaras,
        provinces.iloilo,
        provinces.negros,
      ],
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "idx",
      key: "idx",
      render: (text) => <Count>{text}</Count>,
    },
    {
      title: "TBI Name",
      dataIndex: "tbiName",
      key: "tbiName",
    },
    {
      title: "Province",
      dataIndex: "province",
      key: "province",
    },
    {
      title: "Manage Profile",
      render: (text) => (
        <Link
          href={`/tbi/${text.slug}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Profile
        </Link>
      ),
    },
  ];

  return (
    <StyledCard title="Technology Business Incubators / Portal Traffic">
      <Container>
        <div style={{ width: "100%" }}>
          <Table columns={columns} data={tbis} />
        </div>
        <div>
          <p>Provinces</p>
          <Chart
            options={provinceOptions}
            series={provinceSeries}
            type="bar"
            width={400}
            height={320}
          />
          <p>
            Total TBIs: <b>{tbis.length}</b>
          </p>
        </div>
        <div>
          <p>Total Counts</p>
          <Card style={{ width: "300px", marginBottom: 5 }}>
            <Statistic
              title="Total Programs"
              prefix={<CalendarOutlined />}
              value={counts.programs}
            />
          </Card>
          <Card style={{ width: "300px", marginBottom: 5 }}>
            <Statistic
              title="Total Partners"
              prefix={<HeartOutlined />}
              value={counts.partners}
            />
          </Card>
          <Card style={{ width: "300px", marginBottom: 5 }}>
            <Statistic
              title="Total Services"
              prefix={<ToolOutlined />}
              value={counts.services}
            />
          </Card>
        </div>
        <div>
          <p>Portal Traffic</p>
          <Card style={{ width: "300px", marginBottom: 5 }}>
            <Statistic
              title="Total Users"
              prefix={<UserOutlined />}
              value={counts.users}
            />
          </Card>
          <Card style={{ width: "300px", marginBottom: 5 }}>
            <Statistic
              title="Total Page Views"
              prefix={<EyeOutlined />}
              value={counts.pageViews}
            />
          </Card>
          <Card style={{ width: "300px", marginBottom: 5 }}>
            <Statistic
              title="Total User Engagement"
              prefix={<LikeOutlined />}
              value={counts.userEngagement}
            />
          </Card>
        </div>
      </Container>
    </StyledCard>
  );
};

export default Startups;
