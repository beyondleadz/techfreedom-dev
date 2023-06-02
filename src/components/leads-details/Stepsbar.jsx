import React, { useState } from 'react';
import { Steps } from 'antd';



const Stepsbar=()=>{

    const [current, setCurrent] = useState(0);

    const onChange = (value) => {
      console.log('onChange:', value);
      setCurrent(value);
    };
  
    return(<Steps
        type="navigation"
        // size="small"
        current={current}
        onChange={onChange}
        responsive={false}
        id="step"
        className="site-navigation-steps"
        items={[
          {
            status: 'finish',
            title: 'Lead',
          },
          {
            status: 'finish',
            title: 'Lead Info',
          },
          {
            status: 'process',
            title: 'Activity time',
          },
          {
            status: 'process',
            title: 'Lead Details',
          },
          {
            status: 'process',
            title: 'Add Notes',
          },
          {
            status: 'process',
            title: 'Add Tasks',
          },
          {
            status: 'wait',
            title: 'wait',
            // disabled: true,
          },
        ]}
      />
    )
}


export default Stepsbar;