import styled from 'styled-components';

import { colors } from '../../Globals';

const ListBooksContent = styled.div`
  flex: 1;
  padding: 0 20px 80px;
`;

const BookShelfTitle = styled.h2`
  border-bottom: 1px solid ${colors.gray300};
  margin: 20px 0;
`;

const BooksGrid = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export {
  ListBooksContent,
  BookShelfTitle,
  BooksGrid,
};
