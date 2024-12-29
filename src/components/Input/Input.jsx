import React from "react";
import "./Input.css";

import { Howl } from "howler";

function Input({ placeholder, names, setNames }) {
  const typeSound = new Howl({
      src: ["/Type.wav"],
      html5: true,
    });
    const playTypeSound = () => {
      typeSound.play();
    };
  return (
    <div>
      <input
        value={placeholder === "Romeo" ? names[0] : names[1]}
        onChange={(e) => {
          let newNames = [...names];
          newNames[placeholder === "Romeo" ? 0 : 1] = e.target.value;
          setNames(newNames);
          playTypeSound();
        }}
        placeholder={placeholder}
        className="nameInput"
        type="text"
      />
    </div>
  );
}

export default Input;
