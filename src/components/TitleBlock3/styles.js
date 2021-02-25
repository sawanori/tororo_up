import styled from 'styled-components'
import "typeface-gfs-didot"
export const TitleBlock3Wrapper = styled.div`
height:90px;
display:flex;
align-items:center;
background-color:#fffdfa;
font-family: 'Noto Serif JP', serif;
color:#c98f4d;
font-weight:bold;
 >span{
   flex-basis:10%;
   text-align:center;

 }
 >h1{
  flex-basis:100%;
  font-size:25px;

 }
 @media(min-width:651px) {
  height:270px;
  >h1{
  flex-basis:60%;
  font-size:40px;

 }
}
 
`