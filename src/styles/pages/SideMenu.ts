import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  margin: 50px 5px;
  border-right: 1px solid #fff;

  ul {
    list-style-type: none;

    li {
      margin: 10px 0;
    }
  }

  img {
    width: 100px;
    border-radius: 50%;
  }

  h3 {
    margin: 10px 0;
  }

  p {
    margin: 30px 0;
    color: #a8a8b3;
  }

  small {
    color: #ccc;
    margin-bottom: 20px;
  }
`;

export const SocialMidia = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 20px;
  justify-content: space-between;
  width: 60%;
  a {
    color: #fff;
  }
`;
