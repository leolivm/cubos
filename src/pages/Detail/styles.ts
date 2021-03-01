import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 40px;

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

  @media (max-width: 580px) {
    margin-bottom: 24px;
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
  padding: 0 200px;
  min-height: 80vh;
  position: relative;

  @media (max-width: 1150px) {
    padding: 0 60px;
  }

  > div {
    iframe {
      width: 100%;
      margin-top: 40px;
      height: 500px;

      @media (max-width: 1150px) {
        margin: 0;
      }
    }
  }
`;

export const Title = styled.div`
  padding: 10px 40px;
  background: #e0e0e0;
  display: flex;
  font-family: Abel;
  font-size: 36px;
  align-items: center;
  justify-content: space-between;
  color: #1881c6;

  span {
    font-size: 18px;
    color: #848484;
    display: flex;
    align-self: flex-end;
    margin-bottom: 4px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1420px) {
    flex-direction: column;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
    background: #f5f5f5;
    padding: 0 30px 0 40px;
    width: 100%;

    h3 {
      color: #1881c6;
      font-size: 24px;
      font-family: Abel;
      margin-top: 20px;
      border-bottom: 1px solid #1bcecb;
      padding: 8px 16px 4px 0;
    }

    span {
      margin-top: 16px;
      color: #656565;
    }

    > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: #1881c6;
      font-family: Abel;
      font-weight: bold;
      margin-top: 20px;

      @media (max-width: 1150px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        display: flex;
        padding-bottom: 16px;
      }

      p {
        display: flex;
        flex-direction: column;
        align-self: flex-start;

        @media (max-width: 1150px) {
          align-self: center;
          flex-direction: row;
          align-items: center;
          display: flex;
          justify-content: center;
          margin: 4px 0;
        }

        span {
          margin-top: 8px;

          @media (max-width: 1150px) {
            display: flex;
            flex-direction: row;
            margin: 0 4px;
          }

          > span {
            display: flex;
            margin-top: 0;
            flex-direction: column;

            & + span {
              margin-top: 6px;

              @media (max-width: 1150px) {
                margin: 0 2px;
              }
            }
          }
        }
      }
    }
  }

  img {
    width: 350px;

    @media (max-width: 1420px) {
      margin-top: 20px;
      display: flex;
      align-self: center;
    }
  }
`;

export const Tag = styled.div`
  ul {
    position: absolute;
    bottom: 620px;
    left: 240px;
    display: flex;
    flex-direction: row;

    @media (max-width: 1420px) {
      position: unset;
      justify-content: center;
      margin: 10px auto;
    }

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

export const Percentage = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1881c6;
  color: #1bcecb;
  font-family: Abel;
  font-size: 36px;
  font-weight: bold;
  border-radius: 50%;
  bottom: 49%;
  right: 570px;
  width: 110px;
  height: 110px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1bcecb;
    border-radius: 50%;
    width: 100px;
    height: 100px;

    div {
      background: #1881c6;
      border-radius: 50%;
      width: 90px;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 1420px) {
    position: unset;
    margin: 10px auto;
  }
`;
