const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;



const carSchema = new Schema (
    {
        year: String,
        make: String,
        model: String,
        img: String,
        description: String
    }, {timstamps: true}
);

const Car = model("car", carSchema);







module.exports = Car;