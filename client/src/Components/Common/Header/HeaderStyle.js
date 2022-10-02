import React from 'react';
import styled from 'styled-components';

const AllSetting = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderContainer = styled(AllSetting)`
  position: sticky;
  width: 100%;
  height: 180px;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
  z-index: 100;
  padding-bottom: 100px;
  background: #ffffff;
  z-index: 1;
`;

const NavbarSection = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  justify-content: center;
`;

const NavbarTop = styled(AllSetting)`
  width: 100%;
  height: 20px;
  border-bottom: 1px solid var(--lightgray);
  padding: 3px;
  justify-content: center;
`;

const NavbarMiddle = styled(AllSetting)`
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid var(--lightgray);
`;

const NavbarMain = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavbarBottom = styled(AllSetting)`
  width: 100%;
  transition: all 1s;
  justify-content: center;
`;

const LoginSection = styled(AllSetting)`
  width: 65%;
  justify-content: end;
  font-size: 13px;
  color: #696969;
  p {
    cursor: pointer;
  }
  .log_left {
    padding-right: 30px;
    border-right: 1px solid var(--lightgray);
  }
  p:hover {
    color: #bfbdbd;
  }
`;

const LoginBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const LogoSection = styled(AllSetting)`
  width: 200px;
  height: 100%;
  justify-content: center;
  p {
    font-size: 50px;
    font-weight: bold;
  }
`;

const SearchSection = styled(AllSetting)`
  width: 750px;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const SearchMain = styled.div`
  width: 300px;
  margin-right: 60px;
`;

const ButtonSection = styled(AllSetting)`
  width: 300px;
  height: 100%;
  align-items: center;
  justify-content: space-around;

  img {
    width: 30px;
    height: 30px;
    padding-top: 5px;
    cursor: pointer;
  }
`;

const CategorySection = styled(AllSetting)`
  width: 60%;
  transition: all 1s;

  // border: 1px solid;
  /* overflow:hidden; */

  justify-content: space-around;
`;

const BottomUnderLine = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--lightgray);
`;

const CategoryMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60px;
  height: 58px;
  font-size: 12px;
  padding: 10px 0;
  color: #b8ccb8;
  cursor: pointer;

  .category_text {
    width: 100%;
    text-align: center;
    font-family: 'Y_Spotlight';
    padding: 5px 0;
  }

  img {
    width: 30px;
    height: 30px;
  }
  ${CategoryMain}:hover {
    .category_text {
      transition: all 0.5s;
      color: black;
      font-weight: 900;
      font-size: 14px;
    }
    img {
      transition: all 0.4s;
      width: 35px;
      height: 35px;
    }
  }
`;

export {
  HeaderContainer,
  NavbarSection,
  NavbarTop,
  NavbarMiddle,
  NavbarMain,
  NavbarBottom,
  BottomUnderLine,
  LoginSection,
  LoginBox,
  LogoSection,
  SearchSection,
  SearchMain,
  ButtonSection,
  CategorySection,
  CategoryMain,
};
