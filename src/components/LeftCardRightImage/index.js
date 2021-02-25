import React from 'react'
import {LeftCardRightImageWrapper,LeftCard,RightImage} from './styles'
import Img from 'gatsby-image'
import {useStaticQuery,graphql} from 'gatsby'

export function LeftCardRightImage(){
  const {allFile} = useStaticQuery(graphql`
      query {
        allFile{
        edges{
          node{
            relativePath
            name
            childImageSharp{
              fluid(maxWidth:300){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const  LeftImage = allFile.edges[3].node.childImageSharp.fluid
  return(
    <LeftCardRightImageWrapper>
      <LeftCard>
     　 　<div> <Img fluid={allFile.edges[5].node.childImageSharp.fluid}/></div>
         <p>テストテスト鉄うと</p>
      </LeftCard>
      <RightImage>
        <Img fluid={allFile.edges[5].node.childImageSharp.fluid}/>
        </RightImage>
    </LeftCardRightImageWrapper>
  )
}