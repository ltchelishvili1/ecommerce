
import './product-card.styles.jsx'
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component'
import { useDispatch, useSelector } from 'react-redux'
import { ProductCardContainer,Image, Footer, Name, Price, ButtonStyled } from './product-card.styles.jsx'
import { addItemToCart } from '../../store/cart/cart.action.js'
import { selectCartItems } from '../../store/cart/cart.selector.js'
const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const {id,name,price,imageUrl} = product
    const addProductToCart = () => {
      dispatch(addItemToCart(cartItems,product))
    }
  return (
    <ProductCardContainer>
        <Image src={imageUrl} alt = {`${name}`}/>
        <Footer>
            <Name className='name'>{name}</Name>
            <Price className='price'>{price}</Price>
        </Footer>
        <ButtonStyled onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to card</ButtonStyled>
    </ProductCardContainer>
  )
}

export default ProductCard