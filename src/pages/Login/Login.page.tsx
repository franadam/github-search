import React from 'react';
import styled from 'styled-components';
// import { useAuth0 } from '@auth0/auth0-react';
import loginImg from '../images/login-img.svg';

export const Login: React.FC = () => {
  return <h2>login page</h2>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;