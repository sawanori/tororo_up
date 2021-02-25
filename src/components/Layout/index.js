import React from 'react';
import {Header} from '../Header'
import {Footer} from '../Footer'
import {Container} from '../Container'
import {TopImage} from '../TopImage'
import {MainMessage} from '../MainMessage'
import {TitleBlock} from '../TitleBlock'
import {TitleBlock2} from '../TitleBlock2'
import {TitleBlock3} from '../TitleBlock3'
import {TileImage} from '../TileImage'
import {LeftImageRightText} from '../LeftImageRightText'
import {LeftImageRightText2} from '../LeftImageRightText2'
import {LeftImageRightText3} from '../LeftImageRightText3'
import {LeftCardRightImage} from '../LeftCardRightImage'


import { LayoutWrapper } from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
      <Header/>
       <TopImage/>
       <TitleBlock/>
       <TileImage/>
       <MainMessage/>
       <TitleBlock2/>
       <LeftImageRightText/>
       <LeftImageRightText2/>
       <LeftImageRightText3/>     
       {/* <TitleBlock3/> */}
       {/* <LeftCardRightImage/> */}
        <Container>
        <main>{children}</main>
        </Container>
        <Footer/>
      </LayoutWrapper>
    </>
  );
};

export { Layout };
