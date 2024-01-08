import { useState, useEffect } from "react";

export function UseStateWorking() {
  const [defaultPage, setDefaultPage] = useState("posts");

  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${defaultPage}`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  }, [defaultPage]);

  return (
    <>
      <button onClick={() => setDefaultPage("posts")}>
        <h1>Posts</h1>
      </button>
      <button onClick={() => setDefaultPage("comments")}>
        <h1>Comments</h1>
      </button>
      <button onClick={() => setDefaultPage("albums")}>
        <h1>Albums</h1>
      </button>
      <h1>{defaultPage}</h1>

      {item.map((item) => {
        return <li>{JSON.stringify(item)}</li>;
      })}
    </>
  );
}
