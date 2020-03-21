import React from 'react';
import * as S from './styles';

import  {Container , Row, Col} from 'react-bootstrap'
export default function Header() {
  return (
    
    <S.Container>
            <Container>
                <Row>
                    <Col lg={3}>
                    <h1>
                        <a href ="/"> 
                        logo
                        </a>
                        </h1>
                    </Col>
                </Row>
            </Container>
    </S.Container>
  );
}
