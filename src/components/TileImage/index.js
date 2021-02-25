import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import Img from 'gatsby-image'
import TileImageWrapper from './styles'
export function  TileImage() {
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
  const image3 = allFile.edges[4].node.childImageSharp.fluid
  return(
    <div>
       <Img fluid={image3}/>
    </div>
  )
}