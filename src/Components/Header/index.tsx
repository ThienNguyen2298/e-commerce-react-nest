import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const HeaderContainer = styled.header`
  ${tw`
    w-full
    h-16
    bg-red-500
  `};
`;

const Header = () => {
  return <HeaderContainer>Header</HeaderContainer>;
};

export default Header;
