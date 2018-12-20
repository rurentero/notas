'use strict'

module.exports.registerNote = function registerNote(req, res, next) {
  res.send({
    message: 'This is the mockup controller for registerNote'
  });
};

module.exports.getNotes = function getNotes(req, res, next) {
  res.send({
    message: 'This is the mockup controller for getNotes'
  });
};

module.exports.updateNote = function updateNote(req, res, next) {
  res.send({
    message: 'This is the mockup controller for updateNote'
  });
};

module.exports.deleteNote = function deleteNote(req, res, next) {
  res.send({
    message: 'This is the mockup controller for deleteNote'
  });
};