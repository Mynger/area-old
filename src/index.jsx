import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TwoD from './pages/twod/twod.jsx'
import ThreeD from './pages/threed/threed.jsx'
import './index.scss'
import './i18n.js';
import i18next from './i18n.js'
import { createHashRouter, RouterProvider } from "react-router-dom"
import { useRef } from 'react'
import Triangles from './pages/twod/triangles/triangles.jsx'
import Quadrilaterals from './pages/twod/quadrilaterals/quadrilaterals.jsx'
import OPolygons from './pages/twod/opolygons/opolygons.jsx'
import Ovals from './pages/twod/ovals/ovals.jsx'

i18next.t('my.key')

const router = createHashRouter([
  {
    path: "/area-old",
    element: <App />,
    errorElement: <p>Error</p>,
  },
  {
    path: "/area/2d",
    element: <TwoD />,
  },
  {
    path: "/area/triangles",
    element: <Triangles />,
  },
  {
    path: "/area/quadrilaterals",
    element: <Quadrilaterals />,
  },
  {
    path: "/area/other-polygons",
    element: <OPolygons />,
  },
  {
    path: "/area/ovals",
    element: <Ovals />,
  },
  {
    path: "/area/3d",
    element: <ThreeD />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
