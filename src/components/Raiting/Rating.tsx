import React from "react";

type RatingPropsType = {
    val: number;
};

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering");

    return (
        <div>
            <Star sel={props.val > 0} />
            <Star sel={props.val > 1} />
            <Star sel={props.val > 2} />
            <Star sel={props.val > 3} />
            <Star sel={props.val > 4} />
        </div>
    );
}



type StarPropsType = {
    sel: boolean;
};

function Star(props: StarPropsType) {
    console.log("Star rendering");
    if (props.sel === true) {
        return (
            <span>
                <b>star</b>{" "}
            </span>
        );
    } else {
        return <span>star </span>;
    }
}
