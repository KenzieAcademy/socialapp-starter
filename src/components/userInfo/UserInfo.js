import React from "react";
import Card from "react-bootstrap/Card";
import "./UserInfo.css";
import Badge from "react-bootstrap/Badge";

function UserInfo(props) {
  return (
    <div className="Info">
      <Card style={{ width: "30rem", height: "20rem" }}>
        <h5>- User -</h5>
        <h2>
          <Badge variant="dark">{props.username}</Badge>
        </h2>
        <br />
        <h5>- Display Name - </h5>
        <h2>
          <Badge variant="dark">{props.displayName}</Badge>
        </h2>
        <br />
        <h5>- Created -</h5>
        <h2>
          <Badge variant="dark">{props.createdAt}</Badge>
        </h2>
      </Card>
    </div>
  );
}

export default UserInfo;