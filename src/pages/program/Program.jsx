import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDocs,
  increment,
  updateDoc,
} from "firebase/firestore";
import dompurify from "dompurify";
import { db } from "../../firebase/firebase.config";
import {
  Container,
  DownTitle,
  SectionContainer,
  StoriesWrapper,
  TextContainer,
  TopBgImg,
  TopBgTitle,
} from "./Program.styles";
import { Footer, Navbar, ProgramCard } from "../../components";
import SocialButtons from "./components/social-buttons/SocialButtons";
import { getTimeAgo } from "../../utils/conversion";
import { TopBgAuthor } from "./Program.styles";

const ProgramPage = () => {
  const [data, setData] = useState();
  const [programs, setPrograms] = useState([]);
  const [timeString, setTimeString] = useState("");

  const { slug } = useParams();

  const sanitizer = dompurify.sanitize;

  useEffect(() => {
    window.scrollTo(0, 0);
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
    const getSpecificProgram = async () => {
      try {
        const programCol = collection(db, "programs");
        const docSnapshot = await getDocs(programCol);
        const fetchedData = [];

        docSnapshot.docs.map((doc) =>
          fetchedData.push({ uid: doc.id, ...doc.data() })
        );

        setPrograms(fetchedData);
        setData(fetchedData?.filter((data) => data.slug === slug)[0]);
      } catch (err) {
        console.log(err);
      }
    };

    getSpecificProgram();
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
      <TopBgImg imageUrl={data ? data?.bannerUrl : null} />
      <Navbar />
      <Container>
        <TopBgAuthor>Date created: {timeString}.</TopBgAuthor>
        <TopBgTitle>{data ? data?.title : ""}</TopBgTitle>
        <SectionContainer>
          <div
            dangerouslySetInnerHTML={{
              __html: data ? sanitizer(data?.description) : null,
            }}
          />
        </SectionContainer>
        <SocialButtons title={data ? data?.title : ""} />
        <TextContainer>
          <DownTitle>Other Programs</DownTitle>
        </TextContainer>
        <StoriesWrapper>
          {programs.length > 0 &&
            programs
              .filter((data) => data.ownerUid === data?.ownerUid)
              .map(({ bannerUrl, createdAt, uid, slug, title }) => (
                <ProgramCard
                  key={uid}
                  bannerUrl={bannerUrl}
                  createdAt={createdAt}
                  slug={slug}
                  title={title}
                />
              ))}
        </StoriesWrapper>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default ProgramPage;
