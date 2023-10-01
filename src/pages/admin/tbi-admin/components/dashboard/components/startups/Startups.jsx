import React, { useEffect, useState } from "react";
import Card from "antd/es/card";
import Statistic from "antd/es/statistic";
import {
  collection,
  getCountFromServer,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Chart from "react-apexcharts";
import { db } from "../../../../../../../firebase/firebase.config";
import { StyledCard } from "../../Dashboard.styles";
import { Container, Wrapper } from "./Startups.styles";
import { useSelector } from "react-redux";
import {
  HeartOutlined,
  InboxOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Startups = () => {
  const [startups, setStartups] = useState([]);
  const [income, setIncome] = useState([]);
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
    products: 0,
    services: 0,
    employees: 0,
    male: 0,
    female: 0,
    income: 0,
  });

  const { auth } = useSelector((state) => state.auth);

  useEffect(() => {
    const getStartups = async () => {
      const startupsCol = collection(db, "startup");
      const startupQuery = query(startupsCol, where("tbi.uid", "==", auth.uid));
      const startupsQuerySnapshot = await getDocs(startupQuery);
      const fetchedStartups = [];

      startupsQuerySnapshot.forEach((doc) =>
        fetchedStartups.push({ uid: doc.id, ...doc.data() })
      );

      setStartups(fetchedStartups);
    };

    getStartups();
  }, [auth.uid]);

  useEffect(() => {
    if (startups.length > 0) {
      const startupIds = [];

      startups.forEach((data) => {
        startupIds.push(data.uid);

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

      if (startupIds.length > 0) {
        const employeesCol = collection(db, "startupEmployees");
        const incomeCol = collection(db, "startupIncome");
        const partnersCol = collection(db, "startupPartners");
        const productsCol = collection(db, "startupProducts");
        const servicesCol = collection(db, "startupServices");

        startupIds.forEach((id) => {
          const employeesQuery = query(
            employeesCol,
            where("ownerUid", "==", id)
          );
          const incomeQuery = query(incomeCol, where("ownerUid", "==", id));
          const partnersQuery = query(partnersCol, where("ownerUid", "==", id));
          const productsQuery = query(productsCol, where("ownerUid", "==", id));
          const servicesQuery = query(servicesCol, where("ownerUid", "==", id));

          const getCounts = async () => {
            const employeesCountSnapshot = await getCountFromServer(
              employeesQuery
            );
            const partnersSnapshot = await getCountFromServer(partnersQuery);
            const productsSnapshot = await getCountFromServer(productsQuery);
            const servicesSnapshot = await getCountFromServer(servicesQuery);

            const employeesSnapshot = await getDocs(employeesQuery);
            const incomeSnapshot = await getDocs(incomeQuery);

            employeesSnapshot.forEach((doc) => {
              if (doc.data().gender === "female") {
                setCounts((prev) => ({
                  ...prev,
                  female: prev.female + 1,
                }));
              } else {
                setCounts((prev) => ({
                  ...prev,
                  female: prev.male + 1,
                }));
              }
            });

            const receivedIncome = [];

            incomeSnapshot.forEach((doc) => {
              setCounts((prev) => ({
                ...prev,
                income: prev.income + Number(doc.data().income),
              }));

              receivedIncome.push({ id: doc.id, ...doc.data() });
            });

            if (receivedIncome.length > 0) {
              setIncome(receivedIncome);
            }

            setCounts((prev) => ({
              ...prev,
              employees: prev.employees + employeesCountSnapshot.data().count,
              partners: prev.partners + partnersSnapshot.data().count,
              products: prev.products + productsSnapshot.data().count,
              services: prev.services + servicesSnapshot.data().count,
            }));
          };

          getCounts();
        });
      }
    }
  }, [startups]);

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

  const genderSeries = [counts.male, counts.female];

  console.log(income);

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
              value={counts.income}
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
        <Wrapper>
          <div>
            <p>Employees & Services</p>
            <Card style={{ width: "250px  ", marginBottom: 5 }}>
              <Statistic
                title="Total Employees"
                value={counts.employees}
                prefix={<UserOutlined />}
              />
            </Card>
            <Card style={{ width: "250px  ", marginBottom: 5 }}>
              <Statistic
                prefix={<ToolOutlined />}
                title="Total Services"
                value={counts.services}
              />
            </Card>
          </div>
          <div></div>
        </Wrapper>
      </Container>
    </StyledCard>
  );
};

export default Startups;
