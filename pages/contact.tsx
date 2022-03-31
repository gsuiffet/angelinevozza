import MainLayout from "layouts";
import { NextPage } from "next";
import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../layouts/footer";

const Contact: NextPage = () => {
  return (
    <MainLayout isFooter={true} smallHeader={false}>
      <div className="flex flex-col justify-between min-h-screen bg-pattern bg-repeat">
        <section className="section flex flex-col justify-center items-center mt-24 md:m-auto">
          <ContactForm />
        </section>
        <Footer />
      </div>
    </MainLayout>
  );
};

export default Contact;
