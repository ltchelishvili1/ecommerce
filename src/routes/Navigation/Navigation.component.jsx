import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
const Navigation = () => {
    const { currentUser } = useContext(UserContext)

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <div>{<CrownLogo />}</div>
                </Link>
                <div className="links-container">
                    <Link to="/shop" className="nav-link">
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span onClick={signOutUser} className="nav-link">Sign Out</span>
                        ) : (
                            <Link to="/auth" className="nav-link">
                                Sign In
                            </Link>
                        )

                    }

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;