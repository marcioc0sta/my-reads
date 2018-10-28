import styled from 'styled-components'

import { colors } from '../../Globals';

const ListBooksTitle = styled.div`
  background: ${colors.green};
  padding: 10px 0;
  text-align: center;
`;

const ListBooksTitleText = styled.h1`
  font-weight: 600;
  font-size: 24px;
  margin: 0;
  color: ${colors.white};
`;

export {
  ListBooksTitle,
  ListBooksTitleText
}
