import styled from 'styled-components';

import { colors } from '../../Globals';
import add from '../../icons/add.svg';

const OpenSearch = styled.div`
  background: url(${add}) ${colors.green200} center no-repeat;
  background-size: 28px;
  bottom: 25px;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  font-size: 0;
  height: 50px;
  position: fixed;
  right: 25px;
  width: 50px;

  a {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

export {
  OpenSearch,
};
