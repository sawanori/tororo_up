import React from 'react'
import {ProductTileWrapper ,Description,Title,Price } from './styles'
import Img from 'gatsby-image'
import {StyledLink} from '../StyledLink'
export function ProductTile({title,imageFluid,description,minPrice,handle}){
  return(
    <ProductTileWrapper>
      <Img fluid={imageFluid}/>
     <Title> {title}</Title>
     <Description>
       {description}
     </Description>
     <Price>
       {parseFloat(minPrice).toFixed(0)}円〜
     </Price>
     <StyledLink to={`/products/${handle}`}>
       商品をみる
     </StyledLink>
    </ProductTileWrapper>
  )
}