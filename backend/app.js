const express = require('express');
const dotenv = require('dotenv');
const notes = require('./sampledata');

const app = express();
dotenv.config()
const PORT = process.env.PORT || 3500

app.get('/api/notes', (req,res)=>{
  res.json(notes)
})

app.get('/api/notes/:id', (req,res)=>{
  let note = notes.find((n)=>{
    return (n._id === req.params.id);
  })
  res.json(note)
})

app.listen(PORT, ()=>{
  console.log(`Server started at port ${PORT}`);
});