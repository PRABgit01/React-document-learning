import React from "react";

import { Outlet, useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUSer = searchParams.get("filter") === "active";

  return (
    <div>
      <h1>user1</h1>
      <h1>use2</h1>
      <h1>user3</h1>

      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          active
        </button>
        <button onClick={() => setSearchParams({})}>reset filer</button>
      </div>
      {showActiveUSer ? (
        <h2>showing active user </h2>
      ) : (
        <h2>showing all user</h2>
      )}
    </div>
  );
}

export default Users;
