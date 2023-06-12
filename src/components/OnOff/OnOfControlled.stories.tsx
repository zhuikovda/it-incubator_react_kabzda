import React, { useState } from "react";
import { OnOffControlled } from "./OnOffControlled";
import { OnOff } from "./OnOff";

export default {
  title: "OnOffControlled stories",
  component: OnOff,
};

export const OnMode = () => <OnOff on={true} />;
export const OffMode = () => <OnOff on={false} />;

export const ModeChaging = () => {
  const [on, setFlag] = useState<boolean>(false);
  return <OnOffControlled flag={on} callBack={setFlag} />;
};
