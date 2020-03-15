const Notes = require('./notesModel');

exports.getNotesByUser = async (userID) => {
  try {
    const notes = await Notes
      .find({ user: userID })
      .populate({ path: 'user', select: 'firstName lastName' });
    return notes;
  } catch (err) {
    throw err;
  }
};

exports.createNote = async (data) => {
  try {
    const newNote = new Notes(data);
    const note = await newNote.save();
    return note.id;
  } catch (err) {
    throw err;
  }
};