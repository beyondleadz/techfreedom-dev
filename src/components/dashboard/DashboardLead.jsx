import React,{useState} from "react";


const DashboardLead=()=>{
    return(
	<>
    <section id="dashboard">
	<div className="container-fluid">
	
					<div className="navbar-light" id="tabscompany">
      <h3 className="card-body font-weight-bold mt-3 mb-3">Dashboard</h3>
      <ul className="nav nav-tabs" id="myTabjustified" role="tablist">
        <li className="nav-item mb-4" role="presentation">
          <button
            className="top-tabs active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            {" "}
            <i className="fa tab-img las la-users"></i>Leads
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="top-tabs"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            <i className="fa tab-img las la-bullhorn text-info"></i>Marketing
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="top-tabs"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            <i className="fa tab-img las la-clock"></i>Activities
          </button>
        </li>
		<li className="nav-item" role="presentation">
          <button
            className="top-tabs"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            <i className="fa tab-img las la-eye"></i>My View
          </button>
        </li>
      </ul>
    </div>
					<div className=" row mt-4 pt-4">


<div className="col-xl-3 col-md-6 mb-4">
	<div className="card border-left-primary shadow h-100 py-2">
		<div className="card-body">
		<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
						Lead Generated</div>
			<div className="row no-gutters align-items-center">
			
				<div className="col mr-2">
					
					<div className="h5 mb-0 font-weight-bold text-gray-800">1892</div>
				</div>
				<div className="col-auto">
					<i className="las la-filter fa-2x text-gray-300"></i>
				</div>
			</div>
		</div>
	</div>
</div>


<div className="col-xl-3 col-md-6 mb-4">
	<div className="card border-left-success shadow h-100 py-2">
		<div className="card-body">
		<div className="text-xs font-weight-bold text-success text-uppercase mb-1">
						Lead Conversion Rate</div>
			<div className="row no-gutters align-items-center">
			
				<div className="col mr-2">
					
					<div className="h5 mb-0 font-weight-bold text-gray-800">2.9%</div>
				</div>
				<div className="col-auto">
					<i className="las la-funnel-dollar fa-2x text-gray-300"></i>
				</div>
			</div>
		</div>
	</div>
</div>


<div className="col-xl-3 col-md-6 mb-4">
	<div className="card border-left-info shadow h-100 py-2">
		<div className="card-body">
		<div className="text-xs font-weight-bold text-leftinfo text-uppercase mb-1">Opportunity Won Ratio
					</div>
			<div className="row no-gutters align-items-center">
			
				<div className="col mr-2">
					
					<div className="row no-gutters align-items-center">
						<div className="col-auto">
							<div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">51.0%</div>
						</div>
						<div className="col">
							<div className="progress progress-sm mr-2">
								<div className="progress-bar bg-info" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-auto">
					<i className="las la-percent fa-2x text-gray-300"></i>
				</div>
			</div>
		</div>
	</div>
</div>


<div className="col-xl-3 col-md-6 mb-4">
	<div className="card border-left-warning shadow h-100 py-2">
		<div className="card-body">
		<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
						Open Opportunities</div>
			<div className="row no-gutters align-items-center">			
				<div className="col mr-2">					
					<div className="h5 mb-0 font-weight-bold text-gray-800">55</div>
				</div>
				<div className="col-auto">
					<i className="las la-comments fa-2x text-gray-300"></i>
				</div>
			</div>
		</div>
	</div>
</div>


<div className="col-xl-3 col-md-6 mb-4">
	<div className="card border-left-danger shadow h-100 py-2">
		<div className="card-body">
		<div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
						Pipeline Contribution</div>
			<div className="row no-gutters align-items-center">
			
				<div className="col mr-2">
					
					<div className="h5 mb-0 font-weight-bold text-gray-800">11 M</div>
				</div>
				<div className="col-auto">
					<i className="las la-hand-holding-usd fa-2x text-gray-300"></i>
				</div>
			</div>
		</div>
	</div>
</div>


<div className="col-xl-3 col-md-6 mb-4">
	<div className="card border-left-dark shadow h-100 py-2">
		<div className="card-body">
		<div className="text-xs font-weight-bold text-dark text-uppercase mb-1">
						Lost Opportunities</div>
			<div className="row no-gutters align-items-center">
			
				<div className="col mr-2">
					
					<div className="h5 mb-0 font-weight-bold text-gray-800">2 M</div>
				</div>
				<div className="col-auto">
					<i className="lab la-creative-commons-nc fa-2x text-gray-300"></i>
				</div>
			</div>
		</div>
	</div>
</div>

</div>
<div className="row">
<div className="col-xl-4 col-lg-5"><div className="card shadow mb-4"><div className="card-header py-3 d-flex flex-row align-items-center justify-content-between"><h6 className="m-0 font-weight-bold text-uppercase text-gray-800">Sales Pipeline Report</h6></div><div className="card-body"><div className="chart-pie pt-4 pb-2"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div></div>
</div></div></div>
<div className="col-xl-4 col-lg-5"><div className="card shadow mb-4"><div className="card-header py-3 d-flex flex-row align-items-center justify-content-between"><h6 className="m-0 font-weight-bold text-uppercase text-gray-800">Closed Sales (Actual VS Target)</h6></div><div className="card-body"><div className="chart-pie pt-4 pb-2"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div></div>
</div></div></div>
<div className="col-xl-4 col-lg-5"><div className="card shadow mb-4"><div className="card-header py-3 d-flex flex-row align-items-center justify-content-between"><h6 className="m-0 font-weight-bold text-uppercase text-gray-800">Sales Trend</h6></div><div className="card-body"><div className="chart-pie pt-4 pb-2"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div></div>
</div></div></div>	
</div>
<div className="row">

                     
                        <div className="col-xl-8 col-lg-7">
                            <div className="card shadow mb-4">
                                
                                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-gray-800 text-uppercase">Top 5 Closed Opportunities</h6>
                                   
                                </div>
                                
                                <div className="card-body">
                                    <div className="chart-area">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                        <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                               
                                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-gray-800 text-uppercase">Top 5 Open Opportunities</h6>
                                    
                                </div>
                               
                                <div className="card-body">
                                    <div className="chart-pie pt-4 pb-2"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                       
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

					</div>


					
		</section>
		
		
    </>
 )
}
export default DashboardLead;