// @ts-nocheck
import React from "react";

export function AnotherComponent({ setAge }) {
  return (
    <>
      <button onClick={() => setAge((state) => state + 1)}>age +++</button>
    </>
  );
}
