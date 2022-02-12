import React from 'react';
import * as d3 from "d3";

const BarChartComponent = ({data}) => {

    const barChart = React.useRef(null);

    React.useEffect(() => {
        const div = d3.select(barChart.current);

        let xscale = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.Total)])
                .range([0, 900])

        xscale.clamp(true);

        console.log(xscale(100));

        div.selectAll('div')
           .data(data)
           .join('div')
            .style('background', 'steelblue')
            .style('border', '1px solid white')
            .style('font-size', 'small')
            .style('color', 'white')
            .style('text-align', 'right')
            .style('padding', '3px')
            .style('width', d => `${xscale(d.Total)}px`) // <-- Use xscale instead of a magic number
            .text(d => `${d["Breed"]}`);
      /* TODO: Add code here to finish updating the visual properties of the bars */
      }, [data, barChart.current]);


    return <div ref={barChart} width={200} height={200} />;
  
};

export default BarChartComponent; 