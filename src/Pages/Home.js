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
        <HomePageSectionShow
          sectionDirection={"row"}
          sectionHeading={"Create an account"}
          sectionSubHeading={
            "Create/login to an existing account to get started"
          }
          sectionDescription={
            "An account is created with your email and a desired password"
          }
        />
        <HomePageSectionShow
          sectionDirection={"row-reverse"}
          sectionHeading={"Explore varieties"}
          sectionSubHeading={"Shop for your favorites meal as e dey hot."}
          sectionDescription={
            "Shop for your favorite meals or drinks and enjoy while doing it."
          }
        />
        <HomePageSectionShow
          sectionDirection={"row"}
          sectionHeading={"Checkout"}
          sectionSubHeading={"When you done check out and get it delivered."}
          sectionDescription={
            "When you done check out and get it delivered with ease."
          }
        />
        <DownloadAppSection />
      </Layout>
    </>
  );
};

export default Home;
