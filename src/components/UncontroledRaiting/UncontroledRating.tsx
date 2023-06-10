import React, { useState } from "react";

type RatingPropsType = {
  val: number;
  onClick: (value:number)=>void
};

export function ControledRating(props: RatingPropsType) {
  console.log("Rating rendering");
//   const [val, setVal] = useState(1);

//   const onClickHandler = (num: number) => {
//     setVal(num);
//   };

  return (
    
    <div>
      <Star sel={props.val > 0} onClick={()=>props.onClick(1)} />
      <Star sel={props.val > 1} onClick={()=>props.onClick(2)} />
      <Star sel={props.val > 2} onClick={()=>props.onClick(3)} />
      <Star sel={props.val > 3} onClick={()=>props.onClick(4)} />
      <Star sel={props.val > 4} onClick={()=>props.onClick(5)} />
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
  // return (
  //     <span onClick={props.onClick} > {props.sel
  //         ? <span><b>star</b>{" "}</span>
  //         : <span>star </span>}
  //     </span>);
  return (
    <span onClick={()=>props.onClick()}>{props.sel ? <b>star </b> : " star"}</span>
  );
  
};
