import React, { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
  // collapsed: boolean;
};

function UncontroledAccordion(props: AccordionPropsType) {
  console.log("Accordion rendering");
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div>
      <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}} />
      {collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
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

export default UncontroledAccordion;