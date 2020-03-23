import React from 'react';
import {Container , Row, Col} from 'react-bootstrap'
import * as S from './styles';
import FormLead from '../Form';

const Home = () => {
    return(
        <Container>
            <S.Base>
            <Row >
                <Col className="d-flex align-items-center">
                    <S.Title> Receba informações sobre a Nova Corona Virus <br/> (Covid 19)</S.Title>
                </Col>
                <Col>
                    <FormLead/>
                </Col>
            </Row>  
            </S.Base>
        </Container>
    ) 
};

export default Home;
