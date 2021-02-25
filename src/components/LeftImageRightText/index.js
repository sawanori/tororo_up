import React from 'react'
import {LeftImageRightTextWrapper,LeftImage,RightText} from './styles'
import Img from 'gatsby-image'
import {useStaticQuery,graphql} from 'gatsby'
export function LeftImageRightText(){
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

  const image5 = allFile.edges[1].node.childImageSharp.fluid
 return(
   <LeftImageRightTextWrapper>
     <LeftImage>

       <Img fluid={image5}/>
     </LeftImage>
     <RightText>
       <h3>名物料理を堪能！<br/>名物自然薯とろろ鍋セット(3種類)</h3>
      <p>
          当店名物の自然薯鍋をご家庭で！！ <br/>
          古来より健康を助ける食材として日本人に愛されてきた山芋。<br/>
          当店では『自然薯』『大和芋』『長芋』の3種の山芋の美味しさ<br/>
          を味わっていただけるよう様々なお料理に仕立て、<br/>
          ご紹介いたします。自然薯は山口の契約農家から直送、大和芋は千葉から、<br/>
          長芋は青森や北海道からと仕入れにこだわりﾘｰｽﾞﾅﾌﾞﾙにご提供しております<br/>
        </p> 
      </RightText>    
   </LeftImageRightTextWrapper>
 )
}