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
        responsive={true}
        id="step"
        className="site-navigation-steps small"
        items={[
          {
            status: 'subscriber',
            title: 'Subscriber',
                  
          },
          {
            status: 'finish',
            title: 'Lead',
          },
          {
            status: 'process',
            title: 'Martting qualified lead',
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
          {
            status: 'wait',
            title: ' Mark stage as Done',
                    },
        ]}
      />
    )
}


export default Stepsbar;