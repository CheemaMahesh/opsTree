import React, { useState } from 'react';
import List from './List'
export default function Car(){
    const [cars,setCars]=useState([]);
    const [name,setName]=useState("");
    const [model,setModel]=useState("");
    const [brand,setBrand]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        const ind=cars.findIndex((c)=>c.name===name&&c.model===model&&c.brand===brand);

        if(ind===-1){
            const car={
                name,
                brand,
                model,
                quantity:1
            };
            setCars([...cars,car]);
            console.log(car)
        }else{
            const updateCar=[...cars];
            updateCar[ind].quantity+=1;
            setCars(updateCar);
            console.log(updateCar)
        }

        setName("");
        setBrand("");
        setModel("")



    }
    return(
      <>
        <form onSubmit={handleSubmit}>

        <input placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <input placeholder='Brand' value={brand} onChange={(e)=>setBrand(e.target.value)}/><br/>
        <input placeholder='Model' value={model} onChange={(e)=>setModel(e.target.value)}/><br/>
        <button>Add</button>


        </form>
        <hr/>
        <List cars={cars}/>
      </>
    )
}