import styled from "styled-components";

export const HeaderComponent = styled.header`
  background-color: #fff;
  color: #858585;
  width: 100%;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-weight: bold;
    margin: 0 30px;
    color: #151515;
    font-size: 1.5rem;
    padding: 0 15px;
  }

  .logo {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
  }
`;
