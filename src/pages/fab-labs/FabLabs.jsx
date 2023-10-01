import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Result from "antd/es/result";
import {
  FabLabCard,
  Footer,
  Navbar,
  SearchInput,
  Spinner,
  TBISelect,
} from "../../components";
import { tbiProvinces } from "../../utils/address";
import { getAllFabLabAction } from "../../features/fab-lab/fabLabSlice";
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
} from "./FabLabs.styles";
import { collection, doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

const FabLabsPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [province, setProvince] = useState("All");
  const [searchText, setSearchText] = useState("");

  const { fabLabs, isLoading } = useSelector((state) => state.fabLab);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFabLabAction());
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
    if (fabLabs?.length > 0) {
      if (province === "All") {
        setFilteredData(fabLabs);
      } else {
        const filterByProvinceData = fabLabs.filter(
          (data) => data.validated === true && data.province === province
        );

        setFilteredData(filterByProvinceData);
      }
    }
  }, [province, fabLabs]);

  useEffect(() => {
    if (fabLabs?.length > 0) {
      if (searchText) {
        const filteredBySearchData = fabLabs.filter(
          (data) =>
            data.validated === true &&
            data.name.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilteredData(filteredBySearchData);
      } else {
        setFilteredData(fabLabs.filter((data) => data.validated === true));
      }
    }
  }, [fabLabs, searchText]);

  return (
    <Fragment>
      <TopBgImg />
      <Navbar />
      <Container>
        <Subtitle>
          Unleash Boundless Innovation in Our Hub of Possibilities.
        </Subtitle>
        <Title>Fab-Labs</Title>
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
                .map((data, idx) => <FabLabCard key={idx} data={data} />)
            ) : (
              <NoDataContainer>
                <Result
                  status="404"
                  title="No Fab-Labs found."
                  subTitle="Sorry, we cannot load any fab-lab data as of the moment."
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

export default FabLabsPage;
