import React, { useState , useRef } from 'react';
import {Form, Button, Alert } from 'react-bootstrap'
import api from '../../services'
import * as S from './styles';

export default function FormLead() {
    const [lead , setLead] = useState({});
    const [message, setMessage] = useState('')
    const cleanForm = useRef(null)

    const getFormData = (e) => {
        e.persist();
        setLead(lead => ({...lead, [e.target.name] : e.target.value }))
    }
    const sendFormData = (e) => {
        e.preventDefault();
        api.post('/lead', lead).then(success => {

            const { message }= success.data
            setMessage(message)
        })  
        cleanForm.current.reset();
    }
    console.log(lead)
   return (
      <S.Formbase>
        <Form  ref={cleanForm}  onSubmit={sendFormData}>
            <Form.Group>
                    <Form.Control size="lg" type="text" onChange={getFormData} placeholder="Nome" name="nome"/>
                    <Form.Control size="lg" type="email"  onChange={getFormData}placeholder="Email" name="email" />
                    <Form.Control size="lg" type="tel" onChange={getFormData} placeholder="Telefone"  name="telefone"/>
                    <input type="radio" value="true" onChange={getFormData}  name="aceite" required/> aceito receber noticias sobre produtos e promooções
                    <Button className="form-control" size="lg" type="submit" variant="success"> Cadastar</Button>
                    {message !== '' ? <Alert variant="success" >{message}</Alert > :  ''} 

            </Form.Group>
        </Form>
      </S.Formbase>
    
  );
}
