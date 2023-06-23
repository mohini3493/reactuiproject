import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.scss';
import './assets/css/responsive.scss';
import Routers from "./routers";
import { useLocation } from 'react-router-dom';
//const Routers = React.lazy(()=> import('./routers'));

function App() {
  
  return (
      <Routers />
  );
}

export default App;
