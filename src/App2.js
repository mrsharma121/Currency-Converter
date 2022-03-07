import React, { useState, useEffect} from 'react'
import { FormControl,Button, Paper, Select, TextField} from '@material-ui/core';
// import { Button } from 'bootstrap';
import './App2.css';


const btn = {
    marginTop : "5%",
    // border: "2px solid red",
    width: "46vw",
    fontSize: "1.5rem",
    color: "white",
    textShadow: "black -4px 3px 6px",
    boxShadow: "black -7px 6px 11px"
};
const input1 = {
    width : "40vw"
    // padding : "2%"
}
const h3 = {
    marginBottom: "6%",
    fontSize: "2rem",
    color: "white",
    textShadow: "black -4px 3px 6px"
}
function App2(props) {
    const {handleLogout} = props;

    const [task1, settask1] = useState(1)
    const [task2, settask2] = useState(1)
    const [country1, setCountry1] = useState([])
    const [country2, setCountry2] = useState([])
    const [value1, setValue1] = useState(1)
    const [value2, setValue2] = useState(1)
    useEffect(() =>{
        fetchAPI()
      }, [])

      const fetchAPI = async() =>{
        const url = `http://data.fixer.io/api/latest?access_key=df20770f396921e2974a7e9a2a088985`
        const response = await fetch(url)
        const resJSON = await response.json()
        setCountry1(resJSON.rates)
        setCountry2(resJSON.rates)
    };
    const convert = (e) => {
        e.preventDefault();
        var num = (value2 / value1) * task1;
        settask2(num)
    }
    // console.log(value1)
    // console.log(value2)
    // console.log(task1)
    // console.log(country1)
    return (

        <>
            <section className = "hero">
            
                <h2>Welcome!</h2>
                <button className = "logout" onClick = {handleLogout}>Log-Out</button>
            
        </section>
        <div>
            <Paper>
                <div className = "container">
                <h3 style ={h3 }> Currency Converter </h3>
                <form onSubmit = {convert}>
                <div>
                <TextField style ={input1} variant = "outlined" value = {task1 || ""} onChange = {(e) => settask1(e.target.value)}/>
                <FormControl className = "dropdown" variant ="outlined" onChange = {(e) => setValue1(e.target.value)}>
                    <Select native>
                    {Object.keys(country1).map((value, index) =>(
            <option key = {index} value = {country1[value]}> {value} </option>
                    ))}
                    </Select>
                </FormControl>
                </div>
                <div>
                <TextField style = {input1} variant = "outlined"  value = {task2} />
                <FormControl className = "dropdown" variant ="outlined" onChange = {(e) => setValue2(e.target.value)}>
                    <Select native>
                    {Object.keys(country2).map((value, index) =>(
            <option key = {index} value = {country2[value]}> {value} </option>
                    ))}
                    </Select>
                </FormControl>
                </div>
                <Button style = {btn} className= "btn1" type = "submit" variant = "contained">Convert</Button>
                </form>
            </div>
            </Paper>
        </div>
        </>
    )
}

export default App2
