import React, { useEffect, useState } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../../../../firebase/firebase.config";
import StatCard from "./components/stat-card/StatCard";
import {
  Container,
  Description,
  StatsContainer,
  Subtitle,
  Title,
  TitleSpan,
} from "./Stats.styles";
import RocketIcon from "../../../../assets/stats/rocket.webp";
import BuildingIcon from "../../../../assets/stats/building.webp";
import MetricsIcon from "../../../../assets/stats/metrics.webp";
import HouseIcon from "../../../../assets/stats/house.webp";
import HandshakeIcon from "../../../../assets/stats/handshake.webp";
import NoteIcon from "../../../../assets/stats/note.webp";

const Stats = () => {
  const [counts, setCounts] = useState({
    startups: 0,
    tbis: 0,
    accelerators: 0,
    otherFacilities: 0,
    partners: 0,
    articles: 0,
  });

  useEffect(() => {
    const getArticlesCount = async () => {
      const newsCol = collection(db, "news");
      const querySnapshot = await getCountFromServer(newsCol);

      setCounts((prev) => ({ ...prev, articles: querySnapshot.data().count }));
    };

    const getPartnersCount = async () => {
      const startupPartnersCol = collection(db, "startupPartners");
      const tbiPartnersCol = collection(db, "tbiPartners");
      const sQuerySnapshot = await getCountFromServer(startupPartnersCol);
      const tQuerySnapshot = await getCountFromServer(tbiPartnersCol);

      const totalCount =
        sQuerySnapshot.data().count + tQuerySnapshot.data().count;

      setCounts((prev) => ({ ...prev, partners: totalCount }));
    };

    const getStartupsCount = async () => {
      const startupsCol = collection(db, "startup");
      const querySnapshot = await getCountFromServer(startupsCol);

      setCounts((prev) => ({ ...prev, startups: querySnapshot.data().count }));
    };

    const getTBIsCount = async () => {
      const tbisCol = collection(db, "tbi");
      const querySnapshot = await getCountFromServer(tbisCol);

      setCounts((prev) => ({ ...prev, tbis: querySnapshot.data().count }));
    };

    const getAcceleratorCount = async () => {
      const accelCol = collection(db, "accelerator");
      const querySnapshot = await getCountFromServer(accelCol);

      setCounts((prev) => ({
        ...prev,
        accelerators: querySnapshot.data().count,
      }));
    };

    const getOtherFacilitiesCount = async () => {
      const ihubCol = collection(db, "iHub");
      const fabLabCol = collection(db, "fabLab");
      const coWorkingSpaceCol = collection(db, "coWorkingSpace");
      const foodCol = collection(db, "food");

      const ihubSnap = await getCountFromServer(ihubCol);
      const fabLabSnap = await getCountFromServer(fabLabCol);
      const coWorkingSpaceSnap = await getCountFromServer(coWorkingSpaceCol);
      const foodSnap = await getCountFromServer(foodCol);

      const totalCount =
        ihubSnap.data().count +
        fabLabSnap.data().count +
        coWorkingSpaceSnap.data().count +
        foodSnap.data().count;

      setCounts((prev) => ({ ...prev, otherFacilities: totalCount }));
    };

    getArticlesCount();
    getPartnersCount();
    getStartupsCount();
    getTBIsCount();
    getAcceleratorCount();
    getOtherFacilitiesCount();
  }, []);

  return (
    <Container>
      <Subtitle>Your one-stop platform for all things startup</Subtitle>
      <Title>
        Unveiling the <TitleSpan>Western Visayas Startup Ecosystem</TitleSpan>
      </Title>
      <Description>
        Western Visayas offers a dynamic startup ecosystem that provides a wide
        range of resources and support to entrepreneurs. We understand that
        starting a business is not easy, and we are committed to helping you
        every step of the way. From finding office space to hiring local talent,
        we have got you covered.
      </Description>
      <StatsContainer>
        <StatCard
          count={counts.startups}
          imgSrc={RocketIcon}
          title="Total Startups"
        />
        <StatCard
          count={counts.tbis}
          imgSrc={BuildingIcon}
          title="Total TBIs"
        />
        <StatCard
          count={counts.accelerators}
          imgSrc={MetricsIcon}
          title="Accelerators"
        />
        <StatCard
          count={counts.otherFacilities}
          imgSrc={HouseIcon}
          title="Other Facilities"
        />
        <StatCard
          count={counts.partners}
          imgSrc={HandshakeIcon}
          title="Total Partners"
        />
        <StatCard
          count={counts.articles}
          imgSrc={NoteIcon}
          title="Total Articles"
        />
      </StatsContainer>
    </Container>
  );
};

export default Stats;
