import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  collection,
  doc,
  getDocs,
  increment,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { getAllTBIAction } from "../../features/tbi/tbiSlice";
import Navbar from "../../components/navbar/Navbar";
import {
  BottomContainer,
  Container,
  CoverPhoto,
  InformationContainer,
  Line,
  LoadingContainer,
  ProfileContainer,
  ProfilePhoto,
  TBIHeader,
  TBIName,
  Vision,
} from "./TBI.styles";
import {
  AccountCard,
  ContactInformation,
  News,
  Partners,
  Programs,
  Services,
  StartupModal,
  Startups,
} from "./components";
import { Footer, Spinner } from "../../components";
import DefaultBannerImg from "../../assets/default/default-banner.webp";
import DefaultLogoImg from "../../assets/default/default-logo.webp";

const TBIPage = () => {
  const [tbiDetails, setTbiDetails] = useState({ uid: "" });
  const [news, setNews] = useState([]);
  const [open, setOpen] = useState(false);
  const [partners, setPartners] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [services, setServices] = useState([]);
  const [startups, setStartups] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  const { tbis, isLoading } = useSelector((state) => state.tbi);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTBIAction());
  }, [dispatch]);

  useEffect(() => {
    const addPageViews = async () => {
      try {
        const id = "YMLqKOtoTa3xFZP9GFYk";
        const col = collection(db, "analytics");
        const ref = doc(col, id);

        await updateDoc(ref, {
          userEngagement: increment(1),
          pageViews: increment(1),
        });
      } catch (err) {
        console.log(err);
      }
    };

    addPageViews();
  }, []);

  useEffect(() => {
    if (tbiDetails?.uid) {
      const getServices = async () => {
        const servicesCol = collection(db, "tbiServices");
        const servicesQuery = query(
          servicesCol,
          where("ownerUid", "==", tbiDetails.uid)
        );
        const servicesQuerySnapshot = await getDocs(servicesQuery);
        const fetchedServices = [];

        servicesQuerySnapshot.forEach((doc) =>
          fetchedServices.push({ id: doc.id, ...doc.data() })
        );

        setServices(fetchedServices);
      };

      const getPartners = async () => {
        const partnersCol = collection(db, "tbiPartners");
        const partnersQuery = query(
          partnersCol,
          where("ownerUid", "==", tbiDetails.uid)
        );
        const partnersQuerySnapshot = await getDocs(partnersQuery);
        const fetchedPartners = [];

        partnersQuerySnapshot.forEach((doc) =>
          fetchedPartners.push({ id: doc.id, ...doc.data() })
        );

        setPartners(fetchedPartners);
      };

      const getPrograms = async () => {
        const programsCol = collection(db, "programs");
        const programsQuery = query(
          programsCol,
          where("ownerUid", "==", tbiDetails.uid)
        );
        const programsQuerySnapshot = await getDocs(programsQuery);
        const fetchedPrograms = [];

        programsQuerySnapshot.forEach((doc) =>
          fetchedPrograms.push({ id: doc.id, ...doc.data() })
        );

        setPrograms(fetchedPrograms);
      };

      const getStartups = async () => {
        const startupsCol = collection(db, "startup");
        const startupsQuery = query(
          startupsCol,
          where("tbi.uid", "==", tbiDetails.uid)
        );
        const startupsQuerySnapshot = await getDocs(startupsQuery);
        const fetchedStartups = [];

        startupsQuerySnapshot.forEach((doc) =>
          fetchedStartups.push({ id: doc.id, ...doc.data() })
        );

        setStartups(fetchedStartups);
      };

      const getNews = async () => {
        const newsCol = collection(db, "news");
        const newsQuery = query(
          newsCol,
          where("ownerUid", "==", tbiDetails.uid)
        );
        const newsQuerySnapshot = await getDocs(newsQuery);
        const fetchedNews = [];

        newsQuerySnapshot.forEach((doc) =>
          fetchedNews.push({ id: doc.id, ...doc.data() })
        );

        setNews(fetchedNews);
      };

      getPartners();
      getPrograms();
      getServices();
      getStartups();
      getNews();
    }
  }, [tbiDetails?.uid]);

  useEffect(() => {
    if (tbis.length > 0) {
      const getTBIInfo = tbis.filter((tbi) => tbi.slug === slug);

      if (getTBIInfo.length > 0) {
        setTbiDetails(getTBIInfo[0]);
      } else {
        return navigate("/tbis");
      }
    }
  }, [navigate, slug, tbis]);

  if (isLoading) {
    return (
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    );
  }

  return (
    <Fragment>
      <Navbar />
      <Container>
        <CoverPhoto
          alt="cover"
          src={tbiDetails ? tbiDetails.bannerUrl : DefaultBannerImg}
        />
        <ProfileContainer>
          <ProfilePhoto
            alt="profile"
            src={tbiDetails ? tbiDetails.logoUrl : DefaultLogoImg}
          />
          <InformationContainer>
            <TBIHeader>Technology Business Incubator</TBIHeader>
            <TBIName>{tbiDetails && tbiDetails.tbiName}</TBIName>
            <Vision>{tbiDetails && tbiDetails.description}</Vision>
          </InformationContainer>
        </ProfileContainer>
        <Line />
        {services.length > 0 ? <Services services={services} /> : null}
        {programs.length > 0 ? <Programs programs={programs} /> : null}
        {partners.length > 0 ? <Partners partners={partners} /> : null}
        {startups.length > 0 ? (
          <Startups
            count={startups?.length}
            setOpen={setOpen}
            startups={startups}
          />
        ) : null}
        {news.length > 0 ? <News news={news} /> : null}
        <BottomContainer>
          <AccountCard tbiDetails={tbiDetails && tbiDetails} />
          <ContactInformation tbiDetails={tbiDetails && tbiDetails} />
        </BottomContainer>
      </Container>
      <StartupModal open={open} setOpen={setOpen} startups={startups} />
      <Footer />
    </Fragment>
  );
};

export default TBIPage;
