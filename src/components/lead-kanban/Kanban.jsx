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
    <div class="small  text-light">Drag and drop between swim lanes</div>
    <div class="row flex-row flex-sm-nowrap py-3">
        <div class="col-sm-6 col-md-4 col-xl-3">
            <div class="">
                <div class=" arrow-steps">
                <div class="step current"> To Do</div>
                    <h6 class="card-title text-uppercase text-truncate py-2"></h6>
                    <div class="items border border-light">
                    <div class="dropzone rounded"> &nbsp; </div>
                        <div class="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-154</a>
                                </div>
                                <p>
                                    This is a description of a item on the board.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
                            </div>
                        </div>
                        <div class="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-154</a>
                                </div>
                                <p>
                                    This is a description of a item on the board.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-156</a>
                                </div>
                                <p>
                                    This is a description of a item on the board.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-157</a>
                                </div>
                                <p>
                                    This is an item on the board. There is some descriptive text that explains the item here.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
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
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class="  text-primary lead font-weight-light">TSK-156</a>
                                </div>
                                <p>
                                    This is a description of a item on the board.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-157</a>
                                </div>
                                <p>
                                    This is an item on the board. There is some descriptive text that explains the item here.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
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
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-154</a>
                                </div>
                                <p>
                                    This is a description of a item on the board.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-156</a>
                                </div>
                                <p>
                                    This is a description of a item on the board.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-157</a>
                                </div>
                                <p>
                                    This is an item on the board. There is some descriptive text that explains the item here.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
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
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-154</a>
                                </div>
                                <p>
                                    This is a description of a item on the board.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-156</a>
                                </div>
                                <p>
                                    This is a description of a item on the board.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-157</a>
                                </div>
                                <p>
                                    This is an item on the board. There is some descriptive text that explains the item here.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
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
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-154</a>
                                </div>
                                <p>
                                    This is a description of a item on the board.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-156</a>
                                </div>
                                <p>
                                    This is a description of a item on the board.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-157</a>
                                </div>
                                <p>
                                    This is an item on the board. There is some descriptive text that explains the item here.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
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
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-154</a>
                                </div>
                                <p>
                                    This is a description of a item on the board.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-156</a>
                                </div>
                                <p>
                                    This is a description of a item on the board.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-157</a>
                                </div>
                                <p>
                                    This is an item on the board. There is some descriptive text that explains the item here.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
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
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-154</a>
                                </div>
                                <p>
                                    This is a description of a item on the board.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd2" draggable="true" ondragstart="drag(event)">
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-156</a>
                                </div>
                                <p>
                                    This is a description of a item on the board.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
                            </div>
                        </div>
                        
                        <div class="card draggable shadow-sm" id="cd3" draggable="true" ondragstart="drag(event)">
                            <div class="card-body p-2">
                                <div class="card-title">
                                   
                                    <a href="" class=" text-primary lead font-weight-light">TSK-157</a>
                                </div>
                                <p>
                                    This is an item on the board. There is some descriptive text that explains the item here.
                                </p>
                                <button class="btn btn-primary btn-sm">View</button>
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