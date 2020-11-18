// import React from "react";
// // import Spinner from "react-spinkit";
// import { withAsyncAction } from "../../redux/HOCs";
// import { Grid } from "semantic-ui-react";
// import { SideBar } from "../sideBar/SideBar";
// import Message from "../message/message";

// export class PageLayout extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Grid>
//                     <Grid.Row columns={5}>
//                         <Grid.Column floated='left'>

//                             <SideBar />

//                         </Grid.Column>
//                         <Grid.Column floated='right'>

//                             <Message isAuthenticated={this.props.isAuthenticated} />

//                         </Grid.Column>
//                     </Grid.Row>
//                 </Grid>
//             </div>
//         )
//     }
// }


// export default withAsyncAction("auth", "logout")(PageLayout)