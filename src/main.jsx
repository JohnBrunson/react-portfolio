// React DOM imports
import ReactDOM from 'react-dom/client';
//importing the router components we need
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import of bootstrap and custom style sheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';

//import the app
import App from './App';
// import error page
import Error from './pages/Error';
//additional pages should be imported here.
import About from './pages/About';
//import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const router = createBrowserRouter ([
{
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
        {
            index: true,
            element: <About />,
        },
        // {
        //     path: '/About',
        //     element: <About />
        // },
        {
            path: '/Portfolio',
            element: <Portfolio />
        },
        {
            path: '/Resume',
            element: <Resume />
        },
        {
            path: '/Contact',
            element: <Contact />
        }
    ]
}
])


//ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router} />);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
