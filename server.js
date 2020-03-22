const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const userRouter = require('./api/routes/users/userRoutes');
const notesRouter = require('./api/routes/notes/notesRoutes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/notes', notesRouter);

// for ALL routes that don't match, serve our react bundle.
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


mongoose
  .connect('mongodb://localhost:27017/note-app',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    app.listen('8080', () => {
      console.log('server is running on port 8080');
    });
  })
  .catch((err) => console.log(err));