import React, { useState } from "react";
import {
  ButtonContainer,
  Container,
  Header,
  Line,
  SelectContainer,
  StyledApplyButton,
  StyledButton,
  StyledDrawer,
  StyledResetButton,
  StyledSelect,
  TypeContainer,
} from "./Drawer.styles";

const Drawer = ({
  open,
  setOpen,
  setType,
  sortByDate,
  sortBySort,
  setSortByDate,
  setSortBySort,
}) => {
  const [sortType, setSortType] = useState(0);
  const [dateSort, setDateSort] = useState("latest");
  const [sort, setSort] = useState("ascending");

  const onClose = () => setOpen(false);

  const onSetTypeClick = (num) => setSortType(num);

  const dateOptions = [
    { label: "Latest", value: "latest" },
    { label: "Oldest", value: "oldest" },
  ];

  const sortOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  const onResetClick = () => {
    setSortType(0);
    setDateSort("latest");
    setSort("ascending");
  };

  const onApplyChangesClick = () => {
    setType(sortType);
    setSortByDate(dateSort);
    setSortBySort(sort);
    setOpen(false);
  };

  return (
    <StyledDrawer onClose={onClose} open={open} title="Search Filter">
      <Container>
        <TypeContainer>
          <Header>By Type</Header>
          <ButtonContainer>
            <StyledButton className="" onClick={() => onSetTypeClick(1)}>
              TBI
            </StyledButton>
            <StyledButton onClick={() => onSetTypeClick(2)}>
              Startups
            </StyledButton>
            <StyledButton onClick={() => onSetTypeClick(3)}>
              News & Articles
            </StyledButton>
          </ButtonContainer>
          <Line />
        </TypeContainer>
        <SelectContainer>
          <Header>Sort By</Header>
          <StyledSelect
            defaultValue={sortBySort}
            onChange={(value) => setSort(value)}
            options={sortOptions}
            value={sort}
          />
          <Line />
        </SelectContainer>
        <SelectContainer>
          <Header>Date By</Header>
          <StyledSelect
            defaultValue={sortByDate}
            onChange={(value) => setDateSort(value)}
            options={dateOptions}
            value={dateSort}
          />
          <Line />
        </SelectContainer>
        <StyledResetButton onClick={onResetClick} type="default">
          Reset
        </StyledResetButton>
        <StyledApplyButton onClick={onApplyChangesClick} type="primary">
          Apply
        </StyledApplyButton>
      </Container>
    </StyledDrawer>
  );
};

export default Drawer;
