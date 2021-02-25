import React,{useContext} from 'react';
import {useStaticQuery,graphql} from "gatsby"
import { Layout,Container, SEO, HomepageCollectionGrid, FeaturedProducts,TopImage,Header,Footer} from 'components';
import ProductContext from 'context/ProductContext'

const IndexPage = () => {

console.log("sawada")
  const {collections} = useContext(ProductContext)
   return(
     <>

     <Layout>


       {/* <HomepageCollectionGrid collections={collections.filter(collection => collection.title!== 'お得情報')}/> */}
       {!!collections.find(collection => collection.title == 'お得情報'
       ) && <FeaturedProducts/>
       }
       
     </Layout>
     </>
   )
}

export default IndexPage;
