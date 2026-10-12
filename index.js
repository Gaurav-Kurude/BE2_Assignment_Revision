const {initializeDatabase} = require("./db/db.connect");

const Car = require("./models/car.models");
initializeDatabase();


const carData1 = {
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg"
  ]
};

const carData2 = {
  brand: "Ford",
  model: "Mustang",
  year: 2019,
  bodyStyle: "Convertible",
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "5.0L V8",
  mileage: 25000,
  color: "Red",
  price: 3500000,
  condition: "Used",
  description: "Exciting Ford Mustang convertible with powerful V8 engine.",
  photos: [
    "https://example.com/mustang-photo1.jpg",
    "https://example.com/mustang-photo2.jpg",
    "https://example.com/mustang-photo3.jpg"
  ]
};

async function createCar1(carData1){
    try{
      const car = new Car(carData1)
      const saveCar = await car.save();
      console.log("New Car Data", saveCar);
    } catch(error){
      throw error
    }  
}
async function createCar2(carData2){
    try{
      const car = new Car(carData2)
      const saveCar = await car.save();
      console.log("New Car Data", saveCar);
    } catch(error){
      throw error
    }  
}
// createCar1(carData1);
// createCar2(carData2);

// to get/read all the car in DB
async function readAllCars(){
    try{
      const allCars = await Car.find()
      console.log(allCars);
    } catch(error){
        console.log(error)
    }
}
// readAllCars();


// find car with brand Name
async function readByBrand(brandName){
    try{
      const carBrand = await Car.find({brand: brandName});
      console.log(carBrand);
    } catch(error){
        console.log(error);
    }
}
//  readByBrand("Ford")


// find car with color Name
async function readByColor(colorName){
    try{
      const carColor = await Car.find({color: colorName})
      console.log(carColor);
    } catch(error){
        console.log(error);
    }
}
// readByColor("Black");



// find a car with model and Update it's price
async function updateCarPrice(carModel, dataToUpdate){
    try{
      const updatedCarPrice = await Car.findOneAndUpdate({model: carModel}, dataToUpdate, {new: true});
      console.log(updateCarPrice)
    } catch(error){
        console.log("Error in changing data", error);
    }
}
// updateCarPrice("Corolla", {
// price: 2300000});



// find a car with model and update it's condition
async function updateCarCondition(carModel, dataToUpdate){
    try{
      const updatedCarCondition = await Car.findOneAndUpdate({model: carModel}, dataToUpdate, {new: true});
      console.log(updatedCarCondition);
    } catch(error){
        console.log("Error in changing data", error);
    }
}
// updateCarCondition("Model S", {condition: "Used"});


// create a function to delete Car by id
async function deleteCarById(carId){
    try{
      const deleteCar = await Car.findByIdAndDelete(carId);
      console.log(deleteCar);
    } catch(error){
        console.log("Error in deleting car",error);
    }
}
//  deleteCarById("6a43876c952cf9407211fff3");



// delete a car by its body style
async function deleteCarByBodyStyle(carBodyStyle){
    try{
      const deletedCar = await Car.findOneAndDelete({
bodyStyle: carBodyStyle});
      console.log("This car was delete",deletedCar);
    } catch(error){
        console.log("Error in deleting car data", error);
    }
}
// deleteCarByBodyStyle("Coupe");
