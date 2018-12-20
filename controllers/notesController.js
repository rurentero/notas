'use strict'

var varnotesController = require('./notesControllerService');

module.exports.registerNote = function registerNote(req, res, next) {
  varnotesController.registerNote(req.swagger.params, res, next);
};

module.exports.getNotes = function getNotes(req, res, next) {
  varnotesController.getNotes(req.swagger.params, res, next);
};

module.exports.updateNote = function updateNote(req, res, next) {
  varnotesController.updateNote(req.swagger.params, res, next);
};

module.exports.deleteNote = function deleteNote(req, res, next) {
  varnotesController.deleteNote(req.swagger.params, res, next);
};