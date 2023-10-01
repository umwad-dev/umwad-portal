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
import { getAllStartupAction } from "../../features/startup/startupSlice";
import Navbar from "../../components/navbar/Navbar";
import {
  Container,
  CoverPhoto,
  InformationContainer,
  Line,
  LoadingContainer,
  ProfileContainer,
  ProfilePhoto,
  StartupHeader,
  StartupName,
  Vision,
} from "./Startup.styles";
import {
  AboutUs,
  Accelerator,
  AccountCard,
  ContactInformation,
  Incubation,
  Partners,
  Products,
  Services,
} from "./components";
import { Footer, Spinner } from "../../components";
import { formatTimestampDate } from "../../utils/conversion";
import DefaultBannerImg from "../../assets/default/default-banner.webp";
import DefaultLogoImg from "../../assets/default/default-logo.webp";

const StartupPage = () => {
  const [aboutUs, setAboutUs] = useState(null);
  const [startupDetails, setStartupDetails] = useState(null);
  const [services, setServices] = useState([]);
  const [partners, setPartners] = useState([]);
  const [products, setProducts] = useState([]);
  const [gender, setGender] = useState({
    male: 0,
    female: 0,
  });
  const { slug } = useParams();
  const navigate = useNavigate();

  const { startups, isLoading } = useSelector((state) => state.startup);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStartupAction());
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
    if (startupDetails?.uid) {
      const getServices = async () => {
        const servicesCol = collection(db, "startupServices");
        const servicesQuery = query(
          servicesCol,
          where("ownerUid", "==", startupDetails.uid)
        );
        const servicesQuerySnapshot = await getDocs(servicesQuery);
        const fetchedServices = [];

        servicesQuerySnapshot.forEach((doc) =>
          fetchedServices.push({ id: doc.id, ...doc.data() })
        );

        setServices(fetchedServices);
      };

      const getEmployees = async () => {
        const employeeCol = collection(db, "startupEmployees");
        const employeeQuery = query(
          employeeCol,
          where("ownerUid", "==", startupDetails.uid)
        );
        const employeeQuerySnapshot = await getDocs(employeeQuery);

        let male = 0;
        let female = 0;

        employeeQuerySnapshot.forEach((doc) => {
          if (doc.data().gender === "male") {
            male++;
          } else {
            female++;
          }
        });

        setGender({
          male,
          female,
        });
      };

      const getPartners = async () => {
        const partnersCol = collection(db, "startupPartners");
        const partnersQuery = query(
          partnersCol,
          where("ownerUid", "==", startupDetails.uid)
        );
        const partnersQuerySnapshot = await getDocs(partnersQuery);
        const fetchedPartners = [];

        partnersQuerySnapshot.forEach((doc) =>
          fetchedPartners.push({ id: doc.id, ...doc.data() })
        );

        setPartners(fetchedPartners);
      };

      const getProducts = async () => {
        const productsCol = collection(db, "startupProducts");
        const productsQuery = query(
          productsCol,
          where("ownerUid", "==", startupDetails.uid)
        );
        const productsQuerySnapshot = await getDocs(productsQuery);
        const fetchedProducts = [];

        productsQuerySnapshot.forEach((doc) =>
          fetchedProducts.push({ id: doc.id, ...doc.data() })
        );

        setProducts(fetchedProducts);
      };

      const getAboutUs = async () => {
        const aboutUsCol = collection(db, "startupAboutUs");
        const aboutUsQuery = query(
          aboutUsCol,
          where("uid", "==", startupDetails.uid)
        );
        const aboutUsQuerySnapshot = await getDocs(aboutUsQuery);
        const fetchedAboutUs = [];

        aboutUsQuerySnapshot.forEach((doc) =>
          fetchedAboutUs.push({ id: doc.id, ...doc.data() })
        );

        setAboutUs(fetchedAboutUs[0]);
      };

      getAboutUs();
      getEmployees();
      getServices();
      getPartners();
      getProducts();
    }
  }, [startupDetails?.uid]);

  useEffect(() => {
    if (startups.length > 0) {
      const getStartupInfo = startups.filter(
        (startup) => startup.slug === slug
      );

      if (getStartupInfo.length > 0) {
        let newStartupDetails = getStartupInfo[0];
        const createdAt = formatTimestampDate(getStartupInfo[0].createdAt);

        newStartupDetails = { ...newStartupDetails, createdAt };

        setStartupDetails(newStartupDetails);
      } else {
        return navigate("/startups");
      }
    }
  }, [navigate, slug, startups]);

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
          src={startupDetails ? startupDetails.bannerUrl : DefaultBannerImg}
        />
        <ProfileContainer>
          <ProfilePhoto
            alt="profile"
            src={startupDetails ? startupDetails.logoUrl : DefaultLogoImg}
          />
          <InformationContainer>
            <StartupHeader>Startup</StartupHeader>
            <StartupName>
              {startupDetails && startupDetails.businessName}
            </StartupName>
            <Vision>{startupDetails && startupDetails.description}</Vision>
          </InformationContainer>
        </ProfileContainer>
        <Line />
        {aboutUs ? <AboutUs aboutUs={aboutUs} /> : null}
        {products.length > 0 ? <Products products={products} /> : null}
        {services.length > 0 ? <Services services={services} /> : null}
        <Incubation startupDetails={startupDetails} />
        {startupDetails?.accelerator && (
          <Accelerator startupDetails={startupDetails} />
        )}
        {partners.length > 0 ? <Partners partners={partners} /> : null}
        <AccountCard
          female={gender.female}
          imageUrl={
            startupDetails && startupDetails.accountAssociatedProfileUrl
          }
          male={gender.male}
          name={startupDetails && startupDetails.accountAssociated}
        />
        <ContactInformation startupDetails={startupDetails && startupDetails} />
      </Container>
      <Footer />
    </Fragment>
  );
};

export default StartupPage;
