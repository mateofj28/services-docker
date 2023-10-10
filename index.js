const express = require('express');
const app = express();
const db = require('./db')	
const port = 3000;

app.use(express.json())

const userRouter = require('./routes/userRouter')
app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});

