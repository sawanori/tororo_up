import React from 'react'
import {LeftImageRightTextWrapper,LeftImage,RightText} from './styles'
import Img from 'gatsby-image'
import {useStaticQuery,graphql} from 'gatsby'
export function LeftImageRightText2(){
  const {allFile} = useStaticQuery(graphql`
      query {
        allFile{
        edges{
          node{
            relativePath
            name
            childImageSharp{
              fluid(maxWidth:500){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image5 = allFile.edges[2].node.childImageSharp.fluid
 return(
   <LeftImageRightTextWrapper>
     <LeftImage>

       <Img fluid={image5}/>
     </LeftImage>
     <RightText>
       <h3>山芋の多い料理店厳選山芋セット</h3>
      <p>
      自然薯、長芋（だるま芋）、大和芋一本づつ
        </p> 
      </RightText>    
   </LeftImageRightTextWrapper>
 )
}