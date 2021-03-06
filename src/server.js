import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import user from './routes/api/users';
import auth from './routes/api/auth';
import profile from './routes/api/profile';

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// for debug purposes:
// local : mongodb://127.0.0.1/my_database
// docker : mongodb://database:27017/porty_backend
// online : mongodb+srv://jatin:<password>@cluster0-fyl7v.mongodb.net/test?retryWrites=true&w=majority

mongoose
    .connect('mongodb://database:27017/porty_backend', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log('Connected to the database...');
    })
    .catch((err) => {
        console.log(err);
    });
//

app.get('/', (req, res) => {
    res.send('This is the root page!!');
});

app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/profile', profile);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
