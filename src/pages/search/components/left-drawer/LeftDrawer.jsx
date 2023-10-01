import React from "react";
import Radio from "antd/es/radio";
import Space from "antd/es/space";
import {
  Container,
  Header,
  Line,
  StyledRadio,
  StyledResetButton,
  StyledSelect,
} from "./LeftDrawer.styles";

const LeftDrawer = ({
  setType,
  sortByDate,
  sortBySort,
  setSortByDate,
  setSortBySort,
  type,
}) => {
  const dateOptions = [
    { label: "Latest", value: "latest" },
    { label: "Oldest", value: "oldest" },
  ];

  const sortOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  const onResetClick = () => {
    setType(0);
    setSortByDate("latest");
    setSortBySort("ascending");
  };

  return (
    <Container>
      <Line />
      <Header>By Type</Header>
      <Radio.Group onChange={(e) => setType(e.target.value)} value={type}>
        <Space direction="vertical">
          <StyledRadio value={1}>TBI</StyledRadio>
          <StyledRadio value={2}>Startups</StyledRadio>
          <StyledRadio value={3}>News & Articles</StyledRadio>
        </Space>
      </Radio.Group>
      <br />
      <Line />
      <Header>Sort By</Header>
      <StyledSelect
        defaultValue={sortBySort}
        onChange={(value) => setSortBySort(value)}
        options={sortOptions}
        value={sortBySort}
      />
      <br />
      <Line />
      <Header>Date By</Header>
      <StyledSelect
        defaultValue={sortByDate}
        onChange={(value) => setSortByDate(value)}
        options={dateOptions}
        value={sortByDate}
      />
      <br />
      <Line />
      <br />
      <StyledResetButton onClick={onResetClick} type="primary">
        Reset
      </StyledResetButton>
    </Container>
  );
};

export default LeftDrawer;
