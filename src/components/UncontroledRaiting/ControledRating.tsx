import React, { useState } from "react";



export type RatingPropsType = {
  val: number;
  onClick: (value: number) => void;
};

export function ControledRating(props: RatingPropsType) {
  return (
    <div>
      <Star sel={props.val > 0} onClick={() => props.onClick(1)} />
      <Star sel={props.val > 1} onClick={() => props.onClick(2)} />
      <Star sel={props.val > 2} onClick={() => props.onClick(3)} />
      <Star sel={props.val > 3} onClick={() => props.onClick(4)} />
      <Star sel={props.val > 4} onClick={() => props.onClick(5)} />
    </div>
  );
}

type StarPropsType = {
  sel: boolean;
  //   value: number
  onClick: () => void;
};

const Star = (props: StarPropsType) => {
  console.log("Star rendering");
  return (
    <span onClick={() => props.onClick()}>
      {props.sel ? <b>star </b> : " star"}
    </span>
  );
};
