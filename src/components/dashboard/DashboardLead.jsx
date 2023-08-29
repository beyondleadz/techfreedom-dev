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
            <i className="fa tab-img la la-briefcase text-info"></i>Marketing
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
					<div class=" row mt-4 pt-4">


<div class="col-xl-3 col-md-6 mb-4">
	<div class="card border-left-primary shadow h-100 py-2">
		<div class="card-body">
			<div class="row no-gutters align-items-center">
			<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
						Lead Generated</div>
				<div class="col mr-2">
					
					<div class="h5 mb-0 font-weight-bold text-gray-800">1892</div>
				</div>
				<div class="col-auto">
					<i class="fas fa-calendar fa-2x text-gray-300"></i>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="col-xl-3 col-md-6 mb-4">
	<div class="card border-left-success shadow h-100 py-2">
		<div class="card-body">
			<div class="row no-gutters align-items-center">
			<div class="text-xs font-weight-bold text-success text-uppercase mb-1">
						Lead Conversion Rate</div>
				<div class="col mr-2">
					
					<div class="h5 mb-0 font-weight-bold text-gray-800">2.9%</div>
				</div>
				<div class="col-auto">
					<i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="col-xl-3 col-md-6 mb-4">
	<div class="card border-left-info shadow h-100 py-2">
		<div class="card-body">
			<div class="row no-gutters align-items-center">
			<div class="text-xs font-weight-bold text-info text-uppercase mb-1">Opportunity Won Ration
					</div>
				<div class="col mr-2">
					
					<div class="row no-gutters align-items-center">
						<div class="col-auto">
							<div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">51.0%</div>
						</div>
						<div class="col">
							<div class="progress progress-sm mr-2">
								<div class="progress-bar bg-info" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-auto">
					<i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="col-xl-3 col-md-6 mb-4">
	<div class="card border-left-warning shadow h-100 py-2">
		<div class="card-body">
			<div class="row no-gutters align-items-center">
			<div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
						Open Opportunities</div>
				<div class="col mr-2">
					
					<div class="h5 mb-0 font-weight-bold text-gray-800">55</div>
				</div>
				<div class="col-auto">
					<i class="fas fa-comments fa-2x text-gray-300"></i>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="col-xl-3 col-md-6 mb-4">
	<div class="card border-left-primary shadow h-100 py-2">
		<div class="card-body">
			<div class="row no-gutters align-items-center">
			<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
						Pipeline Contribution</div>
				<div class="col mr-2">
					
					<div class="h5 mb-0 font-weight-bold text-gray-800">11 M</div>
				</div>
				<div class="col-auto">
					<i class="fas fa-calendar fa-2x text-gray-300"></i>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="col-xl-3 col-md-6 mb-4">
	<div class="card border-left-success shadow h-100 py-2">
		<div class="card-body">
			<div class="row no-gutters align-items-center">
			<div class="text-xs font-weight-bold text-success text-uppercase mb-1">
						Lost Opportunities</div>
				<div class="col mr-2">
					
					<div class="h5 mb-0 font-weight-bold text-gray-800">2 M</div>
				</div>
				<div class="col-auto">
					<i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
				</div>
			</div>
		</div>
	</div>
</div>

</div>
<div className="row">
<div class="col-xl-4 col-lg-5"><div class="card shadow mb-4"><div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"><h6 class="m-0 font-weight-bold text-uppercase text-gray-800">Sales Pipeline Report</h6></div><div class="card-body"><div class="chart-pie pt-4 pb-2"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div></div>
</div></div></div>
<div class="col-xl-4 col-lg-5"><div class="card shadow mb-4"><div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"><h6 class="m-0 font-weight-bold text-uppercase text-gray-800">Closed Sales (Actual VS Target)</h6></div><div class="card-body"><div class="chart-pie pt-4 pb-2"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div></div>
</div></div></div>
<div class="col-xl-4 col-lg-5"><div class="card shadow mb-4"><div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"><h6 class="m-0 font-weight-bold text-uppercase text-gray-800">Sales Trend</h6></div><div class="card-body"><div class="chart-pie pt-4 pb-2"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div></div>
</div></div></div>	
</div>
<div class="row">

                     
                        <div class="col-xl-8 col-lg-7">
                            <div class="card shadow mb-4">
                                
                                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-gray-800 text-uppercase">Top 5 Closed Opportunities</h6>
                                   
                                </div>
                                
                                <div class="card-body">
                                    <div class="chart-area">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                        <div class="col-xl-4 col-lg-5">
                            <div class="card shadow mb-4">
                               
                                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-gray-800 text-uppercase">Top 5 Open Opportunities</h6>
                                    
                                </div>
                               
                                <div class="card-body">
                                    <div class="chart-pie pt-4 pb-2"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                                       
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