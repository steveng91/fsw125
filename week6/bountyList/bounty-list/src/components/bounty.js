import React, {useState} from "react";
import AddBounty from "./addBounty";

function Bounty (props){
    const {firstName, lastName, bounty, _id} = props
    const [editInput, setEditInput] = useState(false)
    return(
        <div>
            {!editInput?
            <>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <h2>{bounty}</h2>
            <button onClick = {()=> props.deleteBounties(_id)}>Clear Bounty</button>
            <button onClick={()=>setEditInput(prevIn => !prevIn)}>Update Bounty</button>
            </>
            :
            <>
            <AddBounty
            firstName={firstName}
            lastName={lastName}
            bounty={bounty}
            _id={_id}
            setEditInput= {setEditInput}
            submit={props.updateBounties}
            />
           <button onClick={()=>setEditInput(prevIn => !prevIn)}>cancel update</button>
            </>
            }
        </div>
    )
}

export default Bounty