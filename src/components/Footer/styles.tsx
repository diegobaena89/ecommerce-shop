import styled from "styled-components";

export const FooterComponent = styled.footer`
  width: 100%;
  background-color: #121213;
  color: #fff;

  .layer {
    position: relative;
    background-color: #121213;
    height: 150px;

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(18, 18, 19, 0.5);
      z-index: 1;
    }
  }

  .image {
    background-image: url("https://as1.ftcdn.net/v2/jpg/02/88/85/26/1000_F_288852636_AU4zdR1p8otvrj8Ic64IwLu6NGvqxoSx.jpg");
    height: 150px;
    background-size: cover;
    background-position: center;
    object-fit: contain;
    display: flex;
    justify-content: end;
    padding-right: 10%;
    align-items: center;

    .text {
      z-index: 2;
      color: #fff;
    }
  }

  .license {
    display: flex;
    flexdirection: column;
    justify-content: center;
    align-items: center;
  }
`;
