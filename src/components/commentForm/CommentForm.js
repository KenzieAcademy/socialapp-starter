import React from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'

const CommentForm = () => (
  <Comment.Group>
    <Comment className= 'comment'>
      
      <Comment.Content>
        
        <Comment.Actions>
          
        </Comment.Actions>
        <Form reply>
          <Form.TextArea />
          <Button
            content='Add Reply'
            labelPosition='left'
            icon='edit'
            primary
          />
        </Form>
      </Comment.Content>
    </Comment>
  </Comment.Group>
)

export default CommentForm