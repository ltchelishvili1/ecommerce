import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import PaymentForm from '../../components/payment-form/payment-form.component'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
import { CheckoutContainer, Header, HeaderBlock, Total } from './checkout.styles'

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <CheckoutContainer>
      <Header>
        <HeaderBlock><span>Product</span></HeaderBlock>
        <HeaderBlock><span>Description</span></HeaderBlock>
        <HeaderBlock><span>Quantity</span></HeaderBlock>
        <HeaderBlock><span>Price</span></HeaderBlock>
        <HeaderBlock><span>Remove</span></HeaderBlock>
      </Header>
      {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
     ) )}
      <Total className='total'>Total: ${cartTotal}</Total>
      <PaymentForm/>
    </CheckoutContainer>
  )
}

export default CheckOut