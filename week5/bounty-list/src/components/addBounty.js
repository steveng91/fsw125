import React, { useState } from "react";

function AddBounty(props){
    //console.log('submit: ', props.submit)
    const initialInputs = {firstName: "", lastName:"",type: "", bounty:  ""}
    const [inputs, setInputs] = useState(initialInputs)

    const handleChange = (e) =>{
        const {name, value} = e.target
        setInputs(prevInputs =>({...prevInputs, [name]:value}))
    }
    const handleSubmit = (e) =>{
         e.preventDefault()

        // console.log('inputs: ', inputs)

        props.submit( inputs,props._id)
        if(
            props.setEditInput
        )
        {props.setEditInput(false)}
        setInputs(initialInputs)
    }
    return(
        <form onSubmit = {handleSubmit}>
            
            <input required type = "text" name = "firstName" value = {inputs.firstName}onChange = {handleChange} placeholder= 'First Name'/>
            <input required type = "text" name = "lastName" value = {inputs.lastName}onChange = {handleChange} placeholder= 'Last Name'/>
            <input required type = "text" name = "type" value = {inputs.type}onChange = {handleChange} placeholder= 'Type'/>
            <input required type = "number" name = "bounty" value = {inputs.bounty}onChange = {handleChange} placeholder= 'bounty'/>
            <button>Update Bounty Sheet</button>
            
        </form>
    )
}

export default AddBounty