import { Fragment } from "react"
import { Link, Outlet } from "react-router-dom"
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <div>{<CrownLogo/>}</div>
                </Link>
                <div className="links-container">
                    <Link to="/shop" className="nav-link">
                        SHOP
                    </Link>
                    <Link to="/auth" className="nav-link">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;