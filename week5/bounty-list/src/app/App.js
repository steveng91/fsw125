import './App.css';
import { useState, useEffect } from 'react';
import AddBounty from '../components/addBounty';
import Bounty from '../components/bounty';
import axios from 'axios'

function App() { 
  const [bounties, setBounties] = useState([])

  const getBounties = ()=>{
    axios.get('/bounty')
    .then(res => setBounties(res.data))
    .catch(err=>console.log(err))
  }
  const AddBounties = (newBounties) =>{
    console.log(newBounties)
    axios.post('/bounty', newBounties)
    .then(res =>{ 
      setBounties(prevBounties =>[...prevBounties, res.data])
      getBounties()
    })
    .catch(err => console.log(err))
  } 

  const deleteBounties = (bountyId)=>{
    axios.delete(`/bounty/${bountyId}`)
    .then(res =>{setBounties(prevBounties => prevBounties.filter(Bounty => Bounty._id !== bountyId))})
    .catch(err => console.log(err))
  }
  const updateBounties = ( updates,bountyId)=>{

    // console.log('bountyId: ', bountyId)
    // console.log('updates: ', updates)

    axios.put(`/bounty/${bountyId}`, updates)
    .then(res =>{getBounties()})
    .catch(err => console.log(err))
  }
 
  useEffect(()=>{
    getBounties()
  }, [])


  return (
    <div className="App">
      <AddBounty
        submit={AddBounties} 
      btnText=""
      />

      {bounties.map(bounty => <Bounty{...bounty} key = {bounty._id} deleteBounties={deleteBounties} updateBounties={updateBounties} />)}
    </div>
  );
}

export default App;
