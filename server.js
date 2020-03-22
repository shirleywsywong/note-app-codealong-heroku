const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const userRouter = require('./api/routes/users/userRoutes');
const notesRouter = require('./api/routes/notes/notesRoutes');

const PORT = process.env.PORT || 8080
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/note-app'

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/notes', notesRouter);

// for ALL routes that don't match, serve our react bundle.
app.use(express.static(path.join(__dirname, 'build')));
//after we build, ask expres to look at the build folder instead of running react server
//localhost:3000 don't need to run anymore, just hit localhost:8080, it will serve both front and back
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


mongoose
  .connect(MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log('server is running on port 8080');
    });
  })
  .catch((err) => console.log(err));