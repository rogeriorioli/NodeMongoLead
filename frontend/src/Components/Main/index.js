import React from 'react';

import * as S from './styles';
import Home from '../Home';

export default function Main({children}) {
  return (
    <S.Container>
        <Home/>
    </S.Container>
  );
}
