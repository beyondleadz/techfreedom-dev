import React from "react";



import { Timeline } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
const ActivityTime = () => (
  <Timeline
    items={[
      {
        color: 'green',
        children: <div className="mt-3"><div>Website visit</div>
        <p>http://beyondleads/leads</p>
        <p>http://beyondleads/companyDetails</p>
        </div>
        ,
      },
      {
        color: 'green',
        dot: <SmileOutlined />,
        children: <div><div>Phone Call</div>
        <p>called Main Office (open call)</p>
                </div>,
      },
      {
        color: 'red',
        children: (
         
            <div><div>Phone Call</div>
        <p>called Mike Office (open call)</p>
                </div>
         
        ),
      },
      {
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
        dot: <SmileOutlined />,
        children: <div><div>Review received</div>
        <p>Feedback received (Open Review)</p>
                </div>,
      },
    ]}
  />
);

export default ActivityTime;