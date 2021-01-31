import styled from 'styled-components'
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 28px;
  color: #3A3A3A;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    border: 0;
    border-radius: 0 5px 5px 0;
    background: #04d361;
    color: #FFF;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    background: #FFF;
    padding: 24px;
    text-decoration: none;
    border-radius: 5px;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 25px;

      strong{
        font-size: 20px;
        color: #3d3d3d;
      }

      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 5px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcdb6;
    }
  }
`;