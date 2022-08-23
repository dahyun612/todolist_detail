import React from "react";
import styled from "styled-components";


const Header = () => {
  return (
    <StHeader>
      <div>저는 돌멩입니다. 그리고 이건 제 투두리스트</div>
      <div>이다현</div>
    </StHeader>
  );
}
export default Header;


const StHeader = styled.div`
     border: 1px solid rgb(230, 164, 164);
    background-color: palevioletred;
    color: white;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;
