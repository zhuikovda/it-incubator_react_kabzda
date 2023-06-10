import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { OnOff } from "./components/OnOff/OnOff";
import { Rating } from "./components/Raiting/Rating";
import UncontroledAccordion from "./components/UncontroledAccordion/UncontroledAccordion";
import { ControledRating } from "./components/UncontroledRaiting/UncontroledRating";
import Accordion from "./components/Accordion/Accordion";
import { OnOffControlled } from "./components/OnOff/OnOffControlled";

function App() {
  const [val, setVal] = useState(1);
  const [accCollapsed, setAccCollapsed] = useState<boolean>(true);
  const [on, setOn] = useState(false);

  return (
    <div className="appContainer">
      <PageTitle title={"This is App component"} />
      <PageTitle title={"Hello, dima"} />
      Article 1{/* <Rating val={1} /> */}
      <UncontroledAccordion titleValue={"Accordion"} />
      <UncontroledAccordion titleValue={"Menu"} />
      <Accordion
        titleValue={"__d_zh__"}
        collapsed={accCollapsed}
        callBack={setAccCollapsed}
      />
      Article 2{/* <ControledRating /> */}
      <OnOff />
      <OnOff />
      <OnOff />
      {/* <OnOff on={false}/>
      <OnOff on={true}/> */}
      <ControledRating val={val} onClick={setVal} />
      <OnOffControlled flag={on} callBack={setOn} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle rendering");
  return <h1>{props.title}</h1>;
}

export default App;
