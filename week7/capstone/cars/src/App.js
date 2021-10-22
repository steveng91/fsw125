import {useState, useEffect} from 'react'
import './App.css';
import Cars from './cars';
import axios from 'axios';
import AddVehicle from './AddVehicle';


function App() {

  const [cars,setCars] = useState([])
  const [typeValue, setTypeValue] = useState("")

  
  const getCars = () => {
    axios.get('/cars')
    .then(res => setCars(res.data))
    .catch(err => console.log(err))
  }
  const addCars = (newCars) => {
    // console.log(addCars)
    axios.post('/cars', newCars)
    .then(res => {
      console.log(res)
      setCars(prevCars => [...prevCars, res.data])
      getCars()
    })
    .catch(err => console.log(err))
  } 

  const deleteCar = (carId) => {
    axios.delete(`/cars/${carId}`)
    // console.log(deleteCar)
    .then(res => {
      setCars(prevCars => prevCars.filter(car => car._id !== carId))
    })
    .catch(err => console.log(err))
  }
  const updateCar = (update, carId) => {
    console.log(typeof update, carId)
    // console.log(update)
    axios.put(`/cars/${carId}`, update)
    .then(res => {
      setCars(prevCars => prevCars.map(car => car._id !== carId ? car : res.data))
      getCars()
    })
    .catch(err => console.log(err))
  }
  function filterArr(e){ 
    const filterArr= typeValue
    console.log(filterArr)
    filterArr==="all" ? getCars(): axios.get(`cars/car?type=${filterArr}`)
    .then(res =>{ setCars(res.data)
    console.log(res.data)
    })
  }

  useEffect(() => {
    getCars();
  }, []);

  const handleChange = (e) =>{
    const{value} = e.target;
    setTypeValue(value)
}





  return (
    <div className="carsContainer">
      <div className="centerList">
      <AddVehicle 
        submit={addCars}
      />
      <div className = "filterType">
      <input onChange= {handleChange}></input>
      <button onClick= {filterArr}>filter</button>
      </div>
      </div>
      <div className="carList">

      {cars.map((car, index) =>
         <Cars{...car} key={index} deleteCar={deleteCar} updateCar={updateCar} />)}
      </div>
     
    </div>
  );
}


export default App;
