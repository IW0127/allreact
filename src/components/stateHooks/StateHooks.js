import React, { useState } from "react";

function StateHooks() {
  const [add, setAdd] = useState(0);
  const handOnAdd = () => {
    setAdd(add + 1);
    setAdd(add + 1);
    setAdd((prev) => prev + 1);
    console.log(add);
  };
  return (
    <>
      <h4>increment number {add}</h4>
      <button onClick={handOnAdd}>Add</button>
    </>
  );
}

export default StateHooks;
