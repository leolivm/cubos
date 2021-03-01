import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 910px) {
    min-width: 910px;
  }
`;

export const Header = styled.header`
  height: 64px;
  background: #1881c6;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1bcecb;

  @media (max-width: 580px) {
    margin-bottom: 24px;
  }

  span {
    font-size: 36px;
    font-family: Abel;
  }

  a {
    text-decoration: none;
    color: #1bcecb;

    span {
      font-size: 36px;
      font-family: Abel;
    }
  }
`;

export const Content = styled.div`
  padding: 0 113px;
  min-height: 80vh;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const SearchForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  div {
    display: flex;
    align-items: center;
    position: relative;

    input {
      width: 900px;
      height: 46px;
      padding: 16px;
      border: none;
      border-radius: 25px;
      background: #e9e9e9;
      color: #1881c6;
      transition: border 0.2s;

      &::placeholder {
        font-family: Abel;
        color: #529fd2;
      }
    }

    button {
      position: absolute;
      right: 16px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 24px;
  position: relative;
  width: 900px;
  padding: 0 4px;

  a {
    display: flex;
    width: 100%;
    text-decoration: none;
    cursor: pointer;
  }

  img {
    width: 200px;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.div`
  background: #1881c6;
  position: relative;
  padding: 20px 0 4px 100px;
  font-size: 36px;
  font-family: Abel;
  color: #1bcecb;
`;

export const Description = styled.div`
  background: #e5e5e5;
  height: 100%;
  padding: 4px;

  div {
    padding: 4px 0 4px 100px;
    color: #a0a0a0;

    p {
      font-family: Abel;
    }
  }
`;

export const Percentage = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1881c6;
  color: #1bcecb;
  font-family: Abel;
  font-size: 24px;
  border-radius: 50%;
  top: 30px;
  left: 216px;
  width: 75px;
  height: 75px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1bcecb;
    border-radius: 50%;
    width: 65px;
    height: 65px;

    div {
      background: #1881c6;
      border-radius: 50%;
      width: 55px;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const MovieDescription = styled.div`
  color: #818181 !important;
  padding: 0 20px !important;
  flex-direction: column;
  margin-top: 20px;
  font-family: Lato;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

export const Tag = styled.div`
  ul {
    position: absolute;
    bottom: 20px;
    left: 216px;
    display: flex;
    flex-direction: row;

    li {
      background: #fff;
      color: #1881c6 !important;
      border: 1px solid #1881c6;
      border-radius: 16px;
      font-family: Abel;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px 12px !important;
      margin: 0 4px;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  background: #fff;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
    color: #555555;
    font-size: 14px;
    font-family: PT Sans;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #a9a9a9;
    }
  }

  @media (max-width: 515px) {
    min-width: 515px;
  }
`;
