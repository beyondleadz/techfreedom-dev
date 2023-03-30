import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/contact/Banner";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <ContactForm/>
    </Layout>
    
    </>
    
    )

}

export default Contact;