import React, { Fragment, useEffect, useState } from "react";
import Result from "antd/es/result";
import { useDispatch, useSelector } from "react-redux";
import { getAllTBIAction } from "../../features/tbi/tbiSlice";
import {
  Footer,
  Navbar,
  SearchInput,
  Spinner,
  TBICard,
  TBISelect,
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
} from "./TBIs.styles";
import { tbiProvinces } from "../../utils/address";
import { collection, doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

const TBIsPage = () => {
  const [filteredTBIs, setFilteredTBIs] = useState([]);
  const [province, setProvince] = useState("All");
  const [searchText, setSearchText] = useState("");

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
    if (tbis?.length > 0) {
      if (province === "All") {
        setFilteredTBIs(tbis);
      } else {
        const filterByProvinceTBI = tbis.filter(
          (tbi) => tbi.validated === true && tbi.province === province
        );

        setFilteredTBIs(filterByProvinceTBI);
      }
    }
  }, [province, tbis]);

  useEffect(() => {
    if (tbis?.length > 0) {
      if (searchText) {
        const filterBySearchTBI = tbis.filter(
          (tbi) =>
            tbi.validated === true &&
            tbi.tbiName.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilteredTBIs(filterBySearchTBI);
      } else {
        setFilteredTBIs(tbis.filter((tbi) => tbi.validated === true));
      }
    }
  }, [tbis, searchText]);

  return (
    <Fragment>
      <TopBgImg />
      <Navbar color="black" />
      <Container>
        <Subtitle>Accelerating Innovation, Fostering Growth</Subtitle>
        <Title>TECHNOLOGY BUSINESS INCUBATOR</Title>
        <BarContainer>
          <FilterContainer>
            <FilterText>Filter by:</FilterText>
            <TBISelect provinces={tbiProvinces} setProvince={setProvince} />
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
            {filteredTBIs.length > 0 ? (
              filteredTBIs
                .filter((tbi) => tbi.validated === true)
                .map((tbi, idx) => (
                  <TBICard
                    key={idx}
                    imgSrc={tbi.logoUrl}
                    name={tbi.tbiName}
                    slug={tbi.slug}
                  />
                ))
            ) : (
              <NoDataContainer>
                <Result
                  status="404"
                  title="No TBI found."
                  subTitle="Sorry, we cannot load any TBI data as of the moment."
                />
              </NoDataContainer>
            )}
          </CardContainer>
        )}
        {/* <LoadMoreContainer>
          <LoadMoreText>
            Load More <LoadMoreSpan>TBIs</LoadMoreSpan>
          </LoadMoreText>
        </LoadMoreContainer> */}
        <BottomBgImg />
      </Container>
      <Footer />
    </Fragment>
  );
};

export default TBIsPage;
