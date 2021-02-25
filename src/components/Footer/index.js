import React from 'react'
import {FooterWrapper} from './styles'
import {Link} from 'gatsby'
export function Footer(){
 return(
    <FooterWrapper>
      <Link to="/company">会社概要</Link>
      <Link to="/recruit">求人情報</Link>
      <Link to="/">©️エウレカキッチンアンドラボ</Link>
    </FooterWrapper>
 )
}