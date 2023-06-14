import React, { FC } from "react";

type ItemsType = {
  title: string;
  value: any;
};

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  callBack: (collaps: boolean) => void;
  items: ItemsType[];
  onClick: (value: any) => void;
};

function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendering");
  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onChange={() => props.callBack(!props.collapsed)}
      />
      {!props.collapsed && (
        <AccordionBody items={props.items} onClick={props.onClick} />
      )}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("Accordion rendering");
  return <h3 onClick={(e) => props.onChange()}>{props.title}</h3>;
}

type AccordionBodyPropsType = {
  items: ItemsType[];
  onClick: (value: any) => void;
};

export const AccordionBody: FC<AccordionBodyPropsType> = (props) => {
  console.log("Accordion rendering");
  return (
    <ul>
      {props.items.map((i, index) => (
        <li
          onClick={() => {
            props.onClick(i.value);
          }}
          key={index}
        >
          {i.title}
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
