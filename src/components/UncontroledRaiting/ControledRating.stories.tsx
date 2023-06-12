import React, {useState} from "react";
import {ControledRating} from "./ControledRating";



export default {
  title: "ControledRaiting stories",
  component: ControledRating,
};

export const EmptyControledRating = ()=>{
  const [val, setVal]= useState<number>(1)
  return (
    <ControledRating val={val} onClick={setVal}/>
  )
}
