import React from 'react';
import loadingGif from '../../images/preloader.gif';
import styled from 'styled-components';

export const AuthWrapper: React.FC = () => {
  return <h2>authwrapper component</h2>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;
