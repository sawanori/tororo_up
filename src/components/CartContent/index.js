import React,{useContext} from 'react';
import CartContext from 'context/CartContext';
import { CartItem, CartHeader, CartFooter, Footer } from './styles';
import { QuantityAdjuster } from '../QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';
import { Button } from '../Button';
import { navigate } from '@reach/router';
export function CartContent() {
  const {checkout,updateLineItem} = useContext(CartContext)
  const handleAdjustQuantity = ({quantity,variantId}) => {
    updateLineItem({quantity,variantId})
  }
  return(
    <section>
      <h1>ご検討内容</h1>
      {!!checkout?.lineItems && (
      <CartHeader>
        <div>
          商品名
        </div>
        <div>
          価格/個
        </div>
        <div>
           個数
        </div>
        <div>
           合計
        </div>
      </CartHeader>
      )}
      {checkout?.lineItems?.map(item => (
        <CartItem ley={item.variant.id}>
            <div>
              <div>{item.title}</div>
              <div>{item.variant.title === 'Default Title' ? '' : item.variant.title }</div>
            </div>
            <div>
              {item.variant.price}
            </div>
            <div>
              <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity}/>
            </div>
            <div>
              {(item.quantity * item.variant.price).toFixed(0)}円
            </div>
            <div>
             <RemoveLineItem lineItemId={item.id}/>
            </div>
        </CartItem> 
      ))}
      {!!checkout?.lineItems&& (
      <CartFooter>
        <div><strong>合計:</strong></div>
        <div><span>{checkout?.totalPrice}円</span></div>
      </CartFooter>
      )}
    
      <Footer>
        <div>
          <Button  onClick={() => {navigate(-1)}}>購入を続ける</Button >
        </div>
        <div>
          {!!checkout?.webUrl && (
          <Button  onClick={() => {window.location.href =checkout.webUrl}}>お会計</Button >
          )}
        </div>
      </Footer>
    </section>
  )
}
