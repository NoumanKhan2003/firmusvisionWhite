import React, { useEffect } from "react";
import PrMarketingSection from "../Components/PrMarketingSection";
import MainSection from "../Components/MainSection";
import ClientsSection from "../Components/ClientsSection";
import ServicesSection from "../Components/ServicesSection";
import WhyChooseUsSection from "../Components/WhyChooseUsSection";
import ViewsSection from "../Components/ViewsSection";
import WorkSection from "../Components/WorkSection";
import TestimonialSection from "../Components/TestimonialSection";

const HomePage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="main">
      <MainSection />
      <PrMarketingSection />
      <ClientsSection />
      <ServicesSection/>
      <WhyChooseUsSection/>
      <ViewsSection/>
      <WorkSection/>
      <TestimonialSection/>
    </div>
  );
};

export default HomePage;
