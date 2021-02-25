import React from 'react'
import {TopImageWrapper} from './styles'
import {useStaticQuery,graphql} from 'gatsby'
import Img from 'gatsby-image'
import DogVideo from "../../images/yamaimo.mp4"
export const TopImage = () => {
  const {allFile} = useStaticQuery(graphql`
    query {
      allFile{
      edges{
        node{
          relativePath
          name
          childImageSharp{
            fluid(maxWidth:800){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`)
const image5 = allFile.edges[5].node.childImageSharp.fluid
return( 
  <TopImageWrapper>
      <video  width="100%" autoPlay muted　loop>
         <source src={DogVideo} type="video/mp4" />
       </video>
       {/* <Img fluid={image5}/> */}

  </TopImageWrapper>
)
}