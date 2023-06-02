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
        className="site-navigation-steps"
        items={[
          {
            status: 'finish',
            title: 'finish 1',
          },
          {
            status: 'finish',
            title: 'finish 2',
          },
          {
            status: 'process',
            title: 'current process',
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