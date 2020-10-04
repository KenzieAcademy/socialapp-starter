import React from 'react';

import axios from "axios";
 
const fetchData = () => {
  
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
      interval= {3000} 
      retryCount={3} 
      onSuccess={() => console.log('handle success')}
      onFailure={() => console.log('handle failure')} 
      promise={fetchData} 
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