const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler, deleteNoteByIdHandler,
} = require('./NoteHandlers');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,

  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => 'Halaman tidak dapat diakses dengan method tersebut',
  },
  {
    method: 'GET',
    path: '/about/{username?}',
    handler: (request, h) => {
      const { username } = request.params;

      return `About page${username}`;
    },
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => 'Halaman tidak dapat diakses dengan method',
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => 'Halaman tidak ditemukan',
  },
];

module.exports = routes;
