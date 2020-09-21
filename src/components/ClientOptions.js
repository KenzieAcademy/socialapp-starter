import axios from 'axios';

class ClientOptions {
    constructor(url = 'https://socialapp-api.herokuapp.com'), client = axios.create()){
        this.client = client
        this.url = url
    }
    // GetAllUsers() {
    //     return this.client.get(this.url + "/users")
    // }
    INameUser() {
        return this.client.get(this.url + "/users/{username}")
    }
    IDeleteUser(){
        return this.client.delete(this.url + "/users/{username}")
    }
    UpdateUserName() {
        return this.client.patch(this.url + "/users/{username}")
    }
    // return this.client.patch(this.url + users + logoutData.results)
    // return this.client.patch(this.uurl + "/user/{username} + grabPicture.results)
    GrabMessageList() {
        return this.client.get(this.url + "/messages?????")
    }
    PostMessages(){
        return this.client.post(this.url + "messages////")
    }
    GetMessage(){
        return this.client.get(this.url + "/messages//////")
    }
    //class LoginForm Extends React.Component {
    //     state = {username: "", password: ""}
    //     handleLogin = event => {
    //         event.preentDefaul()
    //         eventObject: event
    //         this.PaymentResponse.login(this.state)
    //     }
    // }



    GrabPicture() {
        return this.client.get(this.url + "/users{username}/picture")
    }
    PutPictureUp(){
        return this.client.put(this.url + "/users/{username}/picture")
    }
    LoginUser() {
        return this.client.post(this.url + "/auth/login")
    }
    LogoutUser() {
        return this.client.get(this.url + "/auth/logout")
    }
    // RegisterUser(userData){
    //     return this.client.post(this.url + "/users", userData)
    // }


    // npm install --save react-infinite-scroll-component
 
    // or
   
    // yarn add react-infinite-scroll-component
   
    // // in code ES6
    // import InfiniteScroll from 'react-infinite-scroll-component';
    // // or commonjs
    // var InfiniteScroll = require('react-infinite-scroll-component');


    ////////////////////////////////////////// USING SCROLL:
//     <InfiniteScroll
//   dataLength={items.length} //This is important field to render the next data
//   next={fetchData}
//   hasMore={true}
//   loader={<h4>Loading...</h4>}
//   endMessage={
//     <p style={{ textAlign: 'center' }}>
//       <b>Yay! You have seen it all</b>
//     </p>
//   }
//   // below props only if you need pull down functionality
//   refreshFunction={this.refresh}
//   pullDownToRefresh
//   pullDownToRefreshThreshold={50}
//   pullDownToRefreshContent={
//     <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
//   }
//   releaseToRefreshContent={
//     <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
//   }
// >
//   {items}
// </InfiniteScroll>



/////////////////////////SCROLL ON TOP:

// <div
//   id="scrollableDiv"
//   style={{
//     height: 300,
//     overflow: 'auto',
//     display: 'flex',
//     flexDirection: 'column-reverse',
//   }}
// >
//   {/*Put the scroll bar always on the bottom*/}
//   <InfiniteScroll
//     dataLength={this.state.items.length}
//     next={this.fetchMoreData}
//     style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
//     inverse={true} //
//     hasMore={true}
//     loader={<h4>Loading...</h4>}
//     scrollableTarget="scrollableDiv"
//   >
//     {this.state.items.map((_, index) => (
//       <div style={style} key={index}>
//         div - #{index}
//       </div>
//     ))}
//   </InfiniteScroll>
// </div>


// The InfiniteScroll component can be used in three ways.

// Specify a value for the height prop if you want your scrollable content to 
// have a specific height, providing scrollbars for scrolling your content and 
// fetching more data.
// If your scrollable content is being rendered within a parent element that 
// is already providing overflow scrollbars, you can set the scrollableTarget 
// prop to reference the DOM element and use it's scrollbars for fetching more data.



// SIDEBAR COMPONENT:
// <Sidebar background="brand" round="small"
//       header={
//         <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
//       }
//       footer={
//         <Button icon={<Icons.Help />} hoverIndicator />
//       }
//     >
//       <Nav gap="small">
//         <Button icon={<Icons.Projects />} hoverIndicator />
//         <Button icon={<Icons.Clock />} hoverIndicator />
//       </Nav>
//     </Sidebar>

///////////////////////////

    // handleRegisterUser = event => {
    //     api.registerNewUser(this.State, {
    //         OnSuccess: ({ user }) => {

    //         }
    //     })
    // }


}


/// END OF LINE