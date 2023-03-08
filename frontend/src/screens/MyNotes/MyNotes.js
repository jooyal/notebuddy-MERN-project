import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen/MainScreen'
import './MyNotes.css'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import axios from 'axios'
import Loading from '../../components/Loading'

const MyNotes = () => {
  
  const [loading, setLoading] = useState(false)
  const [notes, setNotes] = useState([]);
  const fetchNotes = async()=>{
    setLoading(true)
    const notesObj = await axios.get('/api/notes');
    setNotes(notesObj.data);
    setLoading(false)
  }

  useEffect(() => {
    fetchNotes()
  }, [])


  const deleteHandler = (id)=>{
    if(window.confirm('Are you sure you want to delete the note?')){
      console.log('deleted');
    }
  }
  return (
    <MainScreen title={'Welcome Back Joseph...'}>
      <Link to={'createnote'}>
        <Button className='btn-success mb-2' >New Note +</Button>
      </Link>
      {loading && <Loading/>}
      {notes.map((note,index)=>{
        return(
        <Card key={index} className='my-2'>
          <Accordion>
              <Accordion.Header as={Card.Text}>
            <CardHeader  className='card-header m-0'>
                <p className='card-title'>{note.title}</p>

              <div>
                  <Button className='btn-warning' size='sm' href={`/note/${note._id}`}>Edit</Button>
                  <Button className='btn-danger' size='sm' onClick={()=> deleteHandler(note._id)}>Delete</Button>
              </div>
            </CardHeader>
              </Accordion.Header>
              <Accordion.Body>
            <Card.Body>
            
              <h6>
                <Badge bg='success'>
                    Category : {note.category}
                </Badge>
              </h6>
            <blockquote className="blockquote mb-0">
              <p className='card-body'>
                {note.content}
              </p>
              <footer className="blockquote-footer" style={{fontSize:'13px'}}>
                Created On - 00/00/0000
              </footer>
            </blockquote>
            
            </Card.Body>
            </Accordion.Body>
          </Accordion>
        </Card>)
      })}




    </MainScreen>
  )
}

export default MyNotes