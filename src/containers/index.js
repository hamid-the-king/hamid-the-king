// import MenuItem from "../base/menuItem";
import {Link} from "react-router-dom";
import MenuItem from "../base/menuItem";
import {Nav,NavItem,NavLink} from "reactstrap";

const Layout = ({children}) => {
    return (
        <>
            <header>
                <Nav pills tabs justified
                >
                    <NavItem>
                        {/*<NavLink*/}
                        {/*    active*/}
                        {/*    href="#"*/}
                        {/*>*/}
                        {/*    Link*/}
                        {/*</NavLink>*/}
                        <MenuItem label={'Home'} path={'/'}/>
                    </NavItem>
                    <NavItem>
                        {/*<NavLink href="#">*/}
                        {/*    Another Link*/}
                        {/*</NavLink>*/}
                        <MenuItem label={'About'} path={'/about'}/>
                    </NavItem>
                    <NavItem>
                        <MenuItem label={'contact'} path={'/contact'}/>
                    </NavItem>
                </Nav>
            </header>
            {children}
            <footer className={'w-100 text-center p-5 bg-dark text-white content'}>
                <h2 className={'p-2'}>Designed by hamidreza haji alibeigi 2022&copy;</h2>
            </footer>
        </>
    )
}

export default Layout;