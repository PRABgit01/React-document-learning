import React from "react";
import { useParams } from "react-router-dom";

function UsersDetails() {
  const {userID} = useParams();
//   const userID = useparam.userID;
  return <div>users details{userID}</div>;
}

export default UsersDetails;