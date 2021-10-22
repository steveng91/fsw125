import React,{useState} from "react";
import AddVehicle from "./AddVehicle";


function Cars(props){
    
    const {make,model,price,type,_id} = props
    const [editInput, setEditInput] = useState(false)

    return(
        <div>
            {
                !editInput ?
                <>
                <h1>Make: {make}</h1>
                <h1>Model: {model}</h1>
                <h2>Price: {price}</h2>
                <h2>Type: {type}</h2>
                <button onClick = { () => props.deleteCar(_id)}>clear inventory</button>
                <button onClick = { () => setEditInput(prevIn => !prevIn)}>Edit Vehicle Details</button>
                </>
                :
                <>
                <AddVehicle
                make = {make}
                model = {model}
                price = {price}
                type = {type} 
                _id = {_id}
                submit = {props.updateCar}/>
                <button onClick = { () => setEditInput(prevIn => !prevIn)}>finish vehicle update</button>
                </>
            }
        </div>
    )
}

export default Cars