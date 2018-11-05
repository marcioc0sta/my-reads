import styled from 'styled-components';

import { colors } from '../../Globals';

const Book = styled.div`
  margin: 10px 15px;
  width: 140px;
`;

const BookTop = styled.div`
  align-items: flex-end;
  display: flex;
  height: 200px;
  position: relative;
`;

const BookCover = styled.div`
  background: url(${props => props.imageUrl}) ${colors.gray100} 0 0 no-repeat;
  background-size: cover;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  height: 193px;
  width: 128px;
`;

const BookTitle = styled.div`
  font-size: 0.8em;
  margin-top: 10px;
`;

const BookAuthors = styled.ul`
  color: ${colors.gray200}
  font-size: 0.8em;
  list-style: none;
`;

export {
  Book,
  BookTop,
  BookCover,
  BookTitle,
  BookAuthors,
};
