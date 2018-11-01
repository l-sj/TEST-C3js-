import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

const Chart_data = {
  data: {
    json: [
      {name: 'www.site1.com', upload: 200, download: 200, total: 400},
      {name: 'www.site2.com', upload: 100, download: 300, total: 400},
      {name: 'www.site3.com', upload: 300, download: 200, total: 500},
      {name: 'www.site4.com', upload: 400, download: 100, total: 500}
    ],
    keys: {
      // x: 'name', // it's possible to specify 'x' when category axis
      value: ['upload', 'download']
    }
  },
  axis: {
    x: {
      // type: 'category'
    }
  }
};

const C3js_Axis = () => {
  return(
    <div>
      <h1>Axis</h1>
      <C3Chart { ...Chart_data } />
    </div>
  )
};
export default C3js_Axis;