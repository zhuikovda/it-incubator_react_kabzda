import React, { ChangeEvent, MouseEventHandler, useRef, useState } from "react";

export default {
  title: "input",
};

export const UncontrolledInput = () => <input />;

export const TrackedValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input onChange={(e) => setValue(e.currentTarget.value)} /> - {value}
    </div>
  );
};
export const GetValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickHandler = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el?.value);
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={onClickHandler}>save</button> - actual value: {value}
    </div>
  );
};

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("");
  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return (
    <div>
      <input value={parentValue} onChange={onchangeHandler} />
    </div>
  );
};

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true);
  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  };
  return (
    <div>
      <input type="checkbox" checked={parentValue} onChange={onchangeHandler} />
    </div>
  );
};

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined);
  const onchangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return (
    <select name="" id="" value={parentValue} onChange={onchangeHandler}>
      <option>none</option>
      <option value={"1"}>Minsk</option>
      <option value={"2"}>Moscow</option>
      <option value={"3"}>Kiev</option>
    </select>
  );
};

export const ControlledInputFixedValue = () => <input value={"__d_zh__"} />;
