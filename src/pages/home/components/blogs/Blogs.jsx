import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Result from "antd/es/result";
import { db } from "../../../../firebase/firebase.config";
import { goToStoriesPage } from "../../../../utils/redirections";
import { Card, PrimaryButton } from "../../../../components";
import {
  BlogsWrapper,
  ButtonContainer,
  Container,
  Description,
  NoDataContainer,
  Title,
  TitleSpan,
} from "./Blogs.styles";

const Blogs = () => {
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const newsCol = collection(db, "news");
      const newsQuerySnapshot = await getDocs(newsCol);
      const fetchedNews = [];

      newsQuerySnapshot.forEach((doc) =>
        fetchedNews.push({ uid: doc.id, ...doc.data() })
      );

      fetchedNews.splice(6);

      setFilteredNews(fetchedNews);
    };

    getNews();
  }, []);

  return (
    <Container>
      <Description>Stay informed with our latest stories and news!</Description>
      <Title>
        Latest <TitleSpan>Posts</TitleSpan>
      </Title>
      <BlogsWrapper>
        {filteredNews.length > 0 ? (
          filteredNews.map(
            ({ author, bannerUrl, createdAt, uid, position, slug, title }) => (
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
      </BlogsWrapper>
      {filteredNews.length > 0 && (
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

export default Blogs;
