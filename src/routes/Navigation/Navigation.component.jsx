import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { NavigationContainer,LogoContainer,NavLink,NavLinks } from "./navigation.styles" 
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CardDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from "../../contexts/cart.context"
const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen, cartItems } = useContext(CartContext)
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <div>{<CrownLogo />}</div>
                </LogoContainer>
                <NavLinks>
                    <Link to="/shop" className="nav-link">
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span onClick={signOutUser} className="nav-link">Sign Out</span>
                        ) : (
                            <NavLink to="/auth" >
                                Sign In
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CardDropdown />}
            </NavigationContainer>

            <Outlet />
        </Fragment>
    )
}

export default Navigation;