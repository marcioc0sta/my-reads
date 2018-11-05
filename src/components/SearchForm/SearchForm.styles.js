import styled from 'styled-components';

import { colors } from '../../Globals';

import arrowBack from '../../icons/arrow-back.svg';

const SearchBooksBar = styled.div`
  background: ${colors.white};
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 0 6px rgba(0,0,0,0.23);
  display: flex;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
`;

const SearchBooksFormWrapper = styled.div`
  flex: 1;
`;

const SearchBooksBarInput = styled.input`
  border: none;
  font-size: 1.25em;
  outline: none;
  padding: 15px 10px;
  width: 100%;
`;

const CloseSearch = styled.div`
  background: url(${arrowBack}) center no-repeat;
  background-size: 28px;
  display: block;
  font-size: 0;
  left: 15px;
  height: 53px;
  top: 20px;
  width: 50px;
  
  a {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

export {
  SearchBooksBar,
  SearchBooksFormWrapper,
  SearchBooksBarInput,
  CloseSearch,
};
