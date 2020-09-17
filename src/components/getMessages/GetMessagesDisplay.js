import React from "react";
// will require component library before further inspection, may end up using a multitude of pagination assuming 4-5? Requires more Research!
// Until then dead at this time
function GetMessageDisplay(props) {
  return (
    <div>
      {props.messagesBy10[0]} Outside
      {/* {props.pullUser()} */}
      <br />
      {/* <div>{props.messagesBy10[(props.value, 1)]}</div> */}
    </div>
  );
}

export default GetMessageDisplay;
