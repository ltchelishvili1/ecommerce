import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CardDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from "../../contexts/cart.context"
const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <div>{<CrownLogo />}</div>
                </Link>
                <div className="nav-links-container">
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
                    <CartIcon/>
                </div>
                {isCartOpen &&  <CardDropdown/>}
            </div>

            <Outlet />
        </Fragment>
    )
}

export default Navigation;