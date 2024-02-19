import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


const Sign = () => {

  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [data,setdata] = useState([]);  
  const [show , setshow] = useState(false);

  const adddata = () => {
        
        if( email.length == 0 ){
           alert('Fill the fields first')
        }
       else if(name.length == 0){
          alert('Fill the fields first')
         }
        else{
          setdata([...data,{name,email}])
          setname("");
          setemail("");
        }      
  }
     
    const handleshow = () =>{
      setshow(!show)
    }

   const Remove = (index) => {
      let arr = data;
      arr.splice(index,1);     
      setdata([...arr])
      
   }
   

  return (
   
     <div className="App">
    <div className="form">
    <Stack direction="column" spacing={2}>
    
    <TextField id="-baoutlinedsic" label="Name" variant="outlined" value={name} 
    onChange={(naam) => setname(naam.target.value)} onPaste={() => {alert("Don't Paste text")}}/>
    
    <TextField id="outlined-basic" label="Email" variant="outlined" value={email}
    onChange={(Enaam) => setemail(Enaam.target.value)} onCopy={() => {alert("Don't Copy text")}}/>
    
    <div className='pass'>
    <label onClick={handleshow}>{show?'Hide':'Show'}</label>
    <input type={show?'text': 'password'}  required="required"/>
    <span>Password</span>
    </div>

    <Button variant="contained" color="secondary" onClick={adddata}  draggable onDrag={() =>console.log("Drag")} > 
    Submit
    </Button>
    </Stack>
    </div>
     <div className="data">
     <div className="form-data">
      <h4>Name</h4>
      <h4>Email</h4>
      <h4>Remove</h4>
     </div>
      {data.map((elements,index) => {

        return(
          <>
          <br/>
          <div className="form-data" >
            <h4>{elements.name}</h4>
            <h4>{elements.email}</h4>
            <Stack my={2}>
              <Button variant="contained" color="error"  onClick={() => {Remove(index)}}  >
                <DeleteIcon/>
              </Button>
            </Stack>
          </div>
          </>
        )
      })}
     </div>
         
    </div>
    
  )
}

export default Sign