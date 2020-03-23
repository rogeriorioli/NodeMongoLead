import React, { useEffect, useState } from 'react';

import api from '../../services/'
import {Table , Col , Row, Container, Jumbotron, Button} from 'react-bootstrap'
// import { Container } from './styles';

export default function Sobre() {
    const [leads, setLeads] = useState([]);
    const [message, setMessage] = useState('');

   

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
    
    const deleteLead = (id) => {
        api.delete(`/lead/${id}`).then(success => {
            setMessage(success.data.message);

            setTimeout(() => {
                document.location.reload(true);
            },3000)
        })
    }
   
    return (
        <Container>
            <Jumbotron>

                <h2>Sobre</h2>
                <p>{message !== '' ? message :  ''} </p>
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
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody>

                        {leads.map((lead , i)=> {
                            return (
                                    <tr key={i} >
                                        
                                    <td>{i+idIncrement}</td>
                                    <td>{lead.nome}</td>
                                    <td>{lead.email}</td>
                                    <td>{lead.telefone}</td>
                                    <td>{lead.aceite === false ? 'não aceito' : 'aceito'}</td>
                                    <td>{lead.createdAt.toLocaleString()}</td>
                                    <td><a className="btn btn-warning" href={`edit/${lead._id}`}>editar</a></td>
                                    <td><Button variant="danger" onClick={() => deleteLead(lead._id)} >x</Button></td>
                                    </tr>
                            )
                        })}

                </tbody>
            </Table>
        </Container>
    );
}
