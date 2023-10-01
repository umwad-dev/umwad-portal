import React, { Fragment, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useSearchParams } from "react-router-dom";
import { db } from "../../firebase/firebase.config";
import {
  Card,
  Footer,
  Navbar,
  SearchInput,
  StartupCard,
  TBICard,
} from "../../components";
import {
  CardContainer,
  Container,
  FirstTextContainer,
  LeftContainer,
  Line,
  MainContainer,
  MoreTextLink,
  NewsContainer,
  NoDataText,
  RightContainer,
  SearchContainer,
  SearchImg,
  SearchInputContainer,
  SearchText,
  SearchTextContainer,
  SearchTextSpan,
  SecondTextContainer,
  StartupContainer,
  TBIContainer,
} from "./Search.styles";
import FilterIcon from "../../assets/search/filter.webp";
import {
  goToStartupPage,
  goToStoriesPage,
  goToTBIsPage,
} from "../../utils/redirections";
import { Drawer, LeftDrawer } from "./components";

const SearchPage = () => {
  const [filteredNews, setFilteredNews] = useState([]);
  const [filteredStartups, setFilteredStartups] = useState([]);
  const [filteredTBIs, setFilteredTBIs] = useState([]);
  const [news, setNews] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [startups, setStartups] = useState([]);
  const [tbis, setTbis] = useState([]);

  // drawer
  const [type, setType] = useState(0);
  const [sortByDate, setSortByDate] = useState("latest");
  const [sortBySort, setSortBySort] = useState("ascending");

  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("s");

  const sortByField = (a, b, field) => {
    let x = a[field].toLowerCase();
    let y = b[field].toLowerCase();

    if (sortBySort === "ascending") {
      if (x < y) return -1;
      if (x > y) return 1;

      return 0;
    } else {
      if (x < y) return 1;
      if (x > y) return -1;

      return 0;
    }
  };

  const sortBySelectedDate = (a, b) => {
    let x = a.createdAt;
    let y = b.createdAt;

    if (sortByDate === "latest") {
      if (x < y) return 1;
      if (x > y) return -1;

      return 0;
    } else {
      if (x < y) return -1;
      if (x > y) return 1;

      return 0;
    }
  };

  useEffect(() => {
    if (searchValue) {
      setSearchText(searchValue);
      if (startups.length > 0) {
        const filterBySearchStartups = startups.filter(
          (startup) =>
            startup.validated === true &&
            startup.businessName
              .toLowerCase()
              .includes(searchValue.toLowerCase())
        );

        setFilteredStartups(filterBySearchStartups);
      } else {
        setFilteredStartups(
          startups.filter((startup) => startup.validated === true)
        );
      }

      if (tbis.length > 0) {
        const filterBySearchTBIs = tbis.filter(
          (tbi) =>
            tbi.validated === true &&
            tbi.tbiName.toLowerCase().includes(searchValue.toLowerCase())
        );

        setFilteredTBIs(filterBySearchTBIs);
      } else {
        setFilteredTBIs(tbis.filter((tbi) => tbi.validated === true));
      }

      if (news.length > 0) {
        const filterBySearchNews = news.filter((article) =>
          article.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        setFilteredNews(filterBySearchNews);
      } else {
        setFilteredNews(news);
      }
    }

    // eslint-disable-next-line
  }, [searchValue]);

  useEffect(() => {
    const getNews = async () => {
      const newsCol = collection(db, "news");
      const newsQuerySnapshot = await getDocs(newsCol);
      const fetchedNews = [];

      newsQuerySnapshot.forEach((doc) =>
        fetchedNews.push({ uid: doc.id, ...doc.data() })
      );

      setNews(fetchedNews);
    };

    const getStartups = async () => {
      const startupsCol = collection(db, "startup");
      const startupsQuerySnapshot = await getDocs(startupsCol);
      const fetchedStartups = [];

      startupsQuerySnapshot.forEach((doc) =>
        fetchedStartups.push({ uid: doc.id, ...doc.data() })
      );

      setStartups(fetchedStartups);
    };

    const getTBIs = async () => {
      const tbisCol = collection(db, "tbi");
      const tbisQuerySnapshot = await getDocs(tbisCol);
      const fetchedTBIs = [];

      tbisQuerySnapshot.forEach((doc) =>
        fetchedTBIs.push({ uid: doc.id, ...doc.data() })
      );

      setTbis(fetchedTBIs);
    };

    getNews();
    getStartups();
    getTBIs();
  }, []);

  useEffect(() => {
    if (startups.length > 0) {
      if (searchText) {
        const filterBySearchStartups = startups.filter(
          (startup) =>
            startup.validated === true &&
            startup.businessName
              .toLowerCase()
              .includes(searchText.toLowerCase())
        );

        setFilteredStartups(filterBySearchStartups);
      } else {
        setFilteredStartups(
          startups.filter((startup) => startup.validated === true)
        );
      }
    }

    if (tbis.length > 0) {
      if (searchText) {
        const filterBySearchTBIs = tbis.filter(
          (tbi) =>
            tbi.validated === true &&
            tbi.tbiName.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilteredTBIs(filterBySearchTBIs);
      } else {
        setFilteredTBIs(tbis.filter((tbi) => tbi.validated === true));
      }
    }

    if (news.length > 0) {
      if (searchText) {
        const filterBySearchNews = news.filter((article) =>
          article.title.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilteredNews(filterBySearchNews);
      } else {
        setFilteredNews(news);
      }
    }
  }, [news, startups, searchText, tbis]);

  useEffect(() => {
    if (filteredNews.length > 0) {
      const sortedNews = [...filteredNews].sort((a, b) =>
        sortBySelectedDate(a, b)
      );

      setFilteredNews(sortedNews);
    }

    if (startups.length > 0) {
      const sortedStartups = [...startups].sort((a, b) =>
        sortBySelectedDate(a, b)
      );

      setFilteredStartups(sortedStartups);
    }

    if (tbis.length > 0) {
      const sortedTBIs = [...tbis].sort((a, b) => sortBySelectedDate(a, b));

      setFilteredTBIs(sortedTBIs);
    }

    // eslint-disable-next-line
  }, [sortByDate]);

  useEffect(() => {
    if (filteredNews.length > 0) {
      const sortedNews = [...filteredNews].sort((a, b) =>
        sortByField(a, b, "title")
      );

      setFilteredNews(sortedNews);
    }

    if (startups.length > 0) {
      const sortedStartups = [...startups].sort((a, b) =>
        sortByField(a, b, "businessName")
      );

      setFilteredStartups(sortedStartups);
    }

    if (tbis.length > 0) {
      const sortedTBIs = [...tbis].sort((a, b) => sortByField(a, b, "tbiName"));

      setFilteredTBIs(sortedTBIs);
    }

    // eslint-disable-next-line
  }, [sortBySort]);

  return (
    <Fragment>
      <Navbar color="black" />
      <Drawer
        open={open}
        setOpen={setOpen}
        setType={setType}
        sortByDate={sortByDate}
        sortBySort={sortBySort}
        setSortByDate={setSortByDate}
        setSortBySort={setSortBySort}
      />
      <MainContainer>
        <Container>
          <LeftContainer>
            <LeftDrawer
              setType={setType}
              sortByDate={sortByDate}
              sortBySort={sortBySort}
              setSortByDate={setSortByDate}
              setSortBySort={setSortBySort}
              type={type}
            />
          </LeftContainer>
          <RightContainer>
            <SearchContainer>
              <SearchInputContainer>
                <SearchInput
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                />
              </SearchInputContainer>
              <SearchImg
                alt="filter"
                onClick={() => setOpen(true)}
                src={FilterIcon}
              />
            </SearchContainer>
            {type === 0 || type === 2 ? (
              <StartupContainer>
                <FirstTextContainer>
                  <SearchTextContainer>
                    {searchText && (
                      <SearchText>
                        Startups related to "
                        <SearchTextSpan>{searchText}</SearchTextSpan>"
                      </SearchText>
                    )}
                  </SearchTextContainer>
                  <MoreTextLink onClick={goToStartupPage}>
                    More Startups &#62;
                  </MoreTextLink>
                </FirstTextContainer>
                <Line />
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
                    <NoDataText>No startup found.</NoDataText>
                  )}
                </CardContainer>
              </StartupContainer>
            ) : null}
            {type === 0 || type === 1 ? (
              <TBIContainer>
                <SecondTextContainer>
                  <SearchTextContainer>
                    {searchText && (
                      <SearchText>
                        TBIs related to "
                        <SearchTextSpan>{searchText}</SearchTextSpan>"
                      </SearchText>
                    )}
                  </SearchTextContainer>
                  <MoreTextLink onClick={goToTBIsPage}>
                    More TBIs &#62;
                  </MoreTextLink>
                </SecondTextContainer>
                <Line />
                <CardContainer>
                  {filteredTBIs.length > 0 ? (
                    filteredTBIs
                      .filter((tbi) => tbi.validated === true)
                      .map((tbi, idx) => (
                        <TBICard
                          key={idx}
                          imgSrc={tbi.logoUrl}
                          name={tbi.tbiName}
                          slug={tbi.slug}
                        />
                      ))
                  ) : (
                    <NoDataText>No TBIs found.</NoDataText>
                  )}
                </CardContainer>
              </TBIContainer>
            ) : null}
            {type === 0 || type === 3 ? (
              <NewsContainer>
                <SecondTextContainer>
                  <SearchTextContainer>
                    {searchText && (
                      <SearchText>
                        News & Articles related to "
                        <SearchTextSpan>{searchText}</SearchTextSpan>"
                      </SearchText>
                    )}
                  </SearchTextContainer>
                  <MoreTextLink onClick={goToStoriesPage}>
                    More News and Articles &#62;
                  </MoreTextLink>
                </SecondTextContainer>
                <Line />
                <CardContainer>
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
                    <NoDataText>No articles/news found.</NoDataText>
                  )}
                </CardContainer>
              </NewsContainer>
            ) : null}
          </RightContainer>
        </Container>
      </MainContainer>
      <Footer />
    </Fragment>
  );
};

export default SearchPage;
