import React from 'react'
import { ContainerWrapper } from "./styles";


const Container = ({ children }) => {
  return (
    <>
      <ContainerWrapper>
        <main>{children}</main>
      </ContainerWrapper>
    </>
  );
};

export { Container };
