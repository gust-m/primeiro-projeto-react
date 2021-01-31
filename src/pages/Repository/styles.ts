import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryData = styled.div`
  margin-top: 80px;

  main {
    display: flex;
    padding: 24px 0;
    align-items: center;

    img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }

    div {
      margin-left: 24px;

      strong {
        color: #3D3D4D;
        font-size: 36px;
      }

      p {
        color: #737380;
        font-size: 18px;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {

      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3D3D4D;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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

    div {
      margin: 0 25px;
      flex: 1;

      strong{
        font-size: 24px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 8px;
      }
    }

    svg {
      margin-left: auto;
      color: #C9C9D4;
    }
  }
`;
