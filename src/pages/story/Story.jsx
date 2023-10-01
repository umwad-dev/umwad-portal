import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import dompurify from "dompurify";
import { db } from "../../firebase/firebase.config";
import {
  Container,
  DownTitle,
  SectionContainer,
  SeeAllStories,
  SeeAllStoriesSpan,
  StoriesWrapper,
  TextContainer,
  TopBgAuthor,
  TopBgImg,
  TopBgTime,
  TopBgTitle,
} from "./Story.styles";
import { Card, Footer, Navbar } from "../../components";
import SocialButtons from "./components/social-buttons/SocialButtons";
import { goToStoriesPage } from "../../utils/redirections";
import { getTimeAgo } from "../../utils/conversion";

const StoryPage = () => {
  const [data, setData] = useState();
  const [news, setNews] = useState([]);
  const [timeString, setTimeString] = useState("");

  const { slug } = useParams();

  const sanitizer = dompurify.sanitize;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsCol = collection(db, "news");
        const docSnapshot = await getDocs(newsCol);
        const fetchedNews = [];

        docSnapshot.docs.map((doc) =>
          fetchedNews.push({ uid: doc.id, ...doc.data() })
        );

        setNews(fetchedNews);
      } catch (err) {
        console.log(err);
      }
    };

    getNews();
  }, []);

  useEffect(() => {
    const getSpecificNews = async () => {
      try {
        const newsCol = collection(db, "news");
        const newsQuery = query(newsCol, where("slug", "==", slug));
        const querySnapshot = await getDocs(newsQuery);

        querySnapshot.forEach((doc) => {
          setData({ id: doc.id, ...doc.data() });
        });
      } catch (err) {
        console.log(err);
      }
    };

    getSpecificNews();
  }, [slug]);

  useEffect(() => {
    const parsedCreatedAtDate = data
      ? new Date(
          data.createdAt?.seconds * 1000 + data.createdAt?.nanoseconds / 100000
        )
      : new Date(Date.now());

    const createdAtDate = new Date(parsedCreatedAtDate);
    const nowDate = new Date(Date.now());

    const parsedTime = getTimeAgo(nowDate, createdAtDate);

    setTimeString(parsedTime);

    //eslint-disable-next-line
  }, [data?.createdAt]);

  return (
    <Fragment>
      <TopBgImg imageUrl={data ? data?.bannerUrl : null}>
        <TopBgTime>{timeString}</TopBgTime>
        <TopBgAuthor>
          {data ? `By ${data?.author} | ${data?.position}` : ""}
        </TopBgAuthor>
        <TopBgTitle>{data ? data?.title : ""}</TopBgTitle>
      </TopBgImg>
      <Navbar />
      <Container>
        <SectionContainer>
          <div
            dangerouslySetInnerHTML={{
              __html: data ? sanitizer(data?.description) : null,
            }}
          />
        </SectionContainer>
        <SocialButtons title={data ? data?.title : ""} />
        <TextContainer>
          <DownTitle>Other Stories</DownTitle>
          <SeeAllStories onClick={goToStoriesPage}>
            See all <SeeAllStoriesSpan>Stories</SeeAllStoriesSpan>
          </SeeAllStories>
        </TextContainer>
        <StoriesWrapper>
          {news.length > 0 &&
            news.map(
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
            )}
        </StoriesWrapper>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default StoryPage;
