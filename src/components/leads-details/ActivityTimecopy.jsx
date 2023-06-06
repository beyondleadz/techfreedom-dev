import React from "react";


import { Timeline, Button, Select, DatePicker, Space} from "antd";
// import { Timeline, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';



const ActivityTimecopy = () => {
  return<>

<div className="mb-4 fs-14 font-weight-bold">Overdue Activity</div>   

  <Timeline
    items={[
      {
        color: 'green',
        dot: <div><a href="#" class="btn btn-phone btn-sm btn-circle"> <i class="las la-phone fs-14"></i></a></div>,
        children: <div className="mt-3"><div> Phone Call</div>
        <p>Called Main Office (open call)</p>
        <p>called Jeff Mobile (open call)</p>
        </div>
        ,
      },
      {
        color: 'green',
        dot: <div><a href="#" class="btn btn-email btn-sm btn-circle"> <i class="las la-envelope fs-14"></i></a></div>,
        children: <div><div>Email</div>
        <p>called Main Office</p>
                </div>,
      },
      {
        color: 'red',
        dot: <div><a href="#" class="btn btn-whatsapp btn-sm btn-circle"> <i class="las la-mobile fs-14"></i></a></div>,
        children: (
         
            <div><div>Whatsapp</div>
        <p> Mike Office</p>
                </div>
         
        ),
      },
     
      {
        dot: <div><a href="#" class="btn btn-meet btn-sm btn-circle"> <i class="las la-handshake fs-14"></i></a></div>,
        children: (
          <>
           <div><div>Meeting</div>
        <p>Small engine repair near me</p>
                </div>
          </>
        ),
      },
      // {
      //   color: 'gray',
      //   dot: <div><a href="#" class="btn btn-act btn-sm btn-circle"> <i class="las la-phone fs-14"></i></a></div>,
      //   children: (
      //     <>
      //       <div><div>Follow up</div>
      //   <p>called Jeff Mobile (open call)</p>
      //           </div>
      //     </>
      //   ),
      // },
      // {
      //   color: 'gray',
      //   dot: <div><a href="#" class="btn btn-app btn-sm btn-circle"> <i class="las la-mobile fs-14"></i></a></div>,
      //   children: (
      //     <>
      //       <div><div>Chat</div>
      //   <p>Request Feedback</p>
      //           </div>
      //     </>
      //   ),
      // },
      // {
      //   color: '#00CCFF',
      //   dot: <div><a href="#" class="btn btn-document btn-sm btn-circle"> <i class="las la-phone fs-14"></i></a></div>,
      //   children: <div><div>Review received</div>
      //   <p>Feedback received (Open Review)</p>
      //           </div>,
      // },
    ]}
  />
  </>
}

export default ActivityTimecopy;