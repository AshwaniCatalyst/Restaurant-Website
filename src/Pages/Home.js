import React from "react";
import Layout from "../Components/Layout";
import HomePageSectionShow from "../Components/HomePageSectionShow";
import DownloadAppSection from "../Components/DownloadSection";
import HeroSection from "../Components/HeroSection";

const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <HomePageSectionShow />
        <DownloadAppSection />
      </Layout>
    </>
  );
};

export default Home;
