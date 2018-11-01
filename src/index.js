import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import C3js_Chart from './C3js_Chart';
import C3js_Axis from './C3js_Axis';

const Main = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          {/* <NavLink to="/" className="link">home</NavLink> */}
          <NavLink to="/" exact activeClassName="on" className="link">chart</NavLink>
          <NavLink to="/axis" activeClassName="on" className="link">axis</NavLink>
        </div>

        {/* <Route path="/"  component={ App } /> */}
        <Route path="/" exact component={ C3js_Chart } />
        <Route path="/axis" component={ C3js_Axis } />
      </div>
    </BrowserRouter>
  )
}
ReactDOM.render(<Main />, document.getElementById('root'));


serviceWorker.unregister();
