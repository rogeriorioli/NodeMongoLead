import React,{useEffect, useState} from 'react';
import api from '../../services'
import { useParams} from 'react-router-dom'
// import { Container } from './styles';

export default function Edit() { 

    const {id}  = useParams();

    console.log(id)

    const [lead, setLead] = useState({}); 
    const [change , setChange] = useState({})
    const [message , setMessage] = useState('')

    const getsingle = async () => {
       await api.get(`/lead/${id}`).then(success => {
            console.log(success)
            setLead(success.data)
        })
    }


    const inputChange = (e) => {
        e.persist();      
        setChange(change => ({...change, [e.target.name] : e.target.value }))
      }

      const sendFormEdit = async (e) => {
          e.preventDefault();
            await api.put(`/lead/${id}` , change).then(success => {
            setMessage(success.data[0].message)
          })
      }

    useEffect(() => {
        getsingle();
    }, [setLead])
    console.log(change)
  return (
    <form onSubmit={sendFormEdit}>
    <input type="text" defaultValue={lead.nome} name="nome"  onChange={inputChange}/>
    <input type="tel"  defaultValue={lead.telefone} name="telefone"   onChange={inputChange}/>
    <input type="email" defaultValue={lead.email} name="email"  onChange={inputChange}/>
    <select onChange={inputChange} name="aceite">
        <option>{lead.aceite === false ? 'não aceito' :'aceito'}</option>
        <option value={true} >sim</option>
        <option value={false} >nao</option>
    </select>
    <button type ="submit">editar </button>
    {message}
</form>
  );
}
