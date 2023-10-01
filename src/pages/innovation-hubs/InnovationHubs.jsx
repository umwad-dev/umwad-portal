import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Result from "antd/es/result";
import {
  Footer,
  IHubCard,
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
} from "./InnovationHubs.styles";
import { getAllIHubAction } from "../../features/iHub/iHubSlice";
import { collection, doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

const InnovationHubsPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [province, setProvince] = useState("All");
  const [searchText, setSearchText] = useState("");

  const { iHubs, isLoading } = useSelector((state) => state.iHub);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllIHubAction());
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
    if (iHubs?.length > 0) {
      if (province === "All") {
        setFilteredData(iHubs);
      } else {
        const filterByProvinceData = iHubs.filter(
          (data) => data.validated === true && data.province === province
        );

        setFilteredData(filterByProvinceData);
      }
    }
  }, [province, iHubs]);

  useEffect(() => {
    if (iHubs?.length > 0) {
      if (searchText) {
        const filteredBySearchData = iHubs.filter(
          (data) =>
            data.validated === true &&
            data.name.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilteredData(filteredBySearchData);
      } else {
        setFilteredData(iHubs.filter((data) => data.validated === true));
      }
    }
  }, [iHubs, searchText]);

  return (
    <Fragment>
      <TopBgImg />
      <Navbar />
      <Container>
        <Subtitle>
          Unleash Boundless Innovation in Our Hub of Possibilities.
        </Subtitle>
        <Title>Innovation Hubs</Title>
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
                .map((data, idx) => <IHubCard key={idx} data={data} />)
            ) : (
              <NoDataContainer>
                <Result
                  status="404"
                  title="No Innovation Hubs found."
                  subTitle="Sorry, we cannot load any iHub data as of the moment."
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

export default InnovationHubsPage;
