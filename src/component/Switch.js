import { useEffect, useState } from "react";
import styles from "./Switch.module.css";
const Switch = (props) => {
  let initialSwitchState = {
    label: props.default,
    buttonStyle:
      props.default === "ON"
        ? `${styles.on} ${styles.button}`
        : `${styles.off} ${styles.button}`,
  };
  const [switchState, setswitchState] = useState(initialSwitchState);
  const handleSwitch = () => {
    setswitchState(function (prevState) {
      if (prevState.label === "ON") {
        return { label: "OFF", buttonStyle: `${styles.off} ${styles.button}` };
      } else {
        return { label: "ON", buttonStyle: `${styles.on} ${styles.button}` };
      }
    });
  };
  return (
    <div>
      <button className={switchState.buttonStyle} onClick={handleSwitch}>
        {switchState.label}
      </button>
    </div>
  );
};

export default Switch;
