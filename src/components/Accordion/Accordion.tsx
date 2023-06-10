import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    callBack: (collaps:boolean)=>void
};

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering");
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>props.callBack(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody />}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string;
    onClick:()=> void
};

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("Accordion rendering");
    return <h3 onClick={props.onClick}>{props.title}</h3>;
}

function AccordionBody() {
    console.log("Accordion rendering");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    );
}

export default Accordion;
