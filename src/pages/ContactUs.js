import React from "react";
import MenuUnauthenticated from "../components/menu/MenuUnauthenticated";
import { Layout } from 'antd';
import theQuestBoardHeader from '../media/theQuestBoardHeader.png'
import Dice from '../components/dice/Dice'
import Foot from "../components/foot/Foot";


<<<<<<< HEAD
class ContactUs extends React.Component {
  constructor(props){
  super(props)

  this.state = {
    pictureUrl:"" 
  }
     
  }
  
  // componentDidMount (){ 
  //   const questboardService = new QuestboardService();
  //   const loggedInUsername = questboardService.getUsername()
  //   questboardService.GetPicture(loggedInUsername)
  //   .then(pictureObject => {
  //   console.log(pictureObject.request.responseURL)
  //   console.log(pictureObject)
  //   this.setState(latestState => ({pictureUrl: latestState.pictureUrl + pictureObject.config.url}))
  // })
  // }
=======

class ContactUs extends React.Component {
>>>>>>> 3ca06561b395d10ada86e3700b29a91324d202a0

  render() {

    const { Header, Content } = Layout;

    return (
      <div class="container">
        <Layout className="site-layout">
          <MenuUnauthenticated />
          <Header className="mainHeader" style={{ padding: 0, textAlign: 'center' }}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>
          <Content style={{ width: '100%', overflow: 'initial' }} >
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
              <h1>Dice Roller</h1>
              <Dice />
            </div>
          </Content>
          <Foot />

        </Layout>
      </div>
    );
  }
}

export default ContactUs;
