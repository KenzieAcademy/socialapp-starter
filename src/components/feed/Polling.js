import React from 'react';
// import of some lib for making http calls
// let's say you are using axios
import axios from "axios";
 
const fetchData = () => {
  // return a promise
  return axios.get("https://socialapp-api.herokuapp.com/messages");
}

class Polling extends React.Component {
    constructor(props){
    super(props);
    this.state
}}
render = () => {
  return (
    <ReactPolling
      url={'url to poll'}
      interval= {3000} // in milliseconds(ms)
      retryCount={3} // this is optional
      onSuccess={() => console.log('handle success')}
      onFailure={() => console.log('handle failure')} // this is optional
      promise={fetchData} // custom api calling function that should return a promise
      render={({ startPolling, stopPolling, isPolling }) => {
        if(isPolling) {
          return (
            <div> Hello I am polling</div>
          );
        } else {
          return (
            <div> Hello I stopped polling</div>
          );
        }
      }}
    />
  );
}

export default Polling