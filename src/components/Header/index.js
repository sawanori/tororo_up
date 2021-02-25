import React from 'react'
import {Link} from 'gatsby'
import {HeaderWrappeer} from './styles'
import {Logo} from '../Logo'
import {Cart} from '../Cart'
export function Header() {
  return(
   <HeaderWrappeer>
     <div>
      <Link to="/">
        <Logo/>
      </Link>
     </div>
     <Cart/>
   </HeaderWrappeer>
  )
}