import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

const LineChart = ({ data }) =>
  <C3Chart data={{ json: data }} />;

const BarChart = ({ data }) =>
  <C3Chart data={{ json: data, type: 'bar' }} />;

const chartData = {
  line: {
    data1: [30, 20, 50, 40, 60, 50],
    data2: [200, 130, 90, 240, 130, 220],
    data3: [300, 200, 160, 400, 250, 250]
  },
  bar: {
    data1: [30, 200, 100, 400, 150, 250],
    data2: [130, 100, 140, 200, 150, 50]
  }
};

const C3js_component = () => {
  return (
    <div>
      <h1>C3js 테스트</h1>
      <LineChart data={chartData.line} />
      <BarChart data={chartData.bar} />
      <div className="wrap_scroll">
        <LineChart data={chartData.line} />
      </div>
    </div>
  )
};
export default C3js_component;