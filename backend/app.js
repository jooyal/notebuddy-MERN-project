const express = require('express');
const dotenv = require('dotenv');
const notes = require('./sampledata');
const connectDB = require('./config/db.js');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
dotenv.config()
connectDB();
app.use(express.json());

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

app.use('/api/users', userRoutes)


app.use(notFound)
app.use(errorHandler)

app.listen(PORT, ()=>{
  console.log(`Server started at port ${PORT}`);
});