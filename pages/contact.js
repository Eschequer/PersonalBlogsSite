import React from "react";
import Head from "next/head";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Form</title>
        <meta name="description" content="Contact form for sending messages" />
      </Head>
      <ContactForm />
    </>
  );
};

export default Contact;
