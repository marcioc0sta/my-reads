import styled from 'styled-components';

import { colors } from '../../Globals';
import arrowDropDown from '../../icons/arrow-drop-down.svg';

const BookShelfChanger = styled.div`
  background: url(${arrowDropDown}) ${colors.green100} center no-repeat;
  background-size: 20px;
  border-radius: 50%;
  bottom: -10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  height: 40px;
  position: absolute;
  right: 0;
  width: 40px;
`;

const BookShelfChangerSelect = styled.select`
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export { BookShelfChanger, BookShelfChangerSelect };
