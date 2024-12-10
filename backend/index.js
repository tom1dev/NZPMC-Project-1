const express = require('express');
const dbConnect = require('./config/mongoDB');
const cors = require('cors')

//initializes routes
const userRouter = require('./routers/userRouter');
const eventRouter = require('./routers/eventRouter');
const signInRouter = require('./routers/signInRouter');

const app = express();

app.use(express.static('dist'))
app.use(express.json());
app.use(cors());

//connect to database
dbConnect();

//Routes
app.use('/api/user', userRouter);
app.use('/api/event', eventRouter);
app.use('/api/signin', signInRouter);

//specifies the port the app is going to run on
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});