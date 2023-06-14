import React, { useState } from "react";
import Accordion from "./Accordion";
import { action } from "@storybook/addon-actions";

export default {
  title: "Accordion",
  component: Accordion,
};

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

export const CollapsedMode = () => (
  <Accordion
    titleValue={"Accordion"}
    collapsed={true}
    callBack={callback}
    onClick={onClickCallback}
    items={[]}
  />
);
export const UncollapsedMode = () => (
  <Accordion
    titleValue={"Menu"}
    collapsed={false}
    callBack={callback}
    onClick={onClickCallback}
    items={[
      { title: "dima", value: 1 },
      { title: "sveta", value: 2 },
      { title: "eva", value: 3 },
    ]}
  />
);

export const AccorionControled = () => {
  const [accCollapsed, setAccCollapsed] = useState<boolean>(true);
  return (
    <Accordion
      titleValue={"__d_zh__"}
      collapsed={accCollapsed}
      callBack={setAccCollapsed}
      onClick={onClickCallback}
      items={[
        { title: "dima", value: 1 },
        { title: "sveta", value: 2 },
        { title: "eva", value: 3 },
      ]}
    />
  );
};
