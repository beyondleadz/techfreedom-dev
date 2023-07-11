import React,{useState} from "react";


const Kanban=()=>{
    return (
    <>
    {/* <div id="kanban" className="container py-5">	
    <div class="arrow-steps clearfix">
    <div class="step current"> <span> <a href="#" ><i class=" btn text-white las la-check "></i></a></span> </div>
     <div class="step done"> <span><a href="#" >Lead</a></span> </div>
    <div class="step active"> <span><a href="#" >Martting qualified lead</a></span> </div>
    <div class="step"> <span><a href="#" >Sales qualified lead</a></span> </div>
    <div class="step"> <span><a href="#" >Opportunity</a></span> </div>
    <div class="step"> <span><a href="#" >Customer</a></span> </div>
    <div class="step"> <span><a href="#" >other</a></span> </div>
  </div>
</div> */}

<div id="kanban" class="container-fluid pt-3">
    <h3 class="font-weight-light text-white">Kanban Board</h3>
       <div class="row flex-row flex-sm-nowrap py-3">
        <div class="col-sm-6 col-md-4 col-xl-3">
            <div class="">
                <div class=" arrow-steps">
                <div class="step current"> Subscribed</div>
                    <h6 class="card-title text-truncate py-2"></h6>
                    <div class="items border border-light">
                    <div class="dropzone rounded"> &nbsp; </div>
                        <div class="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                            <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        <div class="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                            <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xl-3">
            <div class="">
                <div class=" arrow-steps">
                <div class="step done"> Lead</div>
                    <h6 class="card-title text-uppercase text-truncate py-2"></h6>
                    <div class="items border border-light">
                       
                    <div class="dropzone rounded"> &nbsp; </div> 
                        <div class="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xl-3">
            <div class="">
                <div class=" arrow-steps">
                <div class="step active"> Martting qualified lead</div>
                    <h6 class="card-title text-uppercase text-truncate py-2"></h6>
                    <div class="items border border-light">
                    <div class="dropzone rounded"> &nbsp; </div>
                        <div class="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xl-3">
            <div class="">
                <div class=" arrow-steps">
                <div class="step "> Sales qualified lead</div>
                    <h6 class="card-title text-uppercase text-truncate py-2"></h6>
                    <div class="items border border-light">
                    <div class="dropzone rounded"> &nbsp; </div>
                        <div class="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xl-3">
            <div class="">
                <div class=" arrow-steps">
                <div class="step">Opportunity</div>
                    <h6 class="card-title text-uppercase text-truncate py-2"></h6>
                    <div class="items border border-light">
                    <div class="dropzone rounded"> &nbsp; </div>
                        <div class="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xl-3">
            <div class="">
                <div class=" arrow-steps">
                <div class="step "> Customer</div>
                    <h6 class="card-title text-uppercase text-truncate py-2"></h6>
                    <div class="items border border-light">
                    <div class="dropzone rounded"> &nbsp; </div>
                        <div class="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xl-3">
            <div class="">
                <div class=" arrow-steps">
                <div class="step"> Other</div>
                    <h6 class="card-title text-uppercase text-truncate py-2"></h6>
                    <div class="items border border-light">
                    <div class="dropzone rounded"> &nbsp; </div>
                        <div class="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                        <div class="kanbanbody p-2">
                            <div class="kanbancard"><div class="btn-circle  btn btn-primary">CS</div><div class="similar-desc">
                                <div><a class="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div class="fs-12">CEO at companyname pvt. ltd.</div>
                                <div class="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div>
                                <div class="fs-12">9236587345</div></div></div>
                                                          
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
       
       
       
    </div>
</div>

      
   
  
    </>
    )
    }
    export default Kanban;