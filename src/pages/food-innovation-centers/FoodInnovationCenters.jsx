import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Result from "antd/es/result";
import {
  FoodCard,
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
} from "./FoodInnovationCenters.styles";
import { getAllFoodAction } from "../../features/food-innovation/foodInnovationSlice";
import { collection, doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

const FoodInnovationCentersPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [province, setProvince] = useState("All");
  const [searchText, setSearchText] = useState("");

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
    if (foods?.length > 0) {
      if (province === "All") {
        setFilteredData(foods);
      } else {
        const filterByProvinceData = foods.filter(
          (data) => data.validated === true && data.province === province
        );

        setFilteredData(filterByProvinceData);
      }
    }
  }, [province, foods]);

  useEffect(() => {
    if (foods?.length > 0) {
      if (searchText) {
        const filteredBySearchData = foods.filter(
          (data) =>
            data.validated === true &&
            data.name.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilteredData(filteredBySearchData);
      } else {
        setFilteredData(foods.filter((data) => data.validated === true));
      }
    }
  }, [foods, searchText]);

  return (
    <Fragment>
      <TopBgImg />
      <Navbar />
      <Container>
        <Subtitle>
          Access our Center's resources and support for your food ideas.
        </Subtitle>
        <Title>Food Innovation Centers</Title>
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
                .map((data, idx) => <FoodCard key={idx} data={data} />)
            ) : (
              <NoDataContainer>
                <Result
                  status="404"
                  title="No Food Innovation Centers found."
                  subTitle="Sorry, we cannot load any food innovation center data as of the moment."
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

export default FoodInnovationCentersPage;
