import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mainlayout from './layout/Mainlayout.jsx';
import Home from './home/Home.jsx';
import Frienddetails from './frienddetails/Frienddetails.jsx';
import Timeline from './timeline/Timeline.jsx';
import Status from './status/Status.jsx';
import Friendcontext from './Context/Friendcontext.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      { index: true, Component:Home },
      { path: "/details/:id", Component:Frienddetails},
      { path: "timeline", Component:Timeline},
      { path: "status", Component:Status},
      
     
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Friendcontext>
      <RouterProvider router={router} />
    </Friendcontext>
     
  </StrictMode>,
)
