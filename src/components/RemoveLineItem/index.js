import React,{useContext} from 'react'
import CartContext from 'context/CartContext'
import {Icon} from './stytles'
import {FaTrashAlt} from 'react-icons/fa'
export function RemoveLineItem({lineItemId}) {
  const {removeLineItem} = useContext(CartContext)
  const handleClick = () => {
    removeLineItem(lineItemId)
  }
  return(
    <Icon onClick={handleClick}>
      <FaTrashAlt/>
    </Icon>
  )
}