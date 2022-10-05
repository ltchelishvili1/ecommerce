
import {useDispatch,useSelector} from 'react-redux'
import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'
import { CartIconContainer,ItemCount,ShopIcon } from './cart-icon.styles'
const CartIcon = () => {
    const dispatch = useDispatch()
    const cartCount = useSelector(selectCartCount)
    const isCartOpen = useSelector(selectIsCartOpen)
    const toggleIsCartOpen = () => 
        dispatch(setIsCartOpen(!isCartOpen))
    
    return (
        <CartIconContainer>
    
            <ShopIcon className="shopping-icon" onClick={toggleIsCartOpen} />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon