import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Result from "antd/es/result";
import { getAllStartupAction } from "../../features/startup/startupSlice";
import {
  Footer,
  Navbar,
  SearchInput,
  Spinner,
  StartupCard,
  StartupSelect,
} from "../../components";
import {
  BarContainer,
  BottomBgImg,
  CardContainer,
  Container,
  FilterContainer,
  FilterText,
  LoadingContainer,
  NoDataContainer,
  SearchContainer,
  Subtitle,
  Title,
  TopBgImg,
} from "./Startups.styles";
import { collection, doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

const StartupsPage = () => {
  const [filteredStartups, setFilteredStartups] = useState([]);
  const [filterType, setFilterType] = useState("All Startups");
  const [searchText, setSearchText] = useState("");

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
    if (startups?.length > 0) {
      if (filterType === "All Startups") {
        setFilteredStartups(startups);
      } else {
        const filterStartupByType = startups
          .filter((startup) => startup.validated === true)
          .sort((a, b) => b.createdAt - a.createdAt);

        setFilteredStartups(filterStartupByType);
      }
    }
  }, [filterType, startups]);

  useEffect(() => {
    if (startups?.length > 0) {
      if (searchText) {
        const filterBySearchStartups = startups.filter(
          (startup) =>
            startup.validated === true &&
            startup.businessName
              .toLowerCase()
              .includes(searchText.toLowerCase())
        );

        setFilteredStartups(filterBySearchStartups);
      } else {
        setFilteredStartups(
          startups.filter((startup) => startup.validated === true)
        );
      }
    }
  }, [startups, searchText]);

  return (
    <Fragment>
      <TopBgImg />
      <Navbar color="black" />
      <Container>
        <Subtitle>Innovate. Disrupt. Succeed.</Subtitle>
        <Title>Startups</Title>
        <BarContainer>
          <FilterContainer>
            <FilterText>Filter by:</FilterText>
            <StartupSelect setFilterType={setFilterType} />
          </FilterContainer>
          <SearchContainer>
            <SearchInput onChange={(e) => setSearchText(e.target.value)} />
          </SearchContainer>
        </BarContainer>
        {isLoading ? (
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
        ) : (
          <CardContainer>
            {filteredStartups.length > 0 ? (
              filteredStartups
                .filter((startup) => startup.validated === true)
                .map((startup, idx) => (
                  <StartupCard
                    key={idx}
                    createdAt={startup.createdAt}
                    description={startup.description}
                    logo={startup.logoUrl}
                    slug={startup.slug}
                    title={startup.businessName}
                  />
                ))
            ) : (
              <NoDataContainer>
                <Result
                  status="404"
                  title="No startup found."
                  subTitle="Sorry, we cannot load any startup data as of the moment."
                />
              </NoDataContainer>
            )}
          </CardContainer>
        )}
        {/* <LoadMoreContainer>
          <LoadMoreText>
            Load More <LoadMoreSpan>Startups</LoadMoreSpan>
          </LoadMoreText>
        </LoadMoreContainer> */}
        <BottomBgImg />
      </Container>
      <Footer />
    </Fragment>
  );
};

export default StartupsPage;
