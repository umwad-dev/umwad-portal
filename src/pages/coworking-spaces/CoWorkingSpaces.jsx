import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Result from "antd/es/result";
import {
  CoworkingCard,
  Footer,
  Navbar,
  SearchInput,
  Spinner,
  TBISelect,
} from "../../components";
import { tbiProvinces } from "../../utils/address";
import {
  BarContainer,
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
} from "./CoWorkingSpaces.styles";
import { getAllCoWorkingSpaceAction } from "../../features/co-working-space/coWorkingSpaceSlice";
import { collection, doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

const CoWorkingSpacesPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [province, setProvince] = useState("All");
  const [searchText, setSearchText] = useState("");

  const { coWorkingSpaces, isLoading } = useSelector(
    (state) => state.coWorkingSpace
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoWorkingSpaceAction());
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
    if (coWorkingSpaces?.length > 0) {
      if (province === "All") {
        setFilteredData(coWorkingSpaces);
      } else {
        const filterByProvinceData = coWorkingSpaces.filter(
          (data) => data.validated === true && data.province === province
        );

        setFilteredData(filterByProvinceData);
      }
    }
  }, [province, coWorkingSpaces]);

  useEffect(() => {
    if (coWorkingSpaces?.length > 0) {
      if (searchText) {
        const filteredBySearchData = coWorkingSpaces.filter(
          (data) =>
            data.validated === true &&
            data.name.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilteredData(filteredBySearchData);
      } else {
        setFilteredData(
          coWorkingSpaces.filter((data) => data.validated === true)
        );
      }
    }
  }, [coWorkingSpaces, searchText]);

  return (
    <Fragment>
      <TopBgImg />
      <Navbar />
      <Container>
        <Subtitle>
          Embrace a New Era of Work, Inspire, Collaborate, Thrive
        </Subtitle>
        <Title>Co-working spaces</Title>
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
            {filteredData.length > 0 ? (
              filteredData
                .filter((data) => data.validated === true)
                .map((data, idx) => {
                  const isOdd = idx % 2;

                  return (
                    <CoworkingCard
                      aside={isOdd === 0 ? true : false}
                      key={idx}
                      data={data}
                    />
                  );
                })
            ) : (
              <NoDataContainer>
                <Result
                  status="404"
                  title="No Co-working Spaces found."
                  subTitle="Sorry, we cannot load any co-working space data as of the moment."
                />
              </NoDataContainer>
            )}
          </CardContainer>
        )}
      </Container>
      <Footer />
    </Fragment>
  );
};

export default CoWorkingSpacesPage;
