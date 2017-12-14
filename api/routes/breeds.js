const express = require("express");
const Breed = require("../models/Breed");
const authMiddleware = require("../middleware/auth");

const router = new express.Router();

router.get("/breeds", (req, res) => {
  Breed.find()
    .then(breeds => {
      res.json(breeds);
    })
    .catch(error => {
      res.json({ error });
    });
});

//create
router.post("/breeds", (req, res) => {
  const attributes = req.body;
  Breed.create(attributes)
    .then(breed => {
      res.status(201).json(breed);
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

//update
router.patch("/breeds/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  Breed.findByIdAndUpdate(id, changes)
    .then(breed => {
      if (breed) {
        res.json({ message: `${breed.name} is updated` });
      } else {
        res.status(404).json({ message: `could not find id with ${id}` });
      }
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

//delete
router.delete("/breeds/:id", (req, res) => {
  const id = req.params.id;
  Breed.findByIdAndRemove(id)
    .then(breed => {
      if (breed) {
        res.json({ message: `${breed.name} is deleted` });
      } else {
        res.status(404).json({ message: `could not find id with ${id}` });
      }
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
