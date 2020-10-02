import React from "react";
// import DataService from "../../services/DataService";
// import { withAsyncAction } from "../../redux/HOCs";

function UserInfo(props) {
  return (
    <div>
      <h2>{props.username}</h2>
      <h2>{props.displayName}</h2>
      <h2>{props.createdAt}</h2>
    </div>
  );
}

export default UserInfo;
