import React from 'react'
import {
  Card,
  Icon,
  Image,
  Segment,
  Grid,
  Divider,
  Button,
  Feed
} from 'semantic-ui-react'

const description = [
  'Matthew is a violinist with 2 years experience in the wedding industry.',
  'He enjoys the outdoors and currently resides in upstate New York.',
].join(' ')

const ProfileUserCard = () => (
   <Segment>
    <Grid columns={3} relaxed='very'>
      <Grid.Column>
          <Card>
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
              <Button basic color='red' content='Delete Account' />
            </Card>
        </Grid.Column>
                  {/* /////////////////// SECOND COLUMN STARTS HERE ////////////////// */}
        <Grid.Column>
        <Feed>
          <Feed.Event>
            <Feed.Label>
              <img alt='profilePhoto' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>Elliot Fu</Feed.User> added you as a friend
                <Feed.Date>1 Hour Ago</Feed.Date>
              </Feed.Summary>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />4 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
            <Feed.Content>
              <Feed.Summary>
                <a>Helen Troy</a> added <a>2 new illustrations</a>
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a>
                  <img alt='photo' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </a>
                <a>
                  <img alt='photo' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </a>
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />1 Like
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
            <Feed.Content>
              <Feed.Summary
                date='2 Days Ago'
                user='Jenny Hess'
                content='add you as a friend'
              />
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />8 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
            <Feed.Content>
              <Feed.Summary>
                <a>Joe Henderson</a> posted on his page
                <Feed.Date>3 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>
                Ours is a life of constant reruns. We're always circling back to where
                we'd we started, then starting all over again. Even if we don't run
                extra laps that day, we surely will come back for more of the same
                another day soon.
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />5 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/justen.jpg' />
            <Feed.Content>
              <Feed.Summary>
                <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a>
                  <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </a>
                <a>
                  <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </a>
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />
                  41 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        </Feed>
        </Grid.Column>
    </Grid>
   <Divider></Divider>
 </Segment>
)

export default ProfileUserCard