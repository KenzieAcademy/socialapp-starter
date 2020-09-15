import React from "react"
import { Avatar, Textarea, Button } from "evergreen-ui"


class SendPost extends React.Component {

render() {
    return (
        <div>


<Avatar isSolid name="Tyler Ammons" size={40} />

<form id="PostMessage" onSubmit={messagePost}>

<Textarea
  name="textarea-1"
  placeholder="Textarea placeholder..."
  label="Feed Post"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
/>




<Button marginRight={16}>Post</Button>

</form>

</div>
    )
}}





export default SendPost;