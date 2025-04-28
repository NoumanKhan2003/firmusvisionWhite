import React, { useEffect } from "react";
import ContactSection from "../Components/ContactSection";
const ContactPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <ContactSection />
    </div>
  );
};

export default ContactPage;
