import React, { Component } from 'react';

//import our service
import DataService from '../../dataService';
const feed =
[
    {
      "id": 0,
      "text": "string",
      "username": "string",
      "createdAt": "2020-09-14T18:30:17.676Z",
      "likes": [
        {
          "id": 0,
          "username": "string",
          "messageId": 0,
          "createdAt": "2020-09-14T18:30:17.676Z"
        }
      ]
    }
  ]

class Feed extends Component {

  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.state = {
      messages:(       
            "id": 0,
            "text": "string",
            "username": "string",
            "createdAt": "2020-09-14T18:19:47.180Z",
            "likes": []
      )
      }
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewPost() { //catalyst to change state by getting posts//
    return this.client.getUsers().then(result => {
      this.setState({
        messages: result.data[0]
      })
      
    })
  }
  //when the component mounts, get the first question
  componentDidMount() {
    this.getNewPost();
  }


  //Alec WTF!!   #$%%^

  //display the results on the screen BULLET POINT 2:
  render() {  //Conditional Rendering//

    let category = "loading";

    if (this.state.data.category) {
      category = this.state.data.category.title
    }
    return (
      <div>
        <strong>Users Score:</strong> {this.state.score} <br />
        <strong>Question:</strong> {this.state.data.question} <br />
        
        <strong>Value:</strong> {this.state.data.value} <br />
        <strong>Category:</strong> {category}<br />

        <div className="Answer">
        </div>


        <label htmlFor="Answer">Your Answerrrr:</label>
        <input type="text"

          // placeholder={"Your Answer here!"}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />


        <button type='submit' onClick={this.handleSubmit}>Submit</button>
        <strong>Answer:</strong> {this.state.data.answer} <br />
      </div>


    )



  }
}
export default Jeopardy;






export default Feed