import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {
  const [tag, setTag] = useState("");

  const { gif, loading, fetchData } = useGif(tag);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="bg-blue-500 w-1/2  rounded-lg border border-black flex flex-col gap-y-5 mt-[15px] items-center">
      <h1 className="text-2xl underline uppercase mt-[15px] mb-[15px] font-bold">
        Random GIF
      </h1>

      {loading ? <Spinner></Spinner> : <img src={gif} width="450" />}

      <input
        className="w-10/12 rounded-lg text-lg py-2 mb-[3px] text-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      ></input>
      <button
        onClick={clickHandler}
        className="w-10/12 bg-yellow-500 rounded-lg text-lg py-2 mb-[15px]"
      >
        Generate
      </button>
    </div>
  );
}
