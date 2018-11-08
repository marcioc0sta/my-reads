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

const NoBooks = styled.div`
  background: ${colors.gray100};
  color: ${colors.gray200};
  margin: 55px 0 -60px;
  padding: 10px 30px;
`;

const imagePlaceholder = 'https://via.placeholder.com/182x193';

export {
  colors,
  Loader,
  imagePlaceholder,
  NoBooks,
};
