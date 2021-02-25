import React from 'react'
import {Header} from '../Header'
import {AllProductLayoutWrapper} from './styles'
const AllProductLayout = ({children}) => {
 return(
 <AllProductLayoutWrapper>
 <Header/>
  <main>{children}</main>
 </AllProductLayoutWrapper>
 )
}

export {AllProductLayout}