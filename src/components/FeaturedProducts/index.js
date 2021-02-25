import React,{useContext} from 'react'
import {FeaturedProductsWrapper} from './styles'
import ProductsContext from 'context/ProductContext'
import {ProductsGrid} from '../ProductsGrid'
export function FeaturedProducts(){
  const {collections} = useContext(ProductsContext)
  const featuredCollection = collections.find(collection => collection.title==='一押しの品種')
  console.log(featuredCollection)
  return(
    <FeaturedProductsWrapper>
      <h1>商品ラインナップ</h1>
      <ProductsGrid products={featuredCollection.products} />
    </FeaturedProductsWrapper>
  )
}