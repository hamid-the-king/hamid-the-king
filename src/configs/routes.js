import Home from './../views/Home';
import About from './../views/About';
import Contact from './../views/Contact';
import Layout from "../containers";

const routes = [
    { path: '/', element: <Home/>, layout: Layout},
    { path: '/about', element: <About/>, layout: Layout},
    { path: '/contact', element: <Contact/>, layout: Layout},
];

export default routes;
