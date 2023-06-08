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
            title: <span className='text-white '><i class=" font-weight-bold btn text-white fa fa-check"></i></span>,
                  
          },
          {
            status: 'finish',
            title: <span className='text-white'>Lead</span>,
          },
          {
            status: 'process',
            title: <span className='text-white'>Martting qualified lead</span>,
          },
          {
            status: 'process',
            title: 'Sales qualified lead',
          },
          {
            status: 'process',
            title: 'Opportunity',
          },
          {
            status: 'process',
            title: 'Customer',
          },
          {
            status: 'wait',
            title: 'Other',
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