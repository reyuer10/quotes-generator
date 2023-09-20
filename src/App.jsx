import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export default function App() {
  const [quotes, setQuotes] = useState("");

  const handleFetch = () => {
    axios.get("https://api.quotable.io/random").then((res) => {
      console.log(res.data);
      setQuotes(res.data);
    });
  };

  return (
    <>
      <div className="items-center flex justify-center h-screen font-zilla">
        <div className="text-center shadow-md ring-1 shadow-[#303030] rounded-2xl w-1/2">
          <p className="title text-[50px]">Random Quotes</p>
          <button
            className="bg-[#303030] text-white px-4 py-2 rounded-full text-lg font-semibold"
            onClick={() => handleFetch()}
          >
            Generate
          </button>
          <div className="text-[#303030] flex items-center justify-center space-y-5 flex-col text-center p-5 m-5 h-[200px] bg-amber-300 border-[#303030] shadow-md rounded-lg">
            <p className="font-bold text-3xl ">{quotes?.author}</p>
            <p className="font-semibold text-2xl">"{quotes?.content}"</p>
          </div>
        </div>
      </div>
    </>
  );
}
