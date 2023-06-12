import React from "react";
import {Rating} from "./Rating";


export default {
  title: "Raiting stories",
  component: Rating,
};

export const EmptyRating = ()=><Rating val={0}/>
export const Rating1 = ()=><Rating val={1}/>
export const Rating2 = ()=><Rating val={2}/>
export const Rating3 = ()=><Rating val={3}/>
export const Rating4 = ()=><Rating val={4}/>
export const Rating5 = ()=><Rating val={5}/>