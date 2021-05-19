const router = require('express').Router();
const { Router } = require('express');
const Car = require('../models/car');



const carSeed = [
    {
      year: 1967,
      make: "Ford",  
      model: "Mustang Shelby",
      img: "https://manofmany.com/wp-content/uploads/2015/06/1967-Mustang-Fastback-Shelby-G.T.500CR-Classic-8.jpg",
      description: "Red Ford Mustand Shelby Hatchback",

    },
    {
      year: 1971,
      make: "Ford",  
      model: "MACH 1",
      img: "https://www.mtaq.com.au/wp-content/uploads/2018/10/Ford-Mustang.jpg",
      description: "Baby Blue Ford Mach 1 Mustang",
    },
    {
      year: 1949,
      make: "Oldsmobile",  
      model: "Rocket",
      img: "https://assets3.thrillist.com/v1/image/1679766/1584x3000/scale;jpeg_quality=60.jpg",
      description: "Silver Pontiac Rocket 88",
    },
];


router.get("/seed", async (req, res) => {
    try {
        await Car.remove({});
        await Car.create(carSeed);
        const cars = await Car.find({});
        res.json(cars);
      } catch(error) {

        res.status(400).json(error) 
       }
})


router.get("/", async (req, res) => {
    res.json(await Car.find({}));
});


router.post("/", async (req, res) => {
    res.json(await Car.create(req.body));
});


router.put("/:id", async (req, res) => {
    res.json(await Car.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});


router.delete("/:id", async(req, res) => {
    res.json(await Car.findByIdAndRemove(req.params.id));
});






module.exports = router;