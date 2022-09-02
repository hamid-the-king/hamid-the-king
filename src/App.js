import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Fragment} from "react";
// import Layout from './containers';
import routes from './configs/routes';

const App = () => {
    return (
        <Router>
            {/*<Layout>*/}
            <Routes>
                {
                    routes.map((route, key) => {
                        const {layout, element, ...props} = route;
                        const Layout = layout ? layout : Fragment
                        return <Route key={key} {...props} element={<Layout>{element}</Layout>}/>
                    })
                }
            </Routes>
            {/*</Layout>*/}
        </Router>
    )
}

export default App;