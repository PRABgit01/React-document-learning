import { useState } from "react";
import { sculptureList } from "./exampledata";

export function UseStateHooksDoc() {
  const [index, setIndex] = useState(0);
  const [showData,setshowMore]=useState(false)

  function NextButton() {
    setIndex(index + 1);
  }

  function MoreDetails(){
    setshowMore(!showData)
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={NextButton}>next</button>
      <h2>
        <i>{sculpture.name}</i>
        {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <button onClick={MoreDetails}>{showData ? 'Hide' : 'Show'} details</button>

      {showData && <p>{sculpture.description}</p>}
    </>
  );
}
