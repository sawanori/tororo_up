import React from 'react'
import {HeroHeaderImageWrapper} from './styles'
export function HeroHeaderImage({children}){
  return (
    <>
    <HeroHeaderImageWrapper>
      <h1>{children}</h1>
    </HeroHeaderImageWrapper>
    </>
  )
}


