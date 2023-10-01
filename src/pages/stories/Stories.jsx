import React, { Fragment, useEffect, useState } from "react";
import {
  collection,
  doc,
  getDocs,
  increment,
  updateDoc,
} from "firebase/firestore";
import Result from "antd/es/result";
import { db } from "../../firebase/firebase.config";
import {
  Card,
  FeatureCarousel,
  Footer,
  Navbar,
  SearchInput,
  StoriesSelect,
} from "../../components";
import {
  BarContainer,
  BottomBgImg,
  Container,
  FilterContainer,
  FilterText,
  NoDataContainer,
  SearchContainer,
  SectionTitle,
  StoriesCarouselWrapper,
  StoriesWrapper,
  StoryContainer,
  Subtitle,
  Title,
  TopBgImg,
} from "./Stories.styles";

const StoriesPage = () => {
  const [featuredNews, setFeaturedNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [news, setNews] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getNews = async () => {
      const newsCol = collection(db, "news");
      const newsQuerySnapshot = await getDocs(newsCol);
      const fetchedNews = [];

      newsQuerySnapshot.forEach((doc) =>
        fetchedNews.push({ uid: doc.id, ...doc.data() })
      );

      setNews(fetchedNews);

      const featuredNews = fetchedNews.filter((news) => news.featured === true);

      setFeaturedNews(featuredNews);
    };

    getNews();
  }, []);

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
    if (news.length > 0) {
      if (filterType === "All") {
        setFilteredNews(news);
      } else {
        const fiterNewsByType = news.sort((a, b) => b.createdAt - a.createdAt);

        setFilteredNews(fiterNewsByType);
      }
    }
  }, [filterType, news]);

  useEffect(() => {
    if (news.length > 0) {
      if (searchText) {
        const filterBySearchNews = news.filter((news) =>
          news.title.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilteredNews(filterBySearchNews);
      } else {
        setFilteredNews(news);
      }
    }
  }, [news, searchText]);

  return (
    <Fragment>
      <TopBgImg />
      <Navbar color="black" />
      <Container>
        <Subtitle>
          Top news and articles posted by different facilities across Western
          Visayas.
        </Subtitle>
        <Title>News & Articles</Title>
        <BarContainer>
          <FilterContainer>
            <FilterText>Filter by:</FilterText>
            <StoriesSelect setFilterType={setFilterType} />
          </FilterContainer>
          <SearchContainer>
            <SearchInput onChange={(e) => setSearchText(e.target.value)} />
          </SearchContainer>
        </BarContainer>
        <StoryContainer>
          {featuredNews.length > 0 && (
            <SectionTitle>Featured Posts</SectionTitle>
          )}
          <StoriesCarouselWrapper>
            <FeatureCarousel featuredPosts={featuredNews} />
          </StoriesCarouselWrapper>
          <SectionTitle>All News & Articles</SectionTitle>
          <StoriesWrapper>
            {filteredNews.length > 0 ? (
              filteredNews.map(
                ({
                  author,
                  bannerUrl,
                  createdAt,
                  uid,
                  position,
                  slug,
                  title,
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
          </StoriesWrapper>
        </StoryContainer>
        <BottomBgImg />
      </Container>
      <Footer />
    </Fragment>
  );
};

export default StoriesPage;
