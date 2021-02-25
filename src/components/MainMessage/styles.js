import styled from 'styled-components'
import "typeface-gfs-didot"
export  const MainMessageWrapper = styled.section`
 text-align:center;
 font-size:18px;
 line-height:2;

 background-color:#fff;
 box-sizing:border-box;
 font-weight:bold;
 color:#054d0c;
 font-family: 'Noto Serif JP', serif;
  
 @media(max-width:651px) {
  padding:80px 0 80px 0;
  p{
    font-size:14px;
    line-height:2.7;
    br{
      display: none;
    }

  }
 }

`