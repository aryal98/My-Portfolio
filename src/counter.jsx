import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex justify-center text-6xl pt-4 ">
        <h1 className="bg-[#003399] text-white rounded-full px-10 py-2">
          Counter
        </h1>
      </div>

      <div className="flex justify-center text-6xl py-4">
        <p>{count}</p>
      </div>
      <div className="flex justify-center gap-8 text-4xl ">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-700 text-white rounded-full px-8 py-2"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white rounded-full px-8 py-2"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
