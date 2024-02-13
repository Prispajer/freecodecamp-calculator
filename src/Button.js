import React from "react";

export default function Button({ button: { id, value }, handleInput }) {
  return (
    <button id={id} onClick={() => handleInput(value)}>
      {value}
    </button>
  );
}
