import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Result from "antd/es/result";
import { PrimaryButton, StartupCard } from "../../../../components";
import {
  ButtonContainer,
  CardContainer,
  Container,
  Description,
  InnerContainer,
  NoDataContainer,
  Title,
  TitleSpan,
} from "./Startups.styles";
import { goToStartupPage } from "../../../../utils/redirections";
import { getAllStartupAction } from "../../../../features/startup/startupSlice";

const Startups = () => {
  const [filteredStartups, setFilteredStartups] = useState([]);

  const { startups } = useSelector((state) => state.startup);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStartupAction());
  }, [dispatch]);

  useEffect(() => {
    if (startups?.length > 0) {
      const filteredValidatedStartups = startups
        .filter((startup) => startup.validated === true)
        .sort((a, b) => b.createdAt - a.createdAt);

      filteredValidatedStartups.splice(4);

      setFilteredStartups(filteredValidatedStartups);
    }
  }, [startups]);

  return (
    <Container>
      <InnerContainer>
        <Title>
          <TitleSpan>Our New </TitleSpan>Startups
        </Title>
        <Description>
          Discover the innovative startups driving Western Visayas forward.
        </Description>
        <CardContainer>
          {filteredStartups.length > 0 ? (
            filteredStartups.map((startup, idx) => (
              <StartupCard
                key={idx}
                createdAt={startup.createdAt}
                description={startup.description}
                logo={startup.logoUrl}
                slug={startup.slug}
                title={startup.businessName}
              />
            ))
          ) : (
            <NoDataContainer>
              <Result
                status="404"
                title="No startup found."
                subTitle="Sorry, we cannot load any startup data as of the moment."
              />
            </NoDataContainer>
          )}
        </CardContainer>
        <ButtonContainer>
          <PrimaryButton
            fontWeight={400}
            name="SEE ALL STARTUPS"
            onClick={goToStartupPage}
          />
        </ButtonContainer>
      </InnerContainer>
    </Container>
  );
};

export default Startups;
