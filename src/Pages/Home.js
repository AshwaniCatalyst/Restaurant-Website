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
        <HomePageSectionShow sectionDirection={"row"}/>
        <HomePageSectionShow sectionDirection={"row-reverse"}/>
        <DownloadAppSection sectionDirection={"row"}/>
      </Layout>
    </>
  );
};

export default Home;
