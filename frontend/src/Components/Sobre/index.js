import React, { useEffect, useState } from 'react';

import api from '../../services/'
import {Table , Col , Row, Container, Jumbotron} from 'react-bootstrap'
// import { Container } from './styles';

export default function Sobre() {
    const [leads, setLeads] = useState([]);

    const [idIncrement, setIdIncrement] = useState(0) ;

    const getLeads = () => {
        api.get('/leads').then(success => {
            setLeads(success.data);
        })
    }

    const sendNumber = ()  => setIdIncrement(idIncrement+1) 
    useEffect(() => {
        getLeads();
        sendNumber();
    }, [setLeads])
    
   
    return (
        <Container>
            <Jumbotron>

                <h2>Sobre</h2>
            </Jumbotron>
            <Table striped bordered hover variant="dark"> 
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>email</th>
                        <th>telefone</th>
                        <th>aceite</th>
                        <th>data de cadastro</th>
                        <th>editar</th>
                    </tr>
                </thead>
                <tbody>

                        {leads.map((lead , i)=> {
                            return (
                                    <tr key={i}>
                                        
                                    <td>{i+idIncrement}</td>
                                    <td>{lead.nome}</td>
                                    <td>{lead.email}</td>
                                    <td>{lead.telefone}</td>
                                    <td>{lead.aceite === false ? 'não aceito' : 'aceito'}</td>
                                    <td>{lead.createdAt.toLocaleString()}</td>
                                    <td><a href={`edit/${lead._id}`}>editar</a></td>
                                    </tr>
                            )
                        })}

                </tbody>
            </Table>
        </Container>
    );
}
