import React from 'react'
import Img from 'gatsby-image'
import {useStaticQuery,graphql} from 'gatsby'
export function Logo(){
const data = useStaticQuery(graphql`
  {
    file(relativePath:{eq:"yamaimo_logo.png"}){
      childImageSharp {
        fixed(width:100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`)
  return(
    <Img  fixed={data.file.childImageSharp.fixed}/>
  )
}