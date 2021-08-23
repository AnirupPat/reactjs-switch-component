import { useState } from "react";
let initialSwitchState = {
  label: "OFF",
};
const Switch = () => {
  const [switchState, setswitchState] = useState(initialSwitchState);
  const handleSwitch = () => {
    setswitchState(function (prevState) {
      if (prevState.label === "ON") return { label: "OFF" };
      else return { label: "ON" };
    });
  };
  return (
    <div>
      <button onClick={handleSwitch}>{switchState.label}</button>
    </div>
  );
};

export default Switch;
