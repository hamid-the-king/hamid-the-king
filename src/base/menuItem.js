import {Link, useLocation} from "react-router-dom";
import {NavLink} from "reactstrap";


const MenuItem=({label,path})=>{
    const {pathname}=useLocation();
    console.log()
    return (
        <>
            {/*<li className={ path===pathname? 'active':''}>*/}
            {/*    <Link to={path}>{label}</Link>*/}
            {/*</li>*/}
            <NavLink    className={path===pathname? 'active':''}>
                <Link
                    // className={ path===pathname? 'active':''}
                    className={'nav-link w-100 text-decoration-none text-dark'}

                    to={path}


                >
                    {label}
                </Link>
            </NavLink>


        </>
    )

}
export  default MenuItem