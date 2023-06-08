import React, { useState } from 'react';
import { Steps } from 'antd';



const Stepsbar=()=>{

    const [current,] = useState(0);

    const onChange = () => {
    //   console.log('onChange:', value);
    //   setCurrent(value);
    };
  
    return(<Steps
        type="navigation"
        // size="small"
        // current={current}
        onChange={onChange}
        responsive={false}
        id="step"
        className="site-navigation-steps small"
        items={[
          {
            status: 'subscriber',
            title: <span className="text-white font-weight-bold"><i class=" font-weight-bold btn text-white las la-check fs-23"></i></span>,
                  
          },
          {
            status: 'finish',
            title: <span className="text-white font-weight-bold">Lead</span>,
          },
          {
            status: 'process',
            title: <span className="text-white font-weight-bold">Martting qualified lead</span>,
          },
          {
            status: 'process',
            title: <span className="font-weight-bold">Sales qualified lead</span>,
          },
          {
            status: 'process',
            title: <span className=" font-weight-bold">Opportunity</span>,
          },
          {
            status: 'process',
            title: <span className="font-weight-bold">Customer</span>,
          },
          {
            status: 'wait',
            title: <span className=" font-weight-bold">Other</span>,
            // disabled: true,
          },
          // {
          //   status: 'wait',
          //   title: ' Mark stage as Done',
          //           },
        ]}
      />
    )
}


export default Stepsbar;