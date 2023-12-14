import React, { useState } from 'react'
import { Button } from '@mui/material'
import './Plant.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Plant = () => {

  var [inputs, setInputs] = useState({ "pid": '', "pname": '', "ptype": '', "clr": '', "size": '', "pri": '', "des":'', "stk":'',"img":''})
  var [selectedimage,setSelectedimage] = useState([]);

  const navigate = useNavigate();

  const inputHandler = (event) => {
    const { name, value } = event.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
    console.log(inputs)
  }

  const handleImage = (event) => {
    const file = event.target.files[0];
    setSelectedimage(file)
    inputs.images=file;
 }


  const savedata = () => {
    axios.post("http://localhost:4005/pnew", inputs)
      .then((response) => { alert("Record Saved") })
      .catch(err => console.log(err))
      navigate('/plantview')
  }

  return (
    <div className='p'>

      <center><h1>Plant Details</h1>
      <form>
        Plant ID : <input type="text" name="pid" id='p1' value={inputs.pid} onChange={inputHandler}/>
        <br /><br />
        Plant Name : <input type="text" name="pname" id="p2" value={inputs.pname} onChange={inputHandler}/>
        <br /><br />
        Plant Type : <input type="text" name="ptype" id="p3" value={inputs.ptype} onChange={inputHandler}/>
        <br /><br />
        Color : <input type="color" name="clr" id="p4" value={inputs.clr} onChange={inputHandler}/>
        <br /><br />
        Size : <input type="text" name="size" id="p5" value={inputs.size} onChange={inputHandler}/>
        <br /><br />
        Price : <input type="number" name="pri" id="p6" value={inputs.pri} onChange={inputHandler}/>
        <br /><br />
        Description : <textarea rows='4' name='des' id='p7'value={inputs.des} onChange={inputHandler}/>
        <br /><br />
        Stock : <input type="number" name="stk" id="p8" value={inputs.stk} onChange={inputHandler}/>
        <br /><br />
        Image : <input type="image" src=""value={inputs.img} onChange={handleImage} />
        <br /><br />
        <Button variant='contained' onClick={savedata}>SAVE</Button>
      </form>
      </center>

    </div>
  )
}

export default Plant