const WordController = require("../controllers/word.controller");

module.exports = app => {
  app.get("/words", WordController.findAll);
  app.get("/items", WordController.findAllItems);
  app.get("/words/:id", WordController.findById);
  app.put("/words/update/:id", WordController.update);
  app.post("/words/new", WordController.create);

  app.post("/questions/new", WordController.createQuestion);
  
  app.post("/items/new/:id", WordController.createItem);
  app.delete("/words/delete/:id", WordController.delete);
};