import React, { Fragment, useEffect } from "react";
import { collection, doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { Footer, Navbar } from "../../components";
import About from "./components/about/About";
import Balance from "./components/balance/Balance";
import Blogs from "./components/blogs/Blogs";
import Headline from "./components/headline/Headline";
import LowerFooter from "./components/lower-footer/LowerFooter";
import Startups from "./components/startups/Startups";
import Partners from "./components/partners/Partners";
import Stats from "./components/stats/Stats";
import StartupCommunity from "./components/startup-community/StartupCommunity";
import { AboutStartupContainer, BalancePartnersContainer } from "./Home.styles";

const Home = () => {
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

  return (
    <Fragment>
      <Navbar />
      <Headline />
      <Stats />
      <AboutStartupContainer>
        <About />
        <Startups />
      </AboutStartupContainer>
      <StartupCommunity />
      <BalancePartnersContainer>
        <Balance />
        <Partners />
      </BalancePartnersContainer>
      <Blogs />
      <LowerFooter />
      <Footer />
    </Fragment>
  );
};

export default Home;
