const express = require('express');
const dbConnect = require('./config/mongoDB');
const userRouter = require('./routers/userRouter');
const eventRouter = require('./routers/eventRouter');

const app = express();
app.use(express.json());

//connect to database
dbConnect();

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

//Routes
app.use('/api/user', userRouter);
app.use('/api/event', eventRouter);

//specifies the port the app is going to run on
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});