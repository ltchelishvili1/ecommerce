
import './product-card.styles.jsx'
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { ProductCardContainer,Image, Footer, Name, Price, ButtonStyled } from './product-card.styles.jsx'
const ProductCard = ({product}) => {
    const {id,name,price,imageUrl} = product
    const {addItemToCart} = useContext(CartContext)
    const addProductToCart = () => {
      addItemToCart(product)
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