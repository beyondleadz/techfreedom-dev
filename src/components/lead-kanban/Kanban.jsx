import React,{useState} from "react";


const Kanban=()=>{
    return (
    <>
    {/* <div id="kanban" className="container py-5">	
    <div className="arrow-steps clearfix">
    <div className="step current"> <span> <a href="#" ><i className=" btn text-white las la-check "></i></a></span> </div>
     <div className="step done"> <span><a href="#" >Lead</a></span> </div>
    <div className="step active"> <span><a href="#" >Martting qualified lead</a></span> </div>
    <div className="step"> <span><a href="#" >Sales qualified lead</a></span> </div>
    <div className="step"> <span><a href="#" >Opportunity</a></span> </div>
    <div className="step"> <span><a href="#" >Customer</a></span> </div>
    <div className="step"> <span><a href="#" >other</a></span> </div>
  </div>
</div> */}

<div id="kanban" className="container-fluid pt-3">
    <div><i className=" btn mr-2  kanbanlist"></i><i className=" btn  kanbanview"></i></div>
    <h3 className="font-weight-light text-white">Kanban Board</h3>
     <div className=" main-kanban">
       
        <div className="col-sm-6 col-kanban col-xl-3">
            <div className="">
                <div className=" arrow-steps">
                <div className="step current">
                <div><span  className="title">Subscribed </span> <span className="num">4</span></div>
                </div>
                <h6 className="card-title text-uppercase text-truncate py-2"></h6>
                   <div className="items">
                   <div className=""> &nbsp; </div>
                        <div className="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                            <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                {/* <div className="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div> */}
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        <div className="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                            <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div className="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div className="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-6 col-kanban col-xl-3">
            <div className="">
                <div className=" arrow-steps">
                <div className="step done">
               <div><span  className="title">Lead</span> <span className="num">8</span></div></div>
               <h6 className="card-title text-uppercase text-truncate py-2"></h6>
                   <div className="items">                    
                   <div className=""> &nbsp; </div>
                        <div className="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div className="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        <div className="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                            <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        <div className="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                            <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        <div className="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                            <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        <div className="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                            <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        <div className="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                            <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        <div className="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                            <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-6 col-kanban col-xl-3">
            <div className="">
                <div className=" arrow-steps">
                <div className="step active">
                
                <div><span  className="title">Martting qualified lead </span> <span className="num">2</span></div> </div>
                    <h6 className="card-title text-uppercase text-truncate py-2"></h6>
                    <div className="items">
                    <div className=""> &nbsp; </div>
                        <div className="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>               
                        <div className="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-6 col-kanban col-xl-3">
            <div className="">
                <div className=" arrow-steps">
                <div className="step ">
                <div><span  className="title">Sales qualified lead</span> <span className="num">4</span></div> </div>
                    <h6 className="card-title text-uppercase text-truncate py-2"></h6>
                    <div className="items">
                    <div className=""> &nbsp; </div>
                        <div className="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div className="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        <div className="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        <div className="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-6 col-kanban col-xl-3">
            <div className="">
                <div className=" arrow-steps">
                <div className="step">
                <div><span  className="title">Opportunity</span> <span className="num">3</span></div></div>
                    <h6 className="card-title text-uppercase text-truncate py-2"></h6>
                    <div className="items ">
                    <div className="dropzone rounded"> &nbsp; </div>
                        <div className="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div className="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div className="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-6 col-kanban col-xl-3">
            <div className="">
                <div className=" arrow-steps">
                <div className="step ">
                <div><span  className="title">Customer</span> <span className="num">5</span></div> </div>
                    <h6 className="card-title text-uppercase text-truncate py-2"></h6>
                    <div className="items">
                    <div className=""> &nbsp; </div>
                        <div className="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div className="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        <div className="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                         <div className="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        <div className="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-6 col-kanban col-xl-3">
            <div className="">
                <div className=" arrow-steps">
                <div className="step">
                <div><span  className="title"> Other</span> <span className="num">3</span></div></div>
                    <h6 className="card-title text-uppercase text-truncate py-2"></h6>
                    <div className="items ">
                    <div className=""> &nbsp; </div>
                        <div className="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div className="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
                            </div>
                        </div>
                        
                        <div className="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                        <div className="kanbanbody p-2">
                            <div className="kanbancard"><div className="btn-circle  btn btn-primary">AS</div><div className="similar-desc">
                                <div><a className="font-weight-bold fs-14 text-dark" title="">Ajay Singh</a></div>
                                <div className="fs-12">CEO at companyname pvt. ltd.</div>
                                <div className="fs-12"> ajay@companyname.com<i class=" fs-14 ml-1  la la-copy text-black"></i></div>
                                <div className="fs-12">9236587345<i class=" fs-14 ml-1  la la-copy text-black"></i></div></div></div>
                                                          
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