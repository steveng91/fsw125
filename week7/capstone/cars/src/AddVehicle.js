import { useState } from "react";

function AddVehicle(props){
    
    const initialInput = {make:"", model:"",price:"", type: ""}
    const[input, setInput] = useState(initialInput)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInput(prevInput => ({...prevInput, [name]:value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.submit(input,props._id) 
        setInput(initialInput)
    }
    return(
        <form onSubmit = {handleSubmit}>
            <input type = "text" name = "make" value = {input.make} onChange = {handleChange} placeholder = "make"/>
            <input type = "text" name = "model" value = {input.model} onChange = {handleChange} placeholder = "model"/>
            <input type = "text" name = "price" value = {input.price} onChange = {handleChange} placeholder = "price"/>
            <input type = "text" name = "type" value = {input.type} onChange = {handleChange} placeholder = "type"/>
            <button>Add Vehicle</button>
        </form>
    )
}

export default AddVehicle