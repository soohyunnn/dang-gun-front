import React from "react";
import FooterContainer from "../footer/FooterContainer";
import HeaderContainer from "../header/HeaderContainer";
import MainFifthContainer from "./MainFifthContainer";
import MainFirstContainer from "./MainFirstContainer";
import MainFourthContainer from "./MainFourthContainer";
import MainThirdContainer from "./MainSecondContainer";
import MainSecondContainer from "./MainThirdContainer";

function MainContainer() {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <MainFirstContainer></MainFirstContainer>
      <MainSecondContainer></MainSecondContainer>
      <MainThirdContainer></MainThirdContainer>
      <MainFourthContainer></MainFourthContainer>
      <MainFifthContainer></MainFifthContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default MainContainer;
