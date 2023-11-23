import React from "react";

export default function List({cars}){
    return(
        <div>
            <h4>Name &emsp;Brand &emsp;Model &emsp;Quantity</h4>
            {cars.map((d,i)=>(
                <p key={i}>{d.name}&emsp;{d.brand}&emsp;{d.model}&emsp;{d.
                    quantity}</p>

          ))}

        </div>
    )
}