import React from 'react';
import * as d3 from "d3";

const MyD3Component = ({data}) => {

    const olRef = React.useRef(null);

    React.useEffect(() => {
        const ol = d3.select(olRef.current);

        ol.selectAll('li') // select all list elements (orange circle above)
            .data(data)  // bind all our data values (blue circle above)
            .join('li')      // merge the 'enter' and 'update' sets, create 'li' elements as needed
            .text(d => `${d["Animal's Name"]}`) // <-- add text to 'li' elements
      }, [data, olRef.current]);


    return <ol ref={olRef} width={200} height={200} />;
  
};

export default MyD3Component; 