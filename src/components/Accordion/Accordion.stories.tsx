import React, { useState } from "react";
import Accordion from "./Accordion";
import { action } from "@storybook/addon-actions";

export default {
  title: "Accordion",
  component: Accordion,
};

const callback = action("accordion mode change event fired");

export const CollapsedMode = () => (
  <Accordion titleValue={"Accordion"} collapsed={true} callBack={callback} />
);
export const UncollapsedMode = () => (
  <Accordion titleValue={"Menu"} collapsed={false} callBack={callback} />
);

export const AccorionControled = () => {
  const [accCollapsed, setAccCollapsed] = useState<boolean>(true);
  return (
    <Accordion
      titleValue={"__d_zh__"}
      collapsed={accCollapsed}
      callBack={setAccCollapsed}
    />
  );
};
