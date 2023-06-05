import React from "react";



import { Timeline } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
const ActivityTime = () => (
  <Timeline
    items={[
      {
        color: 'green',
        dot: <div><a href="#" class="btn btn-web btn-sm btn-circle"> <i class="las la-globe"></i></a></div>,
        children: <div className="mt-3"><div>Website visit</div>
        <p>http://beyondleads/leads</p>
        <p>http://beyondleads/companyDetails</p>
        </div>
        ,
      },
      {
        color: 'green',
        dot: <div><a href="#" class="btn btn-phone btn-sm btn-circle"> <i class="las la-phone"></i></a></div>,
        children: <div><div>Phone Call</div>
        <p>called Main Office (open call)</p>
                </div>,
      },
      {
        color: 'red',
        dot: <div><a href="#" class="btn btn-app btn-sm btn-circle"> <i class="las la-phone"></i></a></div>,
        children: (
         
            <div><div>Phone Call</div>
        <p>called Mike Office (open call)</p>
                </div>
         
        ),
      },
      {
        dot: <div><a href="#" class="btn btn-email btn-sm btn-circle"> <i class="las la-globe"></i></a></div>,
        children: (
          <>
           <div><div>Completed Web Form</div>
        <p>Small engine repair near me</p>
                </div>
          </>
        ),
      },
      {
        color: 'gray',
        dot: <div><a href="#" class="btn btn-act btn-sm btn-circle"> <i class="las la-phone"></i></a></div>,
        children: (
          <>
            <div><div>Phone Call</div>
        <p>called Jeff Mobile (open call)</p>
                </div>
          </>
        ),
      },
      {
        color: 'gray',
        dot: <div><a href="#" class="btn btn-doc btn-sm btn-circle"> <i class="las la-envelope"></i></a></div>,
        children: (
          <>
            <div><div>Sent Email</div>
        <p>Request Feedback</p>
                </div>
          </>
        ),
      },
      {
        color: '#00CCFF',
        dot: <div><a href="#" class="btn btn-phone btn-sm btn-circle"> <i class="las la-phone"></i></a></div>,
        children: <div><div>Review received</div>
        <p>Feedback received (Open Review)</p>
                </div>,
      },
    ]}
  />
);

export default ActivityTime;