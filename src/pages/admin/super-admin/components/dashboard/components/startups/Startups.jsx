import React, { useEffect, useState } from "react";
import { collection, getCountFromServer, getDocs } from "firebase/firestore";
import Chart from "react-apexcharts";
import Card from "antd/es/card";
import Statistic from "antd/es/statistic";
import { db } from "../../../../../../../firebase/firebase.config";
import { StyledCard } from "../../Dashboard.styles";
import { Container } from "./Startups.styles";
import { HeartOutlined, InboxOutlined } from "@ant-design/icons";

const Startups = () => {
  const [startups, setStartups] = useState([]);
  const [startupEmployees, setStartupEmployees] = useState([]);
  const [provinces, setProvinces] = useState({
    aklan: 0,
    antique: 0,
    capiz: 0,
    guimaras: 0,
    iloilo: 0,
    negros: 0,
  });
  const [gender, setGender] = useState({
    female: 0,
    male: 0,
  });
  const [counts, setCounts] = useState({
    partners: 0,
    products: 0,
  });
  const [income, setIncome] = useState(0.0);

  useEffect(() => {
    const getStartups = async () => {
      const startupsCol = collection(db, "startup");
      const startupsQuerySnapshot = await getDocs(startupsCol);
      const fetchedStartups = [];

      startupsQuerySnapshot.forEach((doc) =>
        fetchedStartups.push({ uid: doc.id, ...doc.data() })
      );

      setStartups(fetchedStartups);
    };

    const getStartupEmployees = async () => {
      const col = collection(db, "startupEmployees");
      const querySnapshot = await getDocs(col);
      const fetchedEmployees = [];

      querySnapshot.forEach((doc) =>
        fetchedEmployees.push({ uid: doc.id, ...doc.data() })
      );

      setStartupEmployees(fetchedEmployees);
    };

    const getStartupIncome = async () => {
      const col = collection(db, "startupIncome");
      const querySnapshot = await getDocs(col);
      let accumulatedIncome = 0;

      querySnapshot.forEach(
        (doc) =>
          (accumulatedIncome = accumulatedIncome + Number(doc.data().income))
      );

      setIncome(accumulatedIncome);
    };

    const getPartnersCount = async () => {
      const partnersCol = collection(db, "startupPartners");
      const querySnapshot = await getCountFromServer(partnersCol);
      const productsCol = collection(db, "startupProducts");
      const pQuerySnapshot = await getCountFromServer(productsCol);

      setCounts((prev) => ({ ...prev, partners: querySnapshot.data().count }));
      setCounts((prev) => ({ ...prev, products: pQuerySnapshot.data().count }));
    };

    getPartnersCount();
    getStartupIncome();
    getStartupEmployees();
    getStartups();
  }, []);

  useEffect(() => {
    if (startups.length > 0) {
      startups.forEach((data) => {
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
  }, [startups]);

  useEffect(() => {
    if (startupEmployees.length > 0) {
      startupEmployees.forEach((data) => {
        if (data.gender === "male")
          return setGender((prev) => ({
            ...prev,
            male: prev.male + 1,
          }));
        if (data.gender === "female")
          return setGender((prev) => ({
            ...prev,
            female: prev.female + 1,
          }));
      });
    }
  }, [startupEmployees]);

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

  const genderOptions = {
    chart: {
      id: "apexchart-gender",
      width: 380,
    },
    labels: ["Male", "Female"],
  };

  const genderSeries = [gender.male, gender.female];

  return (
    <StyledCard title="Startups">
      <Container>
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
            Total Startups: <b>{startups.length}</b>
          </p>
        </div>
        <div>
          <p>Gender Aggregation</p>
          <Chart
            options={genderOptions}
            series={genderSeries}
            type="donut"
            width={400}
            height={320}
          />
        </div>
        <div>
          <p>Income, Partners & Products</p>
          <Card style={{ width: "250px  ", marginBottom: 5 }}>
            <Statistic
              title="Total Income"
              value={income}
              precision={2}
              prefix="₱"
            />
          </Card>
          <Card style={{ width: "250px  ", marginBottom: 5 }}>
            <Statistic
              prefix={<HeartOutlined />}
              title="Total Partners"
              value={counts.partners}
            />
          </Card>
          <Card style={{ width: "250px  ", marginBottom: 5 }}>
            <Statistic
              prefix={<InboxOutlined />}
              title="Total Products"
              value={counts.products}
            />
          </Card>
        </div>
      </Container>
    </StyledCard>
  );
};

export default Startups;
