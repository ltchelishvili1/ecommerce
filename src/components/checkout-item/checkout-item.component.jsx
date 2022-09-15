import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Arrow, CheckoutItemContainer, ImageContainer , Img, NamePrice, Quantity, RemoveButton, Value} from './checkout-item.styles';
const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)
    const ClearItemHandler = () => clearItemFromCart(cartItem)
    const addItemHandler =() => addItemToCart(cartItem)
    const removeItemHandler =() => removeItemFromCart(cartItem)
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <NamePrice>{name}</NamePrice>
            <Quantity >
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <Value>
                    {quantity}
                </Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <NamePrice>${price}</NamePrice>
            <RemoveButton onClick={ClearItemHandler}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem