import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import FetchService from "../FetchService"
import {  Image, Button, Form, Grid, Segment, Header, List} from 'semantic-ui-react'
import { withAsyncAction } from "../redux/HOCs";
import imageGatsby from "../images/gatsby.jpg"

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.client = new FetchService()

    this.state = {
      formData: {
        displayName: "",
        about: "",
        password: ""
      },

      "user": {
        "pictureLocation": null,
        "username": "null",
        "displayName": "null",
        "about": "null",
        "googleId": null,
        "createdAt": "null",
        "updatedAt": "null",

      },
      "statusCode": null
    }
  }

  componentDidMount() {
    this.client.getUser(this.props.match.params.username).then((userData) => {
      this.setState(userData)
    })
  }

  handleChange = event => {
    const newformData = { ...this.state.formData };
    newformData[event.target.name] = event.target.value;

    this.setState({ formData: newformData });
  };

  handleUpdateUser = event => {
    event.preventDefault()
    let formDataCopy = this.state.formData
    for(let property in formDataCopy){
      if(formDataCopy[property] === ""){

        delete formDataCopy[property]
      }
    }
 

    this.client.updateUser(this.state.user.username, formDataCopy)
      .then(updateUserData => {
        this.setState({
          user: updateUserData.user
        })
      })
  }

  handleDeleteUser = (event) => {
    let token = JSON.parse(localStorage.getItem('login')).result.token
    this.props.logout().then(this.client.deleteUser(this.state.user.username, token))

  }
  handleSubmitPhoto = (event) => {
    event.preventDefault()
    let pictureFormData = this.fileUpload(this.state.picture)
    this.client.getUserPicture(this.state.user.username, pictureFormData).then(()=>{
      this.client.getUser(this.props.match.params.username).then((userData)=>{
        this.setState({
          user:userData.user
        })
      })
    })
  }
  onFileChange = event => {
    if (event.target.files === undefined) return
    this.setState({
      picture: event.target.files[0]
    })
  }
  fileUpload(file) {
    let formData = new FormData()
    formData.append("picture", file)
    return formData
  }

  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />

        
        <Header as='h2' textAlign = 'center' color='blue'>Your Profile Page</Header>
 
        <Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column Align='center'>
      <Image src={'https://socialapp-api.herokuapp.com' + this.state.user.pictureLocation }/>
      </Grid.Column>
      <Grid.Column>
                <Segment>
                   This is the page where you can tell us about yourself.
                   What kind of books you like.  Who is your 
                   favorite author(s). What motivates you to pick 
                   up that next book. This is a very friendly site,
                   so don't worry.  Your voice can be heard here and 
                   you may even find life long friends within these 
                   virtual walls.   
                  

                </Segment>
                          
      </Grid.Column>
  
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
      <Header as='h2' textAlign = 'center'>{this.state.user.displayName}</Header> 
        <br/>
      <Segment as='h3' textAlign = 'center'>{this.state.user.about}</Segment>
      </Grid.Column>
      <Grid.Column Align='center'>
            <Image src={imageGatsby}   size='small'/>
      </Grid.Column>
      
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
      <Form onSubmit={this.handleUpdateUser}>
        <Form.Field>
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            name="displayName"
            autoFocus
            required
            onChange={this.handleChange}
          />
        </Form.Field>

           
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="about">About</label>
            <input
              type="text"
              name="about"
              required
              onChange={this.handleChange}
            />
          </Form.Field>

          <Button primary  onClick={this.handleUpdateUser}>
            Update User
          </Button>

          <Button secondary  onClick={this.handleDeleteUser}>
            Delete User
          </Button>
         
            <Button type="primary" onClick={this.handleSubmitPhoto}>
              Submit Photo
            </Button>
            <input
              type="file"
              name="picture"
              required
              onChange={this.onFileChange}
            />
         
       
        </Form>
      </Grid.Column>
      <Grid.Column>
              <Segment>
              <Header as='h3' textAlign = 'center' color='black'>Spotlight Book of the Month</Header>
              <Header as='h3' textAlign = 'center' color='blue'>The Great Gatsby</Header>

              The Great Gatsby is a 1925 novel written by American author 
              F. Scott Fitzgerald that follows a cast of characters living 
              in the fictional towns of West Egg and East Egg on prosperous
               Long Island in the summer of 1922. Many literary critics consider 
               The Great Gatsby to be one of the greatest novels ever written

              </Segment>
      </Grid.Column>
      
    </Grid.Row>

    <Grid.Row>
     <Grid.Column></Grid.Column>
      <Grid.Column>
      <Header as='h3' textAlign = 'center' color='black'>Current Book Clubs</Header>
      <List bulleted>
    <List.Item>The Classics</List.Item>
    <List.Item>Frank and Ira's Best Seller's List</List.Item>
    <List.Item>Teen Talk</List.Item>
    <List.Item>Sci-Fi and Beyond</List.Item>
    <List.Item>History Lovers</List.Item>
    <List.Item>Murder Becomes Them</List.Item>
    <List.Item>Current Affairs</List.Item>
    <List.Item>Let's Cook. Then Eat.</List.Item>
    <List.Item>Sweet as a Rose Garden Club</List.Item>
    <List.Item>All Things Shakespeare</List.Item>
    <List.Item>
      Benefits
      <List.List>
        <List.Item>Research</List.Item>
        <a href= 'https://en.wikipedia.org/wiki/Main_Page'target="_blank">'https://en.wikipedia.org/wiki/Main_Page'</a>
        <List.Item>Camaraderie</List.Item>
        <List.Item>Discounts at Paintwell's Bookstores</List.Item>
      </List.List>
    </List.Item>
    <List.Item>Door Prizes</List.Item>
  </List>
      </Grid.Column>
      
    </Grid.Row>
  </Grid>
           
 </div>
    );
  }
}


export default withAsyncAction("auth", "logout")(userIsAuthenticated(Profile));
