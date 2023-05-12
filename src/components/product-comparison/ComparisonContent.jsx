import React,{useState} from "react";
import logo from "../../assets/images/logo.jpg";
import ProspectSearchImage from "../../assets/images/prospect-search.jpg";
import leadsImage from "../../assets/images/leads.jpg";

import FeatureOrgImage from "../../assets/images/features-org-icon.png";

import FeaturesImageIntelligence from '../../assets/images/features-social-intelligenc-icon.png';
import FeaturesRadiusImage from  '../../assets/images/features-radius-icon.png';

const ComparisonContent=()=>{
    return (
    <>
       <div id="wrapper">
	   
		<div className="container  ">
		<div class="product-comparison compare">
			<ul class="compare-navigation_list d-flex">
				
						 <li class="compare-navigation_item1 "> <img src={logo} />
						 <div className="vs"> vs </div></li>
							<li class="compare-navigation_item"><div><span>LinkedIn</span></div></li>
							<li class="compare-navigation_item"> <div> <span>Traditional Data Companies</span></div></li>
							<li class="compare-navigation_item"> <div><span>Popular Prospecting Tools</span></div></li>
							<li class="compare-navigation_item"> <div> <span>New Age Marketing Tools</span></div></li></ul>
				
						<div className="clearfix"> </div>
					</div>

<div className="compare-table__table">
<div className="compare-table__head">
<div className="compare-table__col"></div>
<div className="compare-table__col">Beyond Leads</div>
<div className="compare-table__col">LinkedIn</div>
</div>
<div className="compare-table__row">
<div className="compare-table__col"></div>
<div className="compare-table__col"><p className="compare-table__property">- Unlimited Prospecting and list builidng</p></div>
<div className="compare-table__col"><p className="compare-table__property">- Prospecting is connections dependant</p></div>
</div>
<div className="compare-table__row">
<div className="compare-table__col"></div>
<div className="compare-table__col"><p className="compare-table__property">- Independent human verified data</p></div>
<div className="compare-table__col"><p className="compare-table__property">- User Generated data</p></div>
</div>
<div className="compare-table__row">
<div className="compare-table__col"></div>
<div className="compare-table__col"><p className="compare-table__property">- Accurate and doubly verified data</p></div>
<div className="compare-table__col"><p className="compare-table__property">- Accuracy and Completeness doubtful</p></div>
</div>
<div className="compare-table__row">
<div className="compare-table__col"></div>
<div className="compare-table__col"><p className="compare-table__property">- Multiple data soources with rigrouos quality contol</p></div>
<div className="compare-table__col"><p className="compare-table__property">- Single Source (Users)</p></div>
</div>
<div className="compare-table__row">
<div className="compare-table__col"></div>
<div className="compare-table__col"><p className="compare-table__property">- Tailored dataset with multiple download options</p></div>
<div className="compare-table__col"><p className="compare-table__property">- Limitations in customisng and downloding</p></div>
</div>
<div className="compare-table__row">
<div className="compare-table__col"></div>
<div className="compare-table__col"><p className="compare-table__property">- Budget Freindly and unlimited searches</p></div>
<div className="compare-table__col"><p className="compare-table__property">-Limited free searches and Expensive per user billing</p></div>
</div>
<div className="compare-table__row">
<div className="compare-table__col"></div>
<div className="compare-table__col"><p className="compare-table__property">- Business emails</p></div>
<div className="compare-table__col"><p className="compare-table__property">- Personal emails and costly reachout through Inmails</p></div>
</div>
<div className="compare-table__row">
<div className="compare-table__col"></div>
<div className="compare-table__col"><p className="compare-table__property">- Direct Dials & Mobile Numbers</p></div>
<div className="compare-table__col"><p className="compare-table__property">- X</p></div>
</div>
<div className="compare-table__row">
<div className="compare-table__col"></div>
<div className="compare-table__col"><p className="compare-table__property">- No commercial advertisements and sponsored ads like LinkedIn</p></div>
<div className="compare-table__col"><p className="compare-table__property">- Commercial and Sposorod ads take away attention</p></div>
</div>
</div>




</div></div>






				
				
    </>
    )
    }
    export default ComparisonContent;