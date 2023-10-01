import React, { Fragment, useEffect, useState } from "react";
import Result from "antd/es/result";
import { useDispatch, useSelector } from "react-redux";
import {
  AcceleratorCard,
  Footer,
  Navbar,
  SearchInput,
  Spinner,
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
} from "./Accelerators.styles";
import { tbiProvinces } from "../../utils/address";
import { getAllAcceleratorAction } from "../../features/accelerator/acceleratorSlice";
import { collection, doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

const AcceleratorsPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [province, setProvince] = useState("All");
  const [searchText, setSearchText] = useState("");

  const { accelerators, isLoading } = useSelector((state) => state.accelerator);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAcceleratorAction());
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
    if (accelerators?.length > 0) {
      if (province === "All") {
        setFilteredData(accelerators);
      } else {
        const fiteredByProvinceData = accelerators.filter(
          (data) => data.validated === true && data.province === province
        );

        setFilteredData(fiteredByProvinceData);
      }
    }
  }, [province, accelerators]);

  useEffect(() => {
    if (accelerators?.length > 0) {
      if (searchText) {
        const filterBySearchData = accelerators.filter(
          (data) =>
            data.validated === true &&
            data.name.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilteredData(filterBySearchData);
      } else {
        setFilteredData(accelerators.filter((data) => data.validated === true));
      }
    }
  }, [accelerators, searchText]);

  return (
    <Fragment>
      <TopBgImg />
      <Navbar color="black" />
      <Container>
        <Subtitle>
          Empowering Startups to Reach New Heights through Acceleration.
        </Subtitle>
        <Title>ACCELERATOR</Title>
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
                .map((data, idx) => (
                  <AcceleratorCard
                    key={idx}
                    imgSrc={data.logoUrl}
                    name={data.name}
                    slug={data.slug}
                  />
                ))
            ) : (
              <NoDataContainer>
                <Result
                  status="404"
                  title="No Accelerator found."
                  subTitle="Sorry, we cannot load any accelerator data as of the moment."
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

export default AcceleratorsPage;
