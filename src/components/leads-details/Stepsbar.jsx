import React, { useState,useEffect } from 'react';
import { Steps } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import {
  updateLeadDetails
} from "../../actionCreator/leadDetailsActionCreator";

const Stepsbar=()=>{
    const dispatch=useDispatch();
    const [leadStatusList,setLeadStatusList]=useState([]);
    const [mapStatusData,setMapStatusData]=useState([]);
    const [current,setCurrent] = useState(0);
    const leadStatusListing = useSelector(
      (state) => state.leadListingReducer.leadStatusList
    );
    const leadDetail= useSelector(
      (state) => state.LeadDetailsReducer.leadDetails
    );

    const onChangeStatus = (value) => {
       //console.log('onChange:', mapStatusData,value);
       setCurrent(value);
       let statusSequenceValue=value+1;
       if(mapStatusData.has(statusSequenceValue)){
        const statusObj=mapStatusData.get(statusSequenceValue);
        //console.log(statusObj);
        let payload=leadDetail;
        payload.status=statusObj.id;
        //console.log('onChange:', payload);
        dispatch(updateLeadDetails(payload,true)); 
       }
          
    };

    useEffect(()=>{
      // let activeColor="#15df44";
      // let done="#5d44ff";
      // let tobedone="#fdc401";
      // let pending="#ebe9ed";
      let currentSequence=0;
      let mapStatusData=new Map([]);
      leadStatusListing.map((item)=>{
        if(leadDetail?.status === item.id){
          currentSequence=item.sequence;
        }
        mapStatusData.set(item.sequence,item);
      });
      setMapStatusData(mapStatusData);
      setCurrent(currentSequence);
      
    },[leadDetail,leadStatusListing])

    useEffect(()=>{
      const statusItem=[];
      const currentSequence=current;
      leadStatusListing.map((item)=>{
        let clstatus="";
        if(currentSequence === item.sequence){
          clstatus="steps-active";
        }else if(item.sequence < currentSequence){
          clstatus="steps-done";
        }else if((currentSequence+1) === item.sequence){
          clstatus="steps-next";
        }else{
          clstatus="steps-pending";
        }
        statusItem.push({className:clstatus,status:'wait',title:item.text});
      });
      //console.log(statusItem,currentSequence,'statusItem')
      setLeadStatusList(statusItem);
    },[current])
  
    return(
    
    <Steps
        type="navigation"
        // size="small"
        current={current}
        onChange={onChangeStatus}
        responsive={false}
        id="step"
        className="site-navigation-steps small"
        items={leadStatusList
        //   [
        //   {
        //     status: 'subscriber',
        //     title: <span className="text-white"><i className=" btn text-white las la-check fs-23"></i></span>,
                  
        //   },
        //   {
        //     status: 'finish',
        //     title: <span className="text-white">Lead</span>,
        //   },
        //   {
        //     status: 'process',
        //     title: <span className="text-white">Martting qualified lead</span>,
        //   },
        //   {
        //     status: 'process',
        //     title: <span className="">Sales qualified lead</span>,
        //   },
        //   {
        //     status: 'process',
        //     title: <span className="">Opportunity</span>,
        //   },
        //   {
        //     status: 'process',
        //     title: <span className="">Customer</span>,
        //   },
        //   {
        //     status: 'wait',
        //     title: <span className="">Other</span>,
        //     // disabled: true,
        //   },
        // ]
      }
      />

    )
    
}


export default Stepsbar;