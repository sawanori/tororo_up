/* esliint-disable jsx-ally/no-onchage */

import React,{useContext,useEffect,useState} from 'react'
import {graphql} from 'gatsby'
import {Layout,ImageGallery,ProductQuantityAdder,Button,Header,Container} from 'components'
import {Grid,SelectWrapper,Price} from './styles'
import CartContext from 'context/CartContext'
import {navigate, useLocation} from '@reach/router'
import queryString from 'query-string'
export const query = graphql`
 query ProductQuery($shopifyId:String){
    shopifyProduct(shopifyId:{eq:$shopifyId}){
     ...ShopifyProductFields
    }
 }
`

export default function ProductTemplate(props) {
  const {getProductById} = useContext(CartContext)
  const [product,setProduct] = useState(null)
  const [selectedVariant,setSelectedVariant] = useState(10)
  const {search,origin,pathname} = useLocation()
  console.log(search,origin,pathname)
  const variantId = queryString.parse(search).variant
  useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then((result) => {
      console.log(result)
      setProduct(result)
      setSelectedVariant(result.variants.find(([id]) => id === variantId) || result.variants[0])
    })
  },[getProductById,setProduct,props.data.shopifyProduct.shopifyId,variantId])
  
  const handleVariantChange = (e) => {
    const newVariant = product?.variants.find(v => v.id === e.target.value)
    selectedVariant(newVariant)
    navigate(`${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,{
      replace: true
    })
  }
 console.log(selectedVariant)
  return(
    <>
  <Header/>
  <Container>
    <Button onClick={() => navigate(-1)}>
      前に戻る
    </Button>
    <Grid>
      <div>
      <h1>{props.data.shopifyProduct.title}</h1>
      <p>{props.data.shopifyProduct.description}</p>
      {product?.availableForSale && !!selectedVariant && (
       <>
       {product?.variants.lenght > 1 && 
       <SelectWrapper>
       <strong>Variant</strong>
       <select value={selectedVariant.id} onChange={handleVariantChange}>
         {product?.variants.map(v => (
           <option key={v.id}>
             {v.title}
           </option>
         ))}
       </select>
       </SelectWrapper>
      }
       <div>
         {!!selectedVariant &&  <Price>
       {selectedVariant.price}円
       </Price>}
        <ProductQuantityAdder 
          acailable={selectedVariant.available}  
          variantId={selectedVariant.id}
        />
       </div>
        
       </>
      )}
      </div>
      <div>
      <ImageGallery
            // selectedVariantImageId={selectedVariant?.image.id}
            images={props.data.shopifyProduct.images}
          />
      </div>
   </Grid>
  </Container>
  </>
  )
}