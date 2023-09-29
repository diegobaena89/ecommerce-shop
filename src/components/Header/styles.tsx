import styled from "styled-components";

export const HeaderComponent = styled.header`
  background-color: #fff;
  color: #858585;
  width: 100%;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;

  .logo {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
  }

  .icons {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;
