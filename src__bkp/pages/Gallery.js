import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/gallery/Banner";
import GalleryImage from "../components/gallery/GalleryImage";


const Gallery = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <GalleryImage/>
    </Layout>
    
    </>
    
    )

}

export default Gallery;