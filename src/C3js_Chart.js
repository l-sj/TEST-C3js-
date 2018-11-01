import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

const Chart_data={
  data1: [30, 200, 100, 400, 150, 250],
  data2: [50, 20, 10, 40, 15, 25],
};
const Line_Chart = ({ data }) => (
  <C3Chart data={{ 
    json: data, 
    type: 'line' 
  }} />
);


const Chart_data_timeseries={
  x: ['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
  data1: [30, 200, 100, 400, 150, 250],
  data2: [130, 340, 200, 500, 250, 350],
};
const Timeseries_Chart = ({ data }) => (
  <C3Chart 
    data={{ 
      json: data, 
      x: 'x',
    }}
    axis={{
      x: {
        type: 'timeseries', 
        tick: {  
         format: '%Y-%m-%d' 
        }
      }
    }}   
  />
);

const C3js_Chart = () => {
  return (
    <div style={{padding: 50+'px'}}>
      <h1>Chart</h1>
      <h2>line(default)</h2>
      <Line_Chart data={ Chart_data } />
      <h2>timeseries</h2>
      <Timeseries_Chart data={ Chart_data_timeseries } />
      <h2>spline</h2>
      <C3Chart data={{ json: Chart_data, type: 'spline' }} />
      <h2>step</h2>
      <C3Chart data={{ json: Chart_data, type: 'step' }} />
      <h2>area-step</h2>
      <C3Chart data={{ json: Chart_data, type: 'area-step' }} />
      <h2>area</h2>
      <C3Chart data={{ json: Chart_data, type: 'area' }} />
      <h2>area-spline</h2>
      <C3Chart data={{ json: Chart_data, type: 'area-spline' }} />
      <h2>bar</h2>
      <C3Chart data={{ json: Chart_data, type: 'bar' }} />
      <h2>scatter</h2>
      <C3Chart data={{ json: Chart_data, type: 'scatter' }} />
      <h2>pie</h2>
      <C3Chart data={{ json: Chart_data, type: 'pie' }} />
      <h2>donut</h2>
      <C3Chart data={{ json: Chart_data, type: 'donut' }} />
      <h2>gauge</h2>
      <C3Chart data={{ json: Chart_data, type: 'gauge' }} />
    </div>
  )
};
export default C3js_Chart;