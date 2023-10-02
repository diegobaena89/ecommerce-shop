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
    background-image: url("https://www.thespruce.com/thmb/VTgMbNWv4tNDjGP8e1JRlZe0OHY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/storing-your-clothes-without-a-closet-2648456-001-cfe0a333273b4b66a56ce1e65e7a9643.jpg");
    height: 150px;
    background-size: cover;
    background-position: center;
    object-fit: contain;
    display: flex;
    justify-content: center;
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
