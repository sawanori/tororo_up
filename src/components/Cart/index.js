import React,{useContext} from 'react'
import {CartWrapper} from './styles'
import {FaShoppingCart} from 'react-icons/fa'
import CartContext from 'context/CartContext'
export function Cart() {
  const { checkout } = useContext(CartContext);
  let totalQuantity = 0;
  console.log(checkout)
  if (checkout) {
    checkout.lineItems.forEach(lineItem => {
      totalQuantity =  totalQuantity + lineItem.quantity
    })
  }
  return(
    <CartWrapper>
      <FaShoppingCart size="1.5rem"/>
      <div>
  　　　<span> {totalQuantity} 個/{checkout?.totalPrice || '0.00'}円</span>
     </div>
    </CartWrapper>
  )
}