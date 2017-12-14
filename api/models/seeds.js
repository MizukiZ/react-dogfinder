const Breed = require("./Breed");

Breed.create([])
  .then(breeds => {
    console.log("Created breeds", breeds);
  })
  .catch(error => {
    console.error(error);
  });
