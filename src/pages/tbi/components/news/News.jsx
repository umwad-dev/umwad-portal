import React from "react";
import Result from "antd/es/result";
import { goToStoriesPage } from "../../../../utils/redirections";
import { Card, PrimaryButton } from "../../../../components";
import {
  ButtonContainer,
  Container,
  Description,
  NewsWrapper,
  NoDataContainer,
  Title,
  TitleSpan,
} from "./News.styles";

const News = ({ news }) => {
  return (
    <Container>
      <Description>Stay informed with our latest stories and news!</Description>
      <Title>
        Latest <TitleSpan>Posts</TitleSpan>
      </Title>
      <NewsWrapper>
        {news.length > 0 ? (
          news
            .filter((_, idx) => idx < 3)
            .map(
              ({
                author,
                bannerUrl,
                createdAt,
                position,
                slug,
                title,
                uid,
              }) => (
                <Card
                  key={uid}
                  author={author}
                  bannerUrl={bannerUrl}
                  createdAt={createdAt}
                  position={position}
                  slug={slug}
                  title={title}
                  uid={uid}
                />
              )
            )
        ) : (
          <NoDataContainer>
            <Result
              status="404"
              title="No articles/news found."
              subTitle="Sorry, we cannot load any articles/news as of the moment."
            />
          </NoDataContainer>
        )}
      </NewsWrapper>
      {news.length > 0 && (
        <ButtonContainer>
          <PrimaryButton
            fontWeight={400}
            name="SEE ALL STORIES"
            onClick={goToStoriesPage}
          />
        </ButtonContainer>
      )}
    </Container>
  );
};

export default News;
