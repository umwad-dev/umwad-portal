import React, { Fragment, useEffect, useState } from "react";
import Result from "antd/es/result";
import {
  DownloadablesSelect,
  Footer,
  Navbar,
  SearchInput,
} from "../../components";
import { DownloadCard } from "./components";
import {
  BarContainer,
  CardContainer,
  Container,
  FilterContainer,
  FilterText,
  NoDataContainer,
  SearchContainer,
  Title,
  TopBanner,
} from "./Downloadables.styles";

const DownloadablesPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const data = [
    {
      id: 1,
      download: "bacolod",
      name: "Bacolod Startup 100 Ordinance",
      preview:
        "https://bacolodcity.gov.ph/wp-content/uploads/2022/12/CO-886-2019.pdf",
    },
    {
      id: 2,
      download: "dict",
      name: "DICT Programs for Startup",
      preview:
        "https://drive.google.com/file/d/11K3NYqzot4CLyCjjY6TjNEDYkwMHPEMx/view",
    },
    {
      id: 3,
      download: "startup-ordinance",
      name: "Iloilo Startup Ordinance",
      preview:
        "https://drive.google.com/drive/folders/1rsX_tBVKQS4PcrPESSyPBvmdKr_ObOPv",
    },
    {
      id: 4,
      download: "startup-ordinance-ppt",
      name: "Iloilo Startup Ordinance - Powerpoint",
      preview:
        "https://docs.google.com/presentation/d/196wNtyLWIHwpKP0xziVmb6l9Sq5HvVg5/edit#slide=id.p1",
    },
    {
      id: 5,
      download: "dost",
      name: "Joint DOST-IPO Administrative Order No. 02-2010",
      preview:
        "https://pcieerd.dost.gov.ph/images/downloads/project_related/IRR_RA_10055.pdf",
    },
    {
      id: 6,
      download: "startup-act",
      name: "Republic Act No. 11337 The Innovative Startup Act",
      preview:
        "https://innovate.dti.gov.ph/resources/laws-and-policies/innovation-and-startup-act/?fbclid=IwAR1iDhOYn-PRe7MJIkCG17vQoMf657c4rBmH48LhpLTPgYT7L-hKuMxYK8o",
    },
  ];

  useEffect(() => {
    if (searchText) {
      const filteredBySearchData = data.filter((data) =>
        data.name.toLowerCase().includes(searchText.toLowerCase())
      );

      setFilteredData(filteredBySearchData);
    } else {
      setFilteredData(data);
    }

    // eslint-disable-next-line
  }, [searchText]);

  return (
    <Fragment>
      <Navbar />
      <Container>
        <TopBanner>
          <Title>Downloadables</Title>
        </TopBanner>
        <BarContainer>
          <FilterContainer>
            <FilterText>Filter by:</FilterText>
            <DownloadablesSelect />
          </FilterContainer>
          <SearchContainer>
            <SearchInput onChange={(e) => setSearchText(e.target.value)} />
          </SearchContainer>
        </BarContainer>
        <CardContainer>
          {filteredData.length > 0 ? (
            filteredData.map((d) => <DownloadCard data={d} />)
          ) : (
            <NoDataContainer>
              <Result
                status="404"
                title="No downloadables found."
                subTitle="Sorry, we cannot load any downloadable data based on your searched texts."
              />
            </NoDataContainer>
          )}
        </CardContainer>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default DownloadablesPage;
