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
} from "./FoodInnovationCenter.styles";
import {
  AccountCard,
  ContactInformation,
  Partners,
  Products,
  Services,
} from "./components";
import { Footer, Spinner } from "../../components";
import { formatTimestampDate } from "../../utils/conversion";
import DefaultBannerImg from "../../assets/default/default-banner.webp";
import DefaultLogoImg from "../../assets/default/default-logo.webp";
import { getAllFoodAction } from "../../features/food-innovation/foodInnovationSlice";

const FoodInnovationCenterPage = () => {
  const [startupDetails, setStartupDetails] = useState(null);
  const [services, setServices] = useState([]);
  const [partners, setPartners] = useState([]);
  const [products, setProducts] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  const { foods, isLoading } = useSelector((state) => state.food);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFoodAction());
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
        const servicesCol = collection(db, "foodServices");
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

      const getPartners = async () => {
        const partnersCol = collection(db, "foodPartners");
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
        const productsCol = collection(db, "foodProducts");
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

      getServices();
      getPartners();
      getProducts();
    }
  }, [startupDetails?.uid]);

  useEffect(() => {
    if (foods.length > 0) {
      const getStartupInfo = foods.filter((startup) => startup.slug === slug);

      if (getStartupInfo.length > 0) {
        let newStartupDetails = getStartupInfo[0];
        const createdAt = formatTimestampDate(getStartupInfo[0].createdAt);

        newStartupDetails = { ...newStartupDetails, createdAt };

        setStartupDetails(newStartupDetails);
      } else {
        return navigate("/food-innovation-centers");
      }
    }
  }, [navigate, slug, foods]);

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
            <StartupHeader>Food Innovation Center</StartupHeader>
            <StartupName>
              {startupDetails && startupDetails.businessName}
            </StartupName>
            <Vision>{startupDetails && startupDetails.description}</Vision>
          </InformationContainer>
        </ProfileContainer>
        <Line />
        {products.length > 0 ? <Products products={products} /> : null}
        {services.length > 0 ? <Services services={services} /> : null}
        {partners.length > 0 ? <Partners partners={partners} /> : null}
        <AccountCard
          imageUrl={
            startupDetails && startupDetails.accountAssociatedProfileUrl
          }
          name={startupDetails && startupDetails.accountAssociated}
        />
        <ContactInformation startupDetails={startupDetails && startupDetails} />
      </Container>
      <Footer />
    </Fragment>
  );
};

export default FoodInnovationCenterPage;
