const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yujinlee:5837@boilerplate.0a43p.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, userUnifiedTopology: true, useCreateIndex:true, userFindAndModify:false
}).then(() =>console.log("MongoDB Connected..."))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})