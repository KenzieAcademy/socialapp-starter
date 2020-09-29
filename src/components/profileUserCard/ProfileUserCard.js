import React from "react";
import DeleteAccount from "../deleteAccount/DeleteAccount";
import {
  Card,
  Icon,
  Image,
  Button,
  Grid,
  Form,
  Advertisement
} from 'semantic-ui-react';

const description = [
  'Matthew is a violinist with 2 years experience in the wedding industry.',
  'He enjoys the outdoors and currently resides in upstate New York.',
].join(' ')

const ProfileUserCard = () => (
  <Grid columns={3} divided>
  <Grid.Column >
    <Card >
      <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
      <Button.Group basic>
        <Button>Message</Button>
        <Button basic color='green' content='Upload' />
      </Button.Group>
      <Button basic>Follow</Button>
      <Card.Content>
          <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
          <Card.Description>
          Matthew is a musician.
          </Card.Description>
      </Card.Content>
      <Card.Content header='About Me' />
      <Card.Content description={description} />
      <Card.Content  extra>
        <Icon name='user' /> 1337 Friends
      </Card.Content>
    <DeleteAccount/>
    </Card>
  </Grid.Column>

  <Grid.Column >
      <Form Post>
      <Form.TextArea />
      <Button content='Post' labelPosition='left' icon='edit' primary />
      </Form>
  </Grid.Column>

  <Grid.Column >
  <Advertisement unit='vertical rectangle' test='Vertical Rectangle' />
  <Advertisement unit='vertical rectangle' test='Vertical Rectangle' />
  <Advertisement unit='vertical rectangle' test='Vertical Rectangle' />
  </Grid.Column>

  </Grid>
)

export default ProfileUserCard;