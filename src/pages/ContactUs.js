import React from "react";
import MenuUnauthenticated from "../components/menu/MenuUnauthenticated";
import { Layout } from 'antd';
import theQuestBoardHeader from '../media/theQuestBoardHeader.png'
import QuestboardService from "../components/servicesPage/ServicePage"
import Dice from '../components/dice/Dice'


class ContactUs extends React.Component {
  constructor(props){
  super(props)

  this.state = {
    pictureUrl:"" }

  }
  
  componentDidMount (){
    const questboardService = new QuestboardService
    const loggedInUsername = questboardService.getUsername()

    questboardService.GetPicture(loggedInUsername)
  .then(pictureObject => {
    console.log(pictureObject.request.responseURL)
    console.log(pictureObject)
    this.setState(latestState => ({pictureUrl: latestState.pictureUrl + pictureObject.config.url}))
  })
  }

  render() {



    const { Header, Content, Footer } = Layout;
    return (

      <Layout className="site-layout" style={{ marginLeft: 190 }}
      ><MenuUnauthenticated />
        <Header className="mainHeader" style={{ padding: 0, textAlign: 'center' }}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>
        <Header className="subHeader" ><h2>Contact Us!</h2> </Header>
        <Content style={{ margin: '24px auto auto', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
<div><img className="displayPicture"src={this.state.pictureUrl} alt="picture"/></div>

<Dice />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus integer. Lectus proin nibh nisl condimentum id venenatis a condimentum. Amet consectetur adipiscing elit duis tristique sollicitudin. Egestas quis ipsum suspendisse ultrices gravida dictum. Eu sem integer vitae justo. Faucibus purus in massa tempor nec feugiat. Sodales ut etiam sit amet nisl. Urna molestie at elementum eu. Eleifend mi in nulla posuere. Quam pellentesque nec nam aliquam sem et. Tellus at urna condimentum mattis pellentesque id nibh tortor id.
</p>
            <p>Blandit volutpat maecenas volutpat blandit aliquam etiam. Duis at consectetur lorem donec massa sapien faucibus. Tellus elementum sagittis vitae et leo duis. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Facilisis mauris sit amet massa vitae tortor condimentum. Feugiat in ante metus dictum at tempor. Gravida rutrum quisque non tellus orci ac auctor augue. Purus faucibus ornare suspendisse sed nisi. Potenti nullam ac tortor vitae purus faucibus. Elit eget gravida cum sociis natoque penatibus et magnis. Leo vel orci porta non. Sed euismod nisi porta lorem. Pulvinar mattis nunc sed blandit libero volutpat. Arcu bibendum at varius vel pharetra vel turpis nunc.
</p>
            <p>Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Sagittis orci a scelerisque purus semper eget duis. Amet dictum sit amet justo donec enim diam vulputate. Felis donec et odio pellentesque diam volutpat commodo sed. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Neque convallis a cras semper auctor neque. Hac habitasse platea dictumst quisque. Morbi tristique senectus et netus et. Nunc id cursus metus aliquam eleifend mi in nulla. Habitant morbi tristique senectus et netus et malesuada fames ac. Maecenas sed enim ut sem viverra aliquet eget sit amet. Turpis egestas sed tempus urna et pharetra pharetra. Interdum consectetur libero id faucibus nisl. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Vehicula ipsum a arcu cursus vitae. Bibendum arcu vitae elementum curabitur vitae nunc sed. Senectus et netus et malesuada fames. Integer enim neque volutpat ac tincidunt vitae semper quis lectus.
</p>
            <p>Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Proin sed libero enim sed faucibus turpis. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Auctor urna nunc id cursus metus aliquam eleifend mi. Et leo duis ut diam quam nulla porttitor massa id. Nibh ipsum consequat nisl vel pretium lectus quam. Eget mi proin sed libero. Dui faucibus in ornare quam viverra orci sagittis. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. A condimentum vitae sapien pellentesque. Ut etiam sit amet nisl purus in mollis. Pretium viverra suspendisse potenti nullam.
</p>
            <p>Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Malesuada bibendum arcu vitae elementum. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Adipiscing vitae proin sagittis nisl rhoncus mattis. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. A condimentum vitae sapien pellentesque habitant. Vel elit scelerisque mauris pellentesque. Et odio pellentesque diam volutpat commodo. Urna neque viverra justo nec ultrices dui sapien eget. Felis eget velit aliquet sagittis. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut.
</p>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }
}

export default ContactUs;
