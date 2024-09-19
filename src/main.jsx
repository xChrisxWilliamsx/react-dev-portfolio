import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import About from './pages/aboutMe';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import Contact from './pages/contactMe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
