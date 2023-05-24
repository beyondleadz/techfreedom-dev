import React,{useState} from "react";
import FeatureSearchImage from "../../assets/images/features-search-icon.png";
import ProspectSearchImage from "../../assets/images/prospect-search.jpg";
import leadsImage from "../../assets/images/leads.jpg";

import FeatureOrgImage from "../../assets/images/features-org-icon.png";

import FeaturesImageIntelligence from '../../assets/images/features-social-intelligenc-icon.png';
import FeaturesRadiusImage from  '../../assets/images/features-radius-icon.png';
				

const Faq=()=>{
    return (
    <>
       <div className="w3l-faq-block" id="faq">
        <div className="container py-lg-5">
            <div className="row">
                <div className="col-lg-12">
                    <section className="w3l-faq" id="faq">
                    <div className="privacy-security-term">
		<h3 align="center"><strong>Learn more from our FAQs</strong></h3><br/></div>
                        {/* <h3 className="title-style">Learn more from our FAQ</h3>
                        <p className="mt-3">Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
                            doloribus asperiores repellat.</p> */}
                        <div className="faq-page mt-4">
                            <ul>
                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>What is BeyongLeadz?</h2>
                                    <p>BeyondLeadz is SaaS based company  that specializes in providing data and lead management solutions.. We collect, clean, and organize data that can be used by businesses to improve their marketing, sales, and operational processes.
                                    </p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>What data is offered by BeyondLeadz?</h2>
                                    <p>BeyondLeadz provides a wide range of data, including company profiles, contact information for key decision-makers, financial data, marketing and sales data, and more. We also offer custom data solutions to meet specific business needs.
                                    </p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>How is B2B data collected?</h2>
                                    <p>Data is collected through various methods, such as web scraping, data mining, and surveys. We also have third party partners and purchase data from them. 
                                    </p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>How can B2B data be used?</h2>
                                    <p>Data can be used for various purposes, such as sales and marketing, market research, lead generation, and more. It can help businesses to better understand their target audience, identify potential customers, and make informed business decisions.
</p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>How reliable is the data?</h2>
                                    <p>The reliability of B2B data depends on the source of the data and the quality of the collection methods. We strictly use ethical and transparent methods for data collection and provide accurate and up-to-date data.
</p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>How Accurate BeyondLead data is?</h2>
                                    <p>Data provided is highly reliable and trustworthy with accuracy level up to 99%
</p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>Can I integrate your data into my existing systems?</h2>
                                    <p>Yes, BeyondLeadz offers integrations with popular CRM and marketing automation platforms. This allows businesses to easily import and use our B2B data within their existing systems.
</p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>How is data priced?</h2>
                                    <p>Our data is typically priced based on the quantity and credits of the data provided and offers subscription-based pricing models. The cost also varies based on the subscription package. So it's important to compare pricing and features across product variants.
</p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>How can BeyondLeadz help my business?</h2>
                                    <p>BeyondLeadz can help your business by providing accurate and up-to-date data that can be used to improve your marketing and sales processes. With the right data, you can target the right accounts and contacts, personalize your messaging, and increase your conversion rates. We also offer a robust Lead Management solution along-with to streamline your sales operations.
</p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>How does BeyondLeadz collect its data?</h2>
                                    <p>Beyondleadz collects its data from a variety of sources, such as public records, company websites, social media, and third-party data providers. We use advanced technology and data science techniques to ensure the accuracy and completeness of the data.
</p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>Is the data provided by BeyondLeadz compliant with data protection regulations?</h2>
                                    <p>Yes, BeyondLeadz  takes data protection regulations seriously and ensures that the data provided is compliant with relevant regulations such as PDPB and CCPA.
</p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>How can I evaluate the quality of data provided by a B2B data company?</h2>
                                    <p>You can evaluate the quality of data provided by BeyondLeadz by looking at factors such as data accuracy, completeness, and timeliness. You can also look at customer reviews and testimonials to gauge the satisfaction of other businesses that have used the data. Alternatively you can register for Free Trial or ask for a quick sample.
</p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>Can BeyondLeadz help me with data integration?</h2>
                                    <p>Yes, we offer data integration services that can help you integrate data into your existing marketing and sales systems. Also you can integrate your third party applications to capture leads directly into our Lead Management feature.
</p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>How can BeyondLeadz "lead management" feature help my business?</h2>
                                    <p>A lead management  can help your business by providing a systematic approach to managing your leads at one place. You can capture leads from multiple sources by automating and integrating them with BeyondLeadz.
</p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>How does the lead feature work in BeyondLeadz?</h2>
                                    <p>The lead feature  typically works by integrating and collecting data from various sources to identify potential customers. This can include using data from customer websites, social media, and other online channels to capture leads. The data is then used by the  businesses in a way that makes it easy to identify and reach out to potential customers.
</p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>What is Intent Data offered by BeyondLeadz?</h2>
                                    <p>The Intent Data can help your business by providing access to a database of potential customers who have shown interest in your products or services. This can help you target the right audience, improve your conversion rates, and ultimately grow your business.
</p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>How accurate are the leads?</h2>
                                    <p>The accuracy of the lead feature depends on the quality of the data sources used and the data analysis techniques employed. We  use advanced technology and data science techniques to ensure the accuracy and completeness of your leads.
</p>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>What kind of information is included in the lead feature?</h2>
                                    <p>Information includes a wide range of information about potential customers, such as their contact information, company size and industry, job title, online behavior, and more. This information can help businesses personalize their marketing messages and reach out to potential customers more effectively.
</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
               
            </div>
        </div>
    </div>
   
    </>
    )
    }
    export default Faq;