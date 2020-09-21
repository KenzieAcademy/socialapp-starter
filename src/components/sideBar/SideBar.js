// import React from 'react';
// import { Header, Icon, Menu, Segment, Sidebar, Grid, } from 'semantic-ui-react';
// import { Link } from "react-router-dom";
// import Clock from "../../pages/clock/Clock";

// import UploadImage from "../addPhoto/AddPhoto";


// const SidebarVisible = () => (
//     <Grid colums={1}>
//         <Grid.Column>
//             <Sidebar.Pushable as={Segment.Group} raised>
//                 <Sidebar
//                     as={Menu}
//                     animation='push'
//                     icon='labeled'
//                     inverted
//                     vertical
//                     visible
//                     width='thin'
//                 >

//                     <Clock />

//                     <Menu.Item as='a'>
//                         <Icon name='space shuttle' />

//         Visit the Planets!
//       </Menu.Item>
//                     <Menu.Item as='a'>
//                         <Icon name='rocket' />
//                         <Link to="/Style">Create your style!</Link>

//                     </Menu.Item>

//                 </Sidebar>

//                 <Sidebar.Pusher>
//                     <Segment basic>

//                         <Header as='h3'>User's Name</Header>
//                         <UploadImage />
//                     </Segment>

//                 </Sidebar.Pusher>
//             </Sidebar.Pushable>
//         </Grid.Column>
//     </Grid>
// )

// export default SidebarVisible















// import React from "react";
// import Clock from "../../pages/clock/Clock";
// import { withAsyncAction } from "../../redux/HOCs";


// export class SideBar extends React.Component {
//     render() {


//         return (
//             <div>
//                 <Clock isAuthenticated={this.props.isAuthenticated} />

//             </div>
//         );
//     }

// }

// export default withAsyncAction("auth", "login")(SideBar);


