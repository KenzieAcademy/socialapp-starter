import React from "react";
import DataService from '../../dataService';

class GetMessages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
    this.client = new DataService();
  }

  handleGetMessages = e => {
    e.preventDefault();
    
      this.client.getMessages().then(response => {
        // alert(JSON.stringify(result.data))
        console.log(response)
        console.log(response.data.messages)
        this.setState({ data: response.data.messages })
      });
        
    
  }

  render() {
    const { loading, error } = this.props;
    return (
      <div className="GetMessages">
          <button onClick={this.handleGetMessages}>Messages</button>
          <ul>
           {this.state.data.map(d => <li key={d.messages}>{d.text}</li>)}
           </ul>
         
         </div>
    );
  }
}

export default GetMessages;