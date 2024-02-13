import React from "react";
import Button from "./Button";
import { calcData } from "./Data";

export default function Buttons({ handleInput }) {
  return (
    <div className="buttons-container">
      {calcData.map((button) => {
        return (
          <div className="number-container">
            <Button
              key={button.id}
              button={button}
              handleInput={handleInput}
            ></Button>
          </div>
        );
      })}
    </div>
  );
}
