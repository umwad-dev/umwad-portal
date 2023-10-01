import React from "react";
import SearchIcon from "../../assets/components/search-icon.webp";
import {
  Container,
  SearchImage,
  StyledSearchInput,
} from "./SearchInput.styles";

const SearchInput = ({ color, ...props }) => {
  return (
    <Container>
      <SearchImage alt="Search Icon" src={SearchIcon} />
      <StyledSearchInput color={color} placeholder="Search" {...props} />
    </Container>
  );
};

export default SearchInput;
