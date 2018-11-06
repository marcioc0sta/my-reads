import styled from 'styled-components';

import load from './icons/loading.svg';

const Loader = styled.div`
  background: url(${load}) center no-repeat; 
  height: 325px; 
  width: 100%;
`;

const colors = {
  green: '#2e7c31',
  green100: '#60ac5d',
  green200: '#2e7d32',
  white: '#fff',
  gray100: '#eee',
  gray200: '#999',
  gray300: '#dedede',
};

export {
  colors,
  Loader,
};
